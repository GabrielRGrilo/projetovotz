import { Link } from "react-router-dom";
import { FaList, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import {
  Container,
  Sidebar,
  Content,
  Header,
  Tabs,
} from "./styles";
import SidebarComp from "../../components/Sidebar";
import logo from "../../assets/logomarca.png";
import Parametros from "../Parametros/index";
import Eleitores from "../Eleitores/index";
import Candidatos from "../Candidatos/index";
import Auditor from "../Auditor/index";

const Base = () => {
  const [activeTab, setActiveTab] = useState("parametros"); // Estado guia ativa

  // Função que será passada como onSubmit
  const handleFormSubmit = (formData) => {
    console.log("Dados do formulário recebidos:", formData);
  };

  const renderContent = () => {
    let pageTitle = ""; 
  

    switch (activeTab) {
      case "parametros":
        pageTitle = "Parâmetros";
        return (
          <>
            <h2 className="titlePages">{pageTitle}</h2>
            <Parametros onSubmit={handleFormSubmit} setActiveTab={setActiveTab} />
          </>
        );
      case "eleitores":
        pageTitle = "Eleitores";
        return (
          <>
            <h2 className="titlePages">{pageTitle}</h2>
            <Eleitores setActiveTab={setActiveTab} />
          </>
        );
      case "candidatos":
        pageTitle = "Candidatos";
        return (
          <>
            <h2 className="titlePages">{pageTitle}</h2>
            <Candidatos setActiveTab={setActiveTab} />
          </>
        );
      case "auditor":
        pageTitle = "Auditor";
        return (
          <>
            <h2 className="titlePages">{pageTitle}</h2>
            <Auditor setActiveTab={setActiveTab} />
          </>
        );
      default:
        pageTitle = "Parâmetros";
        return (
          <>
            <h1>{pageTitle}</h1>
            <Parametros onSubmit={handleFormSubmit} setActiveTab={setActiveTab} />
          </>
        );
    }
  };
  

  return (
    <Container>
      <Sidebar>
        < SidebarComp />
      </Sidebar>

      <Content>
        <Header>
          <img src={logo} alt="Votz logo" className="logo" />
          <p>Vote online com segurança.</p>
        </Header>

        <div className="voting-registration">
          <h2>Cadastro de votação</h2>
        </div>
        <hr className="line"/>

        {/* GUIAS INATIVAS - ESSA DEVE SER A VERSÃO FINAL */}
        {/* <Tabs>
          <div
            className={`tab ${activeTab === "parametros" ? "active" : ""}`}>
            Parâmetros
          </div>
          <div
            className={`tab ${activeTab === "eleitores" ? "active" : ""}`}>
            Eleitores
          </div>
          <div
            className={`tab ${activeTab === "candidatos" ? "active" : ""}`}>
            Candidatos
          </div>
          <div
            className={`tab ${activeTab === "auditor" ? "active" : ""}`}>
            Auditor
          </div>
        </Tabs> */}

        {/* GUIAS ATIVAS - TEMPORÁRIO */}
        <Tabs>
          <div
            className={`tab ${activeTab === "parametros" ? "active" : ""}`}
            onClick={() => setActiveTab("parametros")}
          >
            1
          </div>
          <div className="separator">........</div> 
          <div
            className={`tab ${activeTab === "eleitores" ? "active" : ""}`}
            onClick={() => setActiveTab("eleitores")}
          >
            2
          </div>
          <div className="separator">........</div> 

          <div
            className={`tab ${activeTab === "candidatos" ? "active" : ""}`}
            onClick={() => setActiveTab("candidatos")}
          >
            3
          </div>
          <div className="separator">........</div> 

          <div
            className={`tab ${activeTab === "auditor" ? "active" : ""}`}
            onClick={() => setActiveTab("auditor")}
          >
            4
          </div>

        </Tabs>

        {/* Renderiza o componente correspondente à guia ativa */}
        <div className="tab-content">{renderContent()}</div>

      </Content>
    </Container>
  );
};

export default Base;
