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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  max-width: 900px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 150px;
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: 10px;

  h1 {
    font-size: 3rem;
    color: #333;
    margin: 0;
  }
`;

export const ElectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  color: #333;
  font-size: 2rem;
`;

export const ElectionIcon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70%;
  align-self: center;
`;

export const CandidatePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 10px;
`;

export const Candidates = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 22px;
    color: #333;
  }
`;

export const VoteButton = styled.button`
  width: 140px;
  height: 60px;
  background-color: #22C55E;
  color: #1F2937;
  padding: 8px 16px; 
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    opacity: 0.8;
  }
`;
