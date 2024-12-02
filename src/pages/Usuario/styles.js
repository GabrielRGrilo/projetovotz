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

export const NavBarTitle = styled.h4`
  color: white;
  text-align: right;
  margin-left: auto;
`;

export const Logo = styled.img`
  width: 5vw;
  height: auto;
  margin: 0 10px 0 2cm;
  display: block;
`;

export const Container = styled.div`
 width: 120%;
  max-width: 1000px;
  background-color: #fff;
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

export const ElectionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
`;

export const ElectionInfo = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ElectionIcon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ElectionText = styled.div`
  display: flex;
  flex-direction: column; /* Alinhe os itens em coluna */
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 20px;
    color: #666;
    margin: 0;
  }

  .edit-link {
    color: #007bff;
    text-decoration: none;
    font-size: 18px;
    margin-top: 5px;
    display: inline-block;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
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
    font-size: 20px;
    color: #666;
    margin-bottom: 10px;
    text-align: left;
  }
`;

export const CandidatePhotos = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

export const CandidatePhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const VoteButton = styled.button`
  width: 160px;
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
