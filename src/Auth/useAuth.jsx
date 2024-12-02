import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await fetch(`https://pmv-ads-2023-2-e4-proj-dad-t2-votz.onrender.com/api/login`, {
        method: "POST",
        credentials: "include", // Inclui cookies na requisição
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao fazer login.");
      }
  
      const data = await response.json();
      console.log("Login bem-sucedido:", data);
      return data;
    } catch (error) {
      console.error("Erro ao logar:", error.message);
    }
  };
  

  const register = async (credentials) => {
    try {
      // Faz a requisição de registro para o backend
      const response = await api.post(
        "/administrator",
        credentials,
        { withCredentials: true }
      );

      // Após o registro, salva o usuário retornado no estado
      setUser(response.data.user);

      return response.data.user;
    } catch (error) {
      console.error(
        "Erro ao registrar:",
        error.response?.data?.message || error.message
      );
      throw error;
    }
  };

  const updateUser = async (formData) => {
    try {
      // Faz a requisição para o backend para atualizar o usuário
      const response = await api.put(
        "/perfil",
        formData,
        { withCredentials: true }
      );

      // Atualiza o estado do usuário com as novas informações
      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
      throw new Error(
        error.response?.data?.message || "Erro ao tentar atualizar o perfil."
      );
    }
  };

  // Função de logout
  const logout = async () => {
    try {
      await api.post(
        "/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      Cookies.remove("token");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const checkAuth = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.get("/api/me", { withCredentials: true });
        setUser(response.data.user);
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};