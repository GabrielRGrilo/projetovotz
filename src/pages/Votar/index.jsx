import { Container, Content } from "./styles";
import logo from "../../assets/logomarca.png";
import { Header } from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { useAuth } from "../../Auth/useAuth";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Votar = () => {
  const [election, setElection] = useState();
  const [voting, setVoting] = useState();
  const [voter, setVoter] = useState();
  const [candidatos, setCandidatos] = useState([]);

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const electionId = queryParams.get("electionId");
  const votingId = queryParams.get("votingId");
  const voterId = queryParams.get("voterId");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [votingRes, electionRes, candidateRes] = await Promise.all([
          api.get(`/votings/elections/${electionId}`),
          api.get(`/elections/${electionId}`),
          api.get(`/candidates/elections/${electionId}`),
        ]);

        const data = votingRes.data[0];
        console.log("Votar/index.js data: ", data);
        const election = electionRes.data;
        console.log("Votar/index.js election: ", election);
        const candidates = candidateRes.data;
        console.log("Votar/index.js candidates: ", candidates);

        setCandidatos(candidates);
        setElection(election);
        setVoter(data.voters);
        setVoting(data._id);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (electionId) fetchAllData();
  }, [electionId]);

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

  const sortedCandidates =
    candidatos && candidatos.length
      ? [...candidatos].sort((a, b) => b.votes - a.votes)
      : [];
  console.log("Votar/index.js sortedCandidates:", sortedCandidates);

  const handleVote = async (candidateId) => {
    console.log(`Votar/index.js handleVote candidateId: ${candidateId}`);
    // console.log(`Votar/index.js handleVote voterId: ${voterId}`);
    try {
      const response = await api.patch(`/votings/${votingId}`, {
        votingId: votingId,
        voterId: voterId,
        candidateId: candidateId,
      });

      console.log("Vote success:", response.data);
      alert("Voto computado com sucesso!");
    } catch (error) {
      console.error("Error casting vote:", error);
      alert(error.response.data.message);
    }
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <Container>
      {/* <Sidebar /> */}
      <Content>
        <div className="header">
          <Header logo={logo} />
        </div>

        <div className="election-details">
          <div className="election-header">
            <h1 className="title-election">{election.title || "loading"}</h1>
          </div>

          <img
            src={election.imagePath || "default-election-image.jpg"}
            alt={election.title || "loading"}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <p>
            <strong>Encerramento da Votação:</strong>{" "}
            {new Date(election.endDate || "loading").toLocaleString("pt-BR")}
          </p>
        </div>

        <h2 className="title-result">Candidatos: </h2>

        <div className="candidatesList">
          {sortedCandidates.map((candidate, index) => {
            return (
              <div className="candidateItem" key={candidate._id}>
                    <img
                        src={`${api.defaults.baseURL.replace("/api", "")}${candidate.photo}`}
                        alt={`${candidate.name}'s photo`}
                        className="photo"
                        loading="lazy"
                        style={{
                            width: "300px",
                            height: "200px",
                            objectFit: "cover",
                        }}
                    />
                <span className="name">{candidate.name}</span>
                <button 
                  className="buttonVotar"
                  onClick={() => {
                    const confirmed = window.confirm(
                      `Tem certeza de que deseja votar em ${candidate.name}?`
                    );
                    console.log(">>> votar/index.js onClick", candidate._id);
                    if (confirmed) {
                      console.log(
                        ">>> votar/index.js confirmed handleVote",
                        candidate._id
                      );
                      handleVote(candidate._id);
                    }
                  }}
                  // className="modal-btn delete-btn"
                >
                  Votar
                </button>
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
};

export default Votar;
