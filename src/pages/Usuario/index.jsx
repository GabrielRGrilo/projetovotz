import React from 'react';
import {
  PageWrapper,
  NavBar,
  Logo,
  NavBarTitle,
  Container,
  ElectionCard,
  ElectionInfo,
  ElectionIcon,
  ElectionText,
  Candidates,
  CandidatePhotos,
  CandidatePhoto,
  VoteButton,
  Separator,
} from './styles';
import logo from '../../assets/logomarca_votz_branco.png'; 

function App() {
  const handleVoteButtonClick = () => {
    window.location.href = '/candidato-eleicao';
  };

  return (
    <PageWrapper>
      <NavBar>
        <Logo src={logo} alt="Votz Logo" />
        <NavBarTitle>Vote online com segurança</NavBarTitle>
      </NavBar>
        
      <Container> 
        <ElectionCard>
          <ElectionInfo>
            <ElectionIcon src="https://picsum.photos/60" alt="Ícone da Eleição" />
            <ElectionText>
              <h2>Eleição para o cargo de presidente do Sindicato</h2>
              <p><strong>Instituição:</strong> Sindicato</p>
              <p><strong>Cargo:</strong> Presidente do Sindicato</p>
              <p><strong>Data:</strong> 25/09/2024</p>
              <a href="#" className="edit-link" style={{ float: 'right' }}>Clique para ler edital</a>
            </ElectionText>
          </ElectionInfo>
          
          <Separator />

          <Candidates>
            <h3>Candidatos</h3>
            <CandidatePhotos>
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/1.jpg" alt="Candidato 1" />
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/2.jpg" alt="Candidato 2" />
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/3.jpg" alt="Candidato 3" />
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/1.jpg" alt="Candidato 4" />
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/2.jpg" alt="Candidato 5  " />
              <VoteButton onClick={handleVoteButtonClick}>vote</VoteButton>
            </CandidatePhotos>
          </Candidates>
        </ElectionCard>
      </Container>
    </PageWrapper>
  );
}

export default App;