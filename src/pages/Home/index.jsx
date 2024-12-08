import { Container, Content } from "./styles";
import logo from "../../assets/logomarca.png";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarComp from "../../components/Sidebar";
// import { ElectionDiv } from "../../components/ElectionDiv";
import { useEffect, useState } from "react";
import { useAuth } from "../../Auth/useAuth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const navigate = useNavigate();

  // const admin = useAuth().user;
  const adminId = sessionStorage.getItem("adminId");
  console.log("HOME/INEX.JS Login bem-sucedido adminId:", adminId);

  const createNewElection = (id) => {
    navigate(`/base`); // Redirects to /elections/{id}
  };

  const getElectionsByAdminId = async () => {
    try {
      const response = await api.get(`/elections/admin/${adminId}`);
      setElections(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getElectionsByAdminId();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredElections = elections.filter((election) => {
    const matchesSearch = election.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter
      ? election.status === statusFilter
      : true;
    return matchesSearch && matchesStatus;
  });

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

  const handleElectionClick = (id) => {
    sessionStorage.setItem("electionId", id);
    navigate(`/eleicao/${id}`);
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
            <div
              className="newelection-box"
              onClick={() => createNewElection()}
            >
              <div className="newelection-text">Criar nova Eleição</div>
              <img
                className="newelection-image"
                src="../web/assets/img-voltz.png"
              />
            </div>
          </div>
        </div>

        <div className="seach_filter">
          <div
            className="inputs_title"
            // style={{
            //   padding: "15px",
            // }}
          >
            <h2>Minhas Eleições</h2>
          </div>
          <div className="inputs">
            <select
              className="filter_select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              // style={{ marginBottom: "20px", padding: "8px", width: "100%" }}
            >
              <option value="">Todas</option>
              <option value="Cadastrada">Cadastrada</option>
              <option value="Publicada">Publicada</option>
              <option value="Ativa">Ativa</option>
              <option value="Encerrada">Encerrada</option>
              <option value="Vencida">Vencida</option>
            </select>
          </div>
          <div className="inputs">
            <input
              className="search_input"
              type="text"
              placeholder="Busque pelo título"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
            />
          </div>
        </div>

        <div>
          {filteredElections.length === 0 ? (
            <h3>Nenhuma eleição cadastrada por este Administrador</h3>
          ) : (
            <div>
              {filteredElections.map((election, index) => (
                <div
                  className="election-container"
                  key={election._id}
                  onClick={() => handleElectionClick(election._id)}
                  style={{
                    padding: "15px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <div className="election_image">
                    <img
                      src={`${api.defaults.baseURL.replace("/api", "")}${
                        election.imagePath
                      }`}
                      className="image"
                      alt={election.title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="election_data">
                    <p
                      className="election_title"
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 20,
                      }}
                    >
                      {election.title}
                    </p>
                    <p className="election_status">
                      <span
                        style={{
                          color: getStatusColor(election.status),
                          fontWeight: "bold",
                          fontSize: 25,
                        }}
                      >
                        {election.status.toUpperCase()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Home;
