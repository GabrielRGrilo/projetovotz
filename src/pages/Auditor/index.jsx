import React, { useState, useEffect, navigate } from "react";
import { api } from "../../services/api";
import {
  Container,
  Form,
  Row,
  Table,
  Td,
  IconAction,
  NoAuditorsRow,
  ButtonRow,
  IconContainer,
  Overlay,
  ModalContent,
  CloseButton,
} from "./styles";
import { Button } from "../../components/Button";
import { FaTrash, FaPen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Auditores = ({ setActiveTab }) => {
  const electionId = sessionStorage.getItem("electionId");
  const adminId = sessionStorage.getItem("adminId");
  const [auditors, setAuditors] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [editingAuditorId, setEditingAuditorId] = useState(null);

  // Fetch auditors whenever the component is mounted
  useEffect(() => {
    if (electionId) fetchAuditors();
  }, [electionId]);

  const fetchAuditors = async () => {
    try {
      const response = await api.get(`/auditors?electionId=${electionId}`);
      setAuditors(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Erro ao buscar auditores:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auditorData = { electionId, name, email, profile };
    try {
      if (editingAuditorId) {
        // Update existing auditor
        await api.put(`/auditors/${editingAuditorId}`, auditorData);
      } else {
        // Add new auditor
        await api.post("/auditors", auditorData);
      }
      fetchAuditors();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar auditor:", error);
    }
  };

  const handleEdit = (auditor) => {
    setEditingAuditorId(auditor._id);
    setName(auditor.name);
    setEmail(auditor.email);
    setProfile(auditor.profile);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/auditors/${id}`);
      fetchAuditors();
    } catch (error) {
      console.error("Erro ao excluir auditor:", error);
    }
  };

    const handleFinalizar = () => {
        navigation.navigate('Home');
    };

  const resetForm = () => {
    setName("");
    setEmail("");
    setProfile("");
    setEditingAuditorId(null);
  };

  return (
    <>
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
            <div>
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
            <ButtonRow>
              <Button
                title={
                  editingAuditorId ? "Atualizar Auditor" : "Adicionar Auditor"
                }
                type="submit"
                className="button"
              />
            </ButtonRow>
          </Row>
        </Form>

        <h3>Tabela de Auditores</h3>
        <Table>
          <tbody>
            {auditors.length > 0 ? (
              auditors.map((auditor) => (
                <tr key={auditor._id}>
                  <Td>
                    <span>{auditor.name}</span>
                    <IconContainer>
                      <IconAction>
                        <Link to="#" onClick={() => handleEdit(auditor)}>
                          <FaPen className="icon" />
                        </Link>
                      </IconAction>
                      <IconAction>
                        <Link to="#" onClick={() => handleDelete(auditor._id)}>
                          <FaTrash className="icon" />
                        </Link>
                      </IconAction>
                    </IconContainer>
                  </Td>
                </tr>
              ))
            ) : (
              <NoAuditorsRow>
                <td colSpan="1">Nenhum auditor encontrado.</td>
              </NoAuditorsRow>
            )}
          </tbody>
        </Table>
        <Row>
          <ButtonRow>
            <div></div>
            {/* <Button
              title="Voltar"
              type="button"
              className="button"
              onClick={() => {
                setActiveTab("candidatos");
              }}
            /> */}
            <Button
              title="Finalizar"
              type="button"
              className="button"
              onClick={handleFinalizar}            />
          </ButtonRow>
        </Row>
      </Container>
    </>
  );
};

Auditores.propTypes = {
  setActiveTab: PropTypes.func,
};

export default Auditores;
