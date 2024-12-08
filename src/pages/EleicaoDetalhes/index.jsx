import { Container, Content } from "./styles";
import logo from "../../assets/logomarca.png";
import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/edit.png";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Modal } from "react-bootstrap"; // Importando o modal do react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Resultado } from "../ResultadoEleicao";
import CommonLayout from "@/components/CommonLayout"; // Importando o layout comum

import deleteIcon from "../../assets/images/delete.png";
import editIcon from "../../assets/images/edit.png";

const DetailedElection = () => {
  const electionId = sessionStorage.getItem("electionId");
  const adminId = sessionStorage.getItem("adminId");

  const [election, setElection] = useState();
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  const [auditors, setAuditors] = useState([]);
  const [voting, setVoting] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false); // Estado para controle do modal de publicação
  const [isPublishing, setIsPublishing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      const electionRes = await api.get(`/elections/${electionId}`);
      console.log("EleicaoDetalhes/index.js electionRes: ", electionRes.data);
      setElection(electionRes.data);

      // if (electionRes.data === "Publicada") {
      try {
        const [voterRes, candidateRes, auditorRes, votingRes] =
          await Promise.all([
            api.get(`/voters/elections/${electionId}`),
            api.get(`/candidates/elections/${electionId}`),
            api.get(`/auditors/elections/${electionId}`),
            api.get(`/votings/elections/${id}`),
          ]);
        setLoading(false);

        const voters = voterRes.data || [];
        // console.log("Votar/index.js voters: ", voters);
        const candidates = candidateRes.data || [];
        // console.log("Votar/index.js candidates: ", candidates);
        const auditor = auditorRes.data || [];
        // console.log("Votar/index.js auditorRes: ", auditorRes);
        const voting = votingRes.data || [];
        // console.log("Votar/index.js votingRes: ", votingRes);

        setVoters(voters);
        setCandidates(candidates);
        setAuditors(auditor);
        setVoting(voting);

        candidates.forEach((cand) => {
          cand.votes =
            voting?.data?.[0]?.candidates?.find(
              (c) => c.candidateId === cand._id
            )?.votes || 0;
        });

        const total = candidates.reduce(
          (sum, candidate) => sum + candidate.votes,
          0
        );
        setTotalVotes(total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // };

    if (electionId) fetchAllData();
  }, [electionId]);

  // Handle Delete election
  const handleDelete = async () => {
    try {
      await api.delete(`/elections/${electionId}`);
      alert("Eleição excluída com sucesso");
      navigate("/home");
    } catch (error) {
      console.error("Erro ao excluir eleição:", error);
      alert("Ocorreu um erro ao tentar excluir a eleição.");
    } finally {
      setShowDeleteModal(false);
    }
  };

  // Handle Publish election
  const handlePublish = async () => {
    const formData = new FormData();
    formData.append("electionId", electionId);
    formData.append("adminId", adminId);
    formData.append("voters", voters);
    formData.append("candidates", candidates);
    formData.append("auditors", auditors);

    setIsPublishing(true);
    try {
      await Promise.all([
        api.put(`/elections/publish/${electionId}`),
        api.post(`/votings`, formData),
      ]);
      alert("Eleição publicada com sucesso!");
      setShowPublishModal(false); // Fecha o modal após publicar
    } catch (error) {
      console.error("Erro ao publicar eleição:", error);
      alert("Erro ao publicar eleição.");
    } finally {
      setIsPublishing(false);
    }
  };

  // Navigate to edit page
  const handleEdit = () => {
    navigate(`/elections/edit/${electionId}`);
  };

  // Navigate to results page
  const handleViewResults = () => {
    navigate(`/elections/${electionId}/results`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Cadastrada":
        return "#FF9900"; // Orange
      case "Publicada":
        return "#007BFF"; // Blue
      case "Ativa":
        return "#28A745"; // Green
      case "Encerrada":
        return "#6C757D"; // Gray
      case "Vencida":
        return "#DC3545"; // Red
      default:
        return "#000000"; // Black
    }
  };

  if (!election) return <p>Loading...</p>;

  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="header">
          <Header logo={logo} />
        </div>

        <div className="election-details">
          <div className="election-header">
            <h1 className="title-election">{election.title}</h1>
            <div className="election-actions">
              {/* <img
                src={editIcon}
                alt="Edit Election"
                className="icon-action"
                onClick={handleEdit}
              /> */}
              <img
                src={deleteIcon}
                alt="Delete Election"
                className="icon-action"
                onClick={() => setShowDeleteModal(true)}
              />
            </div>
          </div>

          <img
            src={`${api.defaults.baseURL.replace("/api", "")}${
              election.imagePath
            }`}
            alt={election.title}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <p>
            <strong>Encerramento da Votação:</strong>{" "}
            {new Date(election.endDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: getStatusColor(election.status) }}>
              {election.status}
            </span>
          </p>
        </div>

        <div className="publish-election">
          <button
            className="btn-publish"
            onClick={() => setShowPublishModal(true)} // Abre o modal de publicação
          >
            Publicar Eleição
          </button>
        </div>

        <h2 className="title-result">Resultado da Eleição</h2>

        {/* Election Results */}
        <Resultado />

        {/* Modal de Publicação */}
        <Modal
          show={showPublishModal}
          onHide={() => setShowPublishModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Publicação</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tem certeza que deseja publicar esta eleição? Esta ação não pode ser
            desfeita.
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setShowPublishModal(false)}
              className="modal-btn cancel-btn"
            >
              Cancelar
            </button>
            <button
              onClick={handlePublish}
              className="modal-btn publish-btn"
              disabled={isPublishing}
            >
              {isPublishing ? "Publicando..." : "Publicar"}
            </button>
          </Modal.Footer>
        </Modal>

        {/* Modal de Exclusão */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Exclusão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tem certeza que deseja excluir esta eleição? Esta ação não pode ser
            desfeita.
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="modal-btn cancel-btn"
            >
              Cancelar
            </button>
            <button onClick={handleDelete} className="modal-btn delete-btn">
              Excluir
            </button>
          </Modal.Footer>
        </Modal>
      </Content>
    </Container>
  );
};

export default DetailedElection;
