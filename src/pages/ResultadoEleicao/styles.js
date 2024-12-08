import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const Content = styled.div`

  background-color: #f5f5f5; /* Cinza claro */
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MainResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .resultsHeader {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 2px solid #d0d0d0;

  .columnHeader {
    flex: 1;
    &:first-child {
      text-align: left; /* Alinha "Candidatos" à esquerda */
    }
    &:last-child {
      text-align: right; /* Alinha "Total de votos" à direita */
    }
  }
}

  .candidatesList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .candidateItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.8rem 1rem;
    
    border-radius: 8px;
    

    .name {
      flex: 1;
      text-align: left;
    }

    .progressBarContainer {
      flex: 3;
      display: flex;
      align-items: center;
      background-color: #e0e0e0;
      border-radius: 5px;
      height: 10px;
      overflow: hidden;

      .progressBar {
        height: 100%;
        transition: width 0.3s ease;
        background-color: #909090; /* Cor padrão dos candidatos */
      }
    }

    .votes {
      flex: 1;
      text-align: right;
      font-size: 1.4rem;
      font-weight: normal;
    }
  }

  .candidateItem:first-child .progressBar {
    background-color: #57708c; /* Cor do vencedor */
  }
`;



