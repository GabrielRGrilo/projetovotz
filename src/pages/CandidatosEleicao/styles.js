import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 5vw;
  height: auto;
  margin: 0 10px 0 2cm;
  display: block;
`;

export const Content = styled.div`
  margin-left: 12vw;
  padding-top: 5vh;
  padding-left: 5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 12vw);
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 120%;
  max-width: 900px;
  background-color: #fff; */ /* Remova ou comente esta linha para tirar o fundo branco */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 80px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 3rem;
    color: #333;
  }
`;

export const ElectionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  margin-top: 20px; /* Added space above */
`;

export const ElectionInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ElectionIcon = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ElectionText = styled.div`
  display: flex;
  flex-direction: column; /* Altere para coluna para empilhar os textos */
  align-items: flex-start; /* Alinhe os itens à esquerda */

  h2 {
    font-size: 24px; /* Ajuste o tamanho da fonte para ser um pouco maior que o texto "Encerramento da eleição" */
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #666;
    margin: 0;
  }

  .encerramento {
    font-size: 18px; /* Tamanho da fonte para o texto "Encerramento da eleição" */
    font-weight: bold;
    color: #333;
    margin-right: 40px; /* Espaçamento acima do texto */
  }

  .data {
    font-size: 18px; /* Tamanho da fonte para a data do encerramento */
    color: #333;
    font-weight: bold;
    margin: 0;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

export const Candidates = styled.div`
  text-align: center;
  width: 100%;

  h3 {
    font-size: 18px;
    color: #333;
    margin: 20px 0; 
    margin-left: 10px;
    text-align: left;
  }
`;

export const CandidatePhotos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  .candidate {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 8px;
    border: none;
    margin-bottom: 10px;

    span {
      flex: 1;
      font-size: 18px; /* Diminua o tamanho da fonte */
      font-weight: 500;
      color: #333;
      margin-left: 5px; /* Alinhe mais à esquerda, próximo à foto */
      white-space: pre-wrap; 
    }
  }
`;

export const CandidatePhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const VoteButton = styled.button`
  background-color: ${({ primary }) => (primary ? "#22C55E" : "#1F2937")};
  color: #fff;
  padding: 10px 20px; /* Ajuste o padding para tornar o botão menor */
  border-radius: 20px; /* Ajuste o border-radius para combinar com o novo tamanho */
  cursor: pointer;
  font-size: 16px; /* Ajuste o tamanho da fonte para menor */
  font-weight: bold;
  margin-left: auto; /* Alinha o botão à direita */
  width: auto; /* Ajuste a largura do botão */
  margin-right: 10px; /* Adiciona um pequeno espaço entre os botões */
  &:hover {
    opacity: 0.8;
  }
`;