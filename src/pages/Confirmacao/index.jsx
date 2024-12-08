import React from 'react';
import logo from '../../assets/logomarca_votz_branco.png'; 
import {
  PageWrapper,
  NavBar,
  Logo,
  Content,
  Container,
  ElectionIcon,
  ElectionInfo,
  Header,
  CandidatePhoto,
  Candidates,
  VoteButton,
} from './styles';

const App = () => {
  const handleVoteConfirmation = () => {
    window.location.href = '/voto-computado';
  };

  return (
    <PageWrapper>
      <NavBar>
        <Logo src={logo} alt="Votz Logo" />
      </NavBar>
      <Content>
        <Container>
          <Header>
            <h1>Confirme seu voto!</h1>
          </Header>
          <ElectionInfo>
            <div>
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do Candidato" />
              <h3>José da Cota</h3>
            </div>
          </ElectionInfo>
          <Candidates>
            <p>
              <strong>Para: Presidente do Sindicato</strong> 
            </p>
            <VoteButton onClick={handleVoteConfirmation}>Confirmar</VoteButton>
          </Candidates>
        </Container>
      </Content>
    </PageWrapper>
  );
};

export default App;
