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

function App() {
  const handleVoteButtonClick = () => {
    window.location.href = '/candidato-eleicao';
  };

  return (
    <PageWrapper>
      <NavBar>
        <Logo src={logo} alt="Votz Logo" />
      </NavBar>
      <Content>
        <Container>
          <ElectionInfo>
            <ElectionIcon src="https://img.freepik.com/fotos-premium/martelo-do-juiz-na-superficie-da-mesa-de-madeira_218381-4516.jpg" alt="Ícone de Eleição" />
            <div>
              <Header>
                <h1>Eleição para o cargo de presidente do Sindicato</h1> 
              </Header>
              <h2>Perfil do candidato:</h2>
              <CandidatePhoto src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do Candidato" />
              <h3>José da Cota</h3>
            </div>
          </ElectionInfo>
          <Candidates>
            <p>
              <strong>Bio:</strong> 
            </p>
            <p>
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <VoteButton onClick={handleVoteButtonClick}>Voltar</VoteButton>
          </Candidates>
        </Container>
      </Content>
    </PageWrapper>
  );
};

export default App;
