import { Container, Form, Background } from "./styles";
import React, { useState } from 'react';
import { useAuth } from "../../Auth/useAuth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Login(){
    const { login, user } = useAuth();
    const navigate = useNavigate(); // Cria a função de navegação
    const [credentials, setCredentials] = useState({ email: '', password: '' });
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(credentials);
            navigate('/home');
            console.log('Usuário logado:', user);
        } catch (error) {
            console.error('Falha no login:', error);
        }
    };

    return (
        <Container>
        <Background/>
        
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <h2>Novo aqui? <a to="/register" href="/register">Crie sua conta</a></h2>

            <div className="loginBox">
            <label>E-mail</label>
            
            <Input 
            
              type="text"
              placeholder="usuario@email.com"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            
            <label>Senha</label>
            
             <Input 
            type="password"
            placeholder="Senha"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
               
            />
            </div>
           <Button title="Login" type="submit">Login</Button>
            
            <Link to="/request-password-reset">Esqueceu sua senha? </Link>
                       
           
            </Form>
        </Container>
    )
}