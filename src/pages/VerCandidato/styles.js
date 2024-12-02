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
  max-width: 1000px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 100px;
  text-align: center;
  margin: auto; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  margin-bottom: 25px;
  margin-top: -130px; /* Adjusted margin to move the header closer to the image */

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin: 0;
  }
    h2 {
    font-size: 2.0rem;
    color: #333;
    margin: 0;
  }
`;

export const ElectionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 80px; /* Adjusted margin to move the photo higher */
  color: #333;
`;

export const ElectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -250px; /* Ajuste para mover o texto mais para cima */

  h1 {
    font-size: 16rem; /* Aumente ainda mais o tamanho da fonte */
    color: #333;
    margin: 0;
  }

  h2 {
    font-size: 16rem; /* Aumente ainda mais o tamanho da fonte */
    color: #333;
    margin: 0;
    align-items: center;
    text-align: center;

  }  

  h3 {
    font-size: 16rem; /* Aumente ainda mais o tamanho da fonte */
    color: #333;
    margin: 0;
    align-items: center;
    text-align: center;
  }      
`;

export const ElectionIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  align-self: center;
  margin-top: -250px; /* Adjusted margin to move the image higher */
`;

export const CandidatePhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 70%;
  margin-top: 10px;
  display: block;
  margin-left: 300px;

`; 

export const Candidates = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 18px;
    color: #666;
    text-align: left; /* Alinhando todas as frases à esquerda */
  }
`;

export const VoteButton = styled.button`
   width: 140px;
  height: 60px;
  background-color: #1F2937;
  color: #fff;
  padding: 10px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
  &:hover {
    opacity: 0.8;
  }    
`;
