import React from 'react';
import logo from '../../assets/logomarca_votz_branco.png';
import {api} from '../../services/api';

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

const VotoComputado = () => {
  const handleSendEmail = async () => {
    try {
      const receiptDetails = "Detalhes do voto"; // Substitua com os detalhes reais
      const response = await fetch('/send-vote-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiptDetails }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar comprovante.');
      }

      alert('Comprovante enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar comprovante:', error);
      alert('Erro ao enviar o comprovante.');
    }
  };

  return (
    <PageWrapper>
      <NavBar>
        <Logo src={logo} alt="Votz Logo" />
      </NavBar>
      <Content>
        <Container>
          <Header>
            <h1>Parabéns!</h1>
          </Header>
          <Candidates>
            <p>Seu voto foi computado com sucesso.</p>
            <p>Obrigada por participar!</p>
          </Candidates>
          <ElectionInfo>
            <div>
              <CandidatePhoto src="https://static.vecteezy.com/ti/vetor-gratis/p1/1225830-cartoon-mao-colocando-papel-de-voto-nas-urnas-vetor.jpg" alt="Foto do Candidato" />
            </div>
          </ElectionInfo>
          <Candidates>
            <VoteButton onClick={handleSendEmail}>Enviar recibo por email</VoteButton>
          </Candidates>
        </Container>
      </Content>
    </PageWrapper>
  );
};

export default VotoComputado;