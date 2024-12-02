import React, { useState, useEffect } from 'react';
import { Container, Content, Form} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../Auth/useAuth";
import { Header } from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import logo from "../../assets/logomarca.png";

export function Profile() {
    const { user, updateUser } = useAuth(); // Função updateUser simulada para atualizar dados do usuário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        newEmail: '',
        confirmNewEmail: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                currentPassword: '', // Campo de senha atual vazio inicialmente
                newPassword: '', // Campo de nova senha vazio inicialmente
                confirmNewPassword: '' // Campo de confirmação vazio inicialmente
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();


     
        // Verifica se a nova senha e a confirmação são iguais
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        try {
            await updateUser(formData); // Chamada para atualizar o perfil do usuário
            alert("Perfil atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar o perfil:", error);
            alert("Erro ao tentar atualizar o perfil. Tente novamente.");
        }
    };

    return (
        <Container>
            <Sidebar />

            <Content>
                <Header logo={logo}/> 
                <Form onSubmit={handleUpdateProfile}>
                    <h1>Perfil do Usuário</h1>
                        <h2>Atualize suas informações.</h2>

                    <div className='name-box'>    
                    <label htmlFor="name">Nome</label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className='box-styling'>
                    <div className='emails-box'>
                    <label htmlFor="email">E-mail atual</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                       <label htmlFor="email">Novo e-mail</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@email.com"
                        value={formData.newEmail}
                        onChange={handleInputChange}
                    />
                       <label htmlFor="email">Confirmação do novo e-mail</label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@email.com"
                        value={formData.confirmNewEmail}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className='passwords-box'>
                    <label htmlFor="currentPassword">Senha Atual</label>
                    <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        placeholder="Senha atual"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="newPassword">Nova Senha</label>
                    <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        placeholder="Nova senha"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="confirmNewPassword">Confirmação da Nova Senha</label>
                    <Input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        type="password"
                        placeholder="Confirme sua nova senha"
                        value={formData.confirmNewPassword}
                        onChange={handleInputChange}
                    />
                    </div>

                    </div>
                    <Button title="Salvar   " type="submit">Atualizar perfil</Button>
                </Form>
            </Content>
        </Container>
    );
}
