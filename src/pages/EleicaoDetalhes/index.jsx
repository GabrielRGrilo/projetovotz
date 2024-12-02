import { Container, Content } from "./styles";
import logo from "../../assets/logomarca.png";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import { useAuth } from "../../Auth/useAuth";
import { useParams, useNavigate } from "react-router-dom";
import {api} from '../../services/api';
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailedElection = () => {
  const { id } = useParams();
  const [election, setElection] = useState();
  const [candidates, setCandidates] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Fetch election details by electionId
    const fetchElection = async () => {
      try {
        const response = await api.get(
          `/elections/${id}`
        );
        setElection(response.data);
      } catch (error) {
        console.error("Error fetching election details:", error);
      }
    };
    fetchElection();
  }, [id]);

  useEffect(() => {
    // Fetch candidates by electionId
    const fetchCandidates = async () => {
      try {
        const response = await api.get(
          `/candidates/elections/${id}`
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates for election:", error);
      }
    };
    fetchCandidates();
  }, [id]);

  // Function to handle deleting the election
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await api.delete(`/elections/${id}`);
      alert("Election deleted successfully");
      setDeleting(false);
      setShow(false);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting election:", error);
      setDeleting(false);
    }
  };

  // Function to handle editing the election
  const handleEdit = () => {
    navigate(`/elections/edit/${id}`); // Navigate to edit page
  };

  // Function to navigate to election results
  const handleViewResults = () => {
    navigate(`/elections/${id}/results`);
  };

  if (!election) return <p>Loading...</p>;

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
        return "#000000"; // Black for other status
    }
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="header-newelection">
          <div className="header">
            <Header logo={logo} />
          </div>
          <div className="newelection">
            <img
              className="newelection-image"
              src="../src/assets/img-voltz.png"
            />
          </div>
        </div>
        <div>
          <h1>{election.title}</h1>
          <img
            src={election.imagePath || "default-election-image.jpg"}
            alt={election.title}
            style={{ width: "300px", height: "200px", objectFit: "cover" }}
          />
          <p>
            <strong>End Date:</strong>{" "}
            {new Date(election.endDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: getStatusColor(election.status) }}>
              {election.status}
            </span>
          </p>

          {/* Table with candidates */}
          <h2>Candidates</h2>
          <table
            border="1"
            cellPadding="10"
            style={{ width: "100%", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate._id}>
                  <td>
                    <img
                      src={candidate.photo || "default-candidate-image.jpg"}
                      alt={candidate.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{candidate.name}</td>
                  <td>{candidate.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Buttons */}
          <div style={{ marginTop: "20px" }}>
            <button onClick={handleEdit} style={buttonStyle}>
              Edit Election
            </button>
            <Button variant="danger" onClick={handleShow}>
              Delete Election
            </Button>
            {/* <button
              onClick={handleDelete}
              style={buttonStyle}
              className="delete"
            >
              Delete Election
            </button> */}
            <button onClick={handleViewResults} style={buttonStyle}>
              View Results
            </button>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this election? This action cannot be
            undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete} disabled={deleting}>
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Content>
    </Container>
  );
};

// Button styling
const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default DetailedElection;
