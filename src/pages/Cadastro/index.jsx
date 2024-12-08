import { Container, Form, Background } from "./styles";
import React, { useState } from 'react';
import { useAuth } from "../../Auth/useAuth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export function Register(){
    const { register, user } = useAuth(); // Usa a função register em vez de login
    const navigate = useNavigate(); // Cria a função de navegação
    const [credentials, setCredentials] = useState({ email: '', password: '', name: '' }); // Adiciona o campo de nome
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(credentials); // Chama a função register em vez de login
            console.log('Usuário registrado:', user);
            navigate('/login'); // Navega para a página de login após o cadastro
        } catch (error) {
            console.error('Falha no cadastro:', error);
        }
    };

    return (
        <Container>
            <Background/>
            <Form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>

                <h2>Crie sua conta</h2>


                <div className="registerInputBox">
                <label>Nome</label>
                <Input 
                    type="text"
                    placeholder="Seu nome"
                    value={credentials.name}
                    onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                />

                <label>E-mail</label>
                <Input 
                    type="email"
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
                <Button title="Registrar" type="submit">Registrar</Button>
                
                <p>Já tem uma conta? <Link to="/login">Volte para o Login</Link></p>
            </Form>
        </Container>
    )
}