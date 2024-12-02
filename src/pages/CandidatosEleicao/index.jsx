import React from 'react';
import logo from '../../assets/logomarca_votz_branco.png'; 
import {
  PageWrapper,
  NavBar,
  Logo, 
  Content,
  Container,
  ElectionInfo,
  ElectionIcon,
  ElectionText,
  Candidates,
  CandidatePhotos,
  CandidatePhoto,
  VoteButton,
  Separator,
} from './styles';
import { useNavigate } from 'react-router-dom';

const CandidatoEleicao = () => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/ver-candidato`);
  };

  const handleVote = () => {
    navigate(`/confirmacao`);
  };

  return (
    <PageWrapper>
      <NavBar>
        <Logo src={logo} alt="Votz Logo" />
      </NavBar>

      <Content>
        <Container>
          <ElectionInfo>
            <ElectionIcon src="https://img.freepik.com/fotos-premium/martelo-do-juiz-na-superficie-da-mesa-de-madeira_218381-4516.jpg" alt="Ícone de gavel" />
            <ElectionText>
              <h2>Eleição para o cargo de presidente do Sindicato</h2>
              <p className="encerramento">Encerramento da eleição</p>
              <p className="data">20/12/2024 - 23:59</p>
            </ElectionText>
          </ElectionInfo>

          <Separator />

          <h3 style={{ fontWeight: 'bold' }}>Candidatos:</h3>

          <Candidates>
            <CandidatePhotos>
              <div className="candidate">
                <CandidatePhoto src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto de José da Cota" />
                <span>José da Cota</span>
                <VoteButton onClick={handleViewProfile}>Ver Perfil</VoteButton>
                <VoteButton primary onClick={handleVote}>Votar</VoteButton>
              </div>

              <div className="candidate">
                <CandidatePhoto src="https://randomuser.me/api/portraits/women/2.jpg" alt="Foto de Maria" />
                <span>Maria Alice</span>
                <VoteButton onClick={handleViewProfile}>Ver Perfil</VoteButton>
                <VoteButton primary onClick={handleVote}>Votar</VoteButton>
              </div>

              <div className="candidate">
                <CandidatePhoto src="https://randomuser.me/api/portraits/men/3.jpg" alt="Foto de João Carlos" />
                <span>João Carlos</span>
                <VoteButton onClick={handleViewProfile}>Ver Perfil</VoteButton>
                <VoteButton primary onClick={handleVote}>Votar</VoteButton>
              </div>
            </CandidatePhotos>
          </Candidates>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
          </div>
        </Container>
      </Content>
    </PageWrapper>
  );
};

export default CandidatoEleicao;