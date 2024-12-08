import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import ProtectedRoute from "./Auth/protectedRoutes";

import Base from "./pages/Base/index";
import Parametros from "./pages/Parametros/index";
import Eleitores from "./pages/Eleitores/index";
import Candidatos from "./pages/Candidatos/index";
import Auditor from "./pages/Auditor/index";
import { EsqueciSenha } from "./pages/EsqueciSenha/index";
import { ResetarSenha } from "./pages/ResetarSenha/index";
import { Login } from "./pages/login";
import { Register } from "./pages/Cadastro";
import { Relatorio } from "./pages/Relatorio";
import { Profile } from "./pages/Perfil";
import Home from "./pages/Home";
import { Resultado } from "./pages/ResultadoEleicao";
import Sidebar from "./components/Sidebar";
// import ElectionDetails from "./ElectionDetails";
import Usuario from "./pages/Usuario";
import CandidatoEleicao from "./pages/CandidatosEleicao";
import VerCandidato from "./pages/VerCandidato";
import Confirmacao from "./pages/Confirmacao";
import VotoComputado from "./pages/VotoComputado";
import Eleicao from "./pages/EleicaoDetalhes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-password-reset" element={<EsqueciSenha />} />
        <Route path="/reset-password/:resetToken" element={<ResetarSenha />} />

{/*         <Route element={<ProtectedRoute />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/base" element={<Base />} />
          <Route path="/parametros" element={<Parametros />} />
          <Route path="/eleitores" element={<Eleitores />} />
          <Route path="/candidatos" element={<Candidatos />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/auditor" element={<Auditor />} />
          <Route path="/relatorio" element={<Relatorio />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/elections/:id" element={<Resultado />} />
          <Route path="/candidato-eleicao" element={<CandidatoEleicao />} />
          <Route path="/ver-candidato" element={<VerCandidato />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/voto-computado" element={<VotoComputado />} />
          <Route path="/eleicao/:id" element={<Eleicao />} />
          
{/*         </Route> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
