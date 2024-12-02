import React, { useState } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Container, Content, Form, Header } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from "../../assets/logomarca.png";

export function EsqueciSenha() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Faz uma requisição para o backend para enviar o email de recuperação de senha
            const response = await api.post('/request-password-reset', { email });
            setMessage(response.data.message);
        } catch (error) {
            console.error("Erro ao enviar o email de recuperação:", error);
            setMessage(error.response?.data?.message || 'Erro ao tentar enviar o email de recuperação.');
        }
    };

    return (
        <Container>
            <Link to="/login">
            <FaArrowLeft  />
            </Link> 

            <Content>

                <Header>
                    <img src={logo} alt="Votz logo" className="logo" />
                    <p>Vote online com segurança.</p>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <h1>Esqueci minha Senha</h1>


                    <div className='inputBox'>
                    <label htmlFor="email">Digite seu E-mail:</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@email.com"
                        value={email}
                        onChange={handleInputChange}
                    />
                    </div>
                    <Button title="Enviar e-mail de recuperação" type="submit">Enviar Instruções</Button>

                    {message && <p>{message}</p>} {/* Exibe a mensagem de sucesso ou erro */}
                </Form>
            </Content>
        </Container>
    );
}