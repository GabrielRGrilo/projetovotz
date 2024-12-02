import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    
`;

export const ContentHeader = styled.div`

  width: 100%;
  padding: 3rem 3rem;

  h2 {
  font-size: 3.6rem;
  font-weight: bold;
  }

  p {
  font-size: 2.4rem;
  
  }

  .status {
  font-size: 3rem;
  font-weight: bold;
  color: salmon;
  
  }
`;


export const MainResults = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;

  width: 150rem;
  height: 50rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
  padding: 3rem;

  .mainResultsHeader {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    FONT-SIZE: 2.4rem;
    font-weight: bold;
  }

  button {
  position: relative;
  left: 60rem;
  top: 20rem;
  width: 20rem;

  
  }

  .totalVotes {
   >p {
    display: flex;
    justify-content: flex-end;
  }
  }


  .candidatesVotes {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: bold;


    .candidates {
    
    }


    .votes {
    display: flex;
    justify-content: flex-end;
    
    }
  }

  .electionWinner {
  font-size: 2.4rem;
  font-weight: bold;
  color: limegreen;
  }

`

export const Content = styled.div`
  width: 90vw;
  padding-top: 5vh;
  padding-left: 5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .voting-registration {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2vh;
    width: 80vw;
    text-align: right;
  }

  .tab-content {
  overflow-y: auto;
  width: 80vw;
  padding: 0.5rem;
  height: 48vh;  
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  }

 
`;
