import React, { useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom'; // useParams para obter o token da URL
import { Container, Content, Form, Header } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logo from "../../assets/logomarca.png";

export function ResetarSenha() {
    const { resetToken } = useParams(); // Pega o token da URL
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica se as senhas coincidem
        if (newPassword !== confirmNewPassword) {
            setMessage('As senhas não coincidem.');
            return;
        }

        try {
            // Faz uma requisição para o backend para atualizar a senha
            const response = await api.post(`/reset-password/${resetToken}`, { 
                newPassword
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error("Erro ao atualizar a senha:", error);
            setMessage(error.response?.data?.message || 'Erro ao tentar atualizar a senha.');
        }
    };

    return (
        <Container>
            <Link to="/login">
                <FaArrowLeft />
            </Link>

            <Content>

                <Header>
                    <img src={logo} alt="Votz logo" className="logo" />
                    <p>Vote online com segurança.</p>
                </Header>

                <Form onSubmit={handleSubmit}>
                    <h1>Atualizar Senha</h1>

                    <label htmlFor="newPassword">Nova Senha:</label>
                    <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        placeholder="Digite sua nova senha"
                        value={newPassword}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="confirmNewPassword">Confirme a Nova Senha:</label>
                    <Input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        type="password"
                        placeholder="Confirme sua nova senha"
                        value={confirmNewPassword}
                        onChange={handleInputChange}
                    />

                    <Button title="Atualizar Senha" type="submit">Atualizar Senha</Button>

                    {message && <p>{message}</p>} {/* Exibe a mensagem de sucesso ou erro */}
                </Form>
            </Content>
        </Container>
    );
}