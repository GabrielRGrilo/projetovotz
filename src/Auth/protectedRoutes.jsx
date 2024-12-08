import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  // Verifique se o token está salvo nos cookies
  const token = Cookies.get("token"); // Use Cookies.get() para pegar o token
  console.log(token, 'Token encontrado nos cookies:');
  return !!token; // Retorna true se o token existir, indicando que o usuário está autenticado
};

const ProtectedRoute = () => {
  // Se autenticado, renderiza as rotas internas; se não, redireciona para "/login"
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
