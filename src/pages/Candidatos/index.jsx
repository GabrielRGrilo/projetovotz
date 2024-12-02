import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import {
    Container,
    Form,
    Row,
    Th,
    Td,
    IconAction,
    NoCandidatesRow,
    FileNameDisplay,
    IconWrapper,
    FileInputContainer,
    HiddenFileInput,
    StyledLabel,
    IconContainer,
} from "./styles";
import { Button } from "../../components/Button";
import { FaTrash, FaPen, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Candidatos = ({ setActiveTab }) => {
    const electionId = sessionStorage.getItem("electionId");
    const [candidates, setCandidates] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState("");
    const [photo, setPhoto] = useState(null);
    const [editingCandidateId, setEditingCandidateId] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchCandidates();
    }, []);

    const fetchCandidates = async () => {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await api.get(`/candidates?electionId=${electionId}`);
            setCandidates(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Erro ao buscar candidatos:", error.response?.data || error.message);
            setErrorMessage("Erro ao buscar candidatos. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setFileName(file.name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("profile", profile);
        formData.append("electionId", electionId);
        if (photo) formData.append("photo", photo);

        try {
            if (editingCandidateId) {
                await api.put(`/candidates/${editingCandidateId}`, formData);
            } else {
                await api.post("/candidates", formData);
            }
            fetchCandidates();  // Refaz a requisição para atualizar a lista de candidatos
            resetForm();
        } catch (error) {
            console.error("Erro ao salvar candidato:", error.response?.data || error.message);
            setErrorMessage("Erro ao salvar candidato. Verifique os campos e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (candidate) => {
        setEditingCandidateId(candidate._id);
        setName(candidate.name);
        setEmail(candidate.email);
        setProfile(candidate.profile);
    };

    const handleDelete = async (id) => {
        setLoading(true);
        setErrorMessage("");
        try {
            await api.delete(`/candidates/${id}`);
            fetchCandidates(); // Atualiza a lista após a exclusão
        } catch (error) {
            console.error("Erro ao excluir candidato:", error.response?.data || error.message);
            setErrorMessage("Erro ao excluir candidato. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setProfile("");
        setPhoto(null);
        setEditingCandidateId(null);
        setFileName("");
        document.getElementById("photo").value = null;
    };

return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Row>
                <div>
                    <label htmlFor="name">Nome Completo</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
            </Row>

            <Row>
                <div style={{ flex: 1 }}>
                    <label htmlFor="photo">Foto do candidato</label>
                    <FileInputContainer>
                        <StyledLabel>
                            <FileNameDisplay>
                                {fileName || "Escolher arquivo..."}
                            </FileNameDisplay>
                            <HiddenFileInput
                                type="file"
                                id="photo"
                                onChange={handleFileChange}
                            />
                            <IconWrapper>
                                <FaUpload />
                            </IconWrapper>
                        </StyledLabel>
                    </FileInputContainer>
                </div>

                <div style={{ flex: 2 }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </Row>

            <Row>
                <div>
                    <label htmlFor="profile">Descrição/Biografia</label>
                    <input
                        id="profile"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        required
                    />
                </div>
            </Row>

            <Row>
                <Button
                    title={
                        editingCandidateId ? "Atualizar Candidato" : "Adicionar Candidato"
                    }
                    type="submit"
                    className="button"
                />
            </Row>
        </Form>

        <h3>Tabela de Candidatos</h3>
        <table>
            <tbody>
                {candidates.length > 0 ? (
                    candidates.map((candidate) => (
                        <tr key={candidate._id}>
                            <Td>
                                <span>{candidate.name}</span>
                                <IconContainer>
                                    <IconAction>
                                        <Link to="#" onClick={() => handleEdit(candidate)}>
                                            <FaPen className="icon" />
                                        </Link>
                                    </IconAction>
                                    <IconAction>
                                        <Link to="#" onClick={() => handleDelete(candidate._id)}>
                                            <FaTrash className="icon" />
                                        </Link>
                                    </IconAction>
                                </IconContainer>
                            </Td>
                        </tr>
                    ))
                ) : (
                    <NoCandidatesRow>
                        <td colSpan="1">Nenhum candidato encontrado.</td>
                    </NoCandidatesRow>
                )}
            </tbody>
        </table>
        <Row>
            <div></div>
            <Button type="submit" title="Voltar" className="button" onClick={() => { setActiveTab("eleitores"); }} />
            <Button type="submit" title="Próxima" className="button" onClick={() => { setActiveTab("auditor"); }} />
        </Row>
    </Container>
);
};

Candidatos.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
};


export default Candidatos;
