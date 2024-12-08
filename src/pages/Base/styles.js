import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Sidebar = styled.div`
  position: fixed;  
  left: 0;
  top: 0;
  height: 100vh;
  width: 4vw; 
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  transition: transform 0.3s ease; 
  z-index: 2;

  &:hover {
    transform: scaleX(1); 
  }
`;

export const Content = styled.div`
  margin-left: 6vw;  
  padding-top: 5vh;
  padding-left: 5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  transition: margin-left 0.3s ease;

  .voting-registration {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1vh;
    width: 80vw;
    text-align: right;
  }

  .tab-content {
    overflow-y: auto;
    width: 80vw;
    padding: 0.5rem;
    height: 70%;  
    background-color: #f9f9f9;
  }

  h2 {
    font-size: 3.4rem;
    margin: 0;
  }

  .titlePages {
    padding-top: 5rem;
    padding-left: 2rem;
  }
  .line {
  width: 90%;
  margin-bottom: 3rem;
  border: none;
  border-top: 0.1vh solid ${({ theme }) => theme.COLORS.LIGHT_300}; 
  }
`;

export const Header = styled.div`
  display: block;
  width: 80vw;

  .logo {
    width: 8vw;
    height: auto;
    margin: 0;
  }

  p {
    padding-left: 1.5vw;
    font-size: 2.2rem;
    width: 80vw;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  width: 80vw;
  

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color:  ${({ theme }) => theme.COLORS.LIGHT_300};
    color: ${({ theme }) => theme.COLORS.LIGHT_DARK_300};
    text-align: center;
    cursor: pointer;
    font-weight: normal;
    font-size: 2rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
  }

  .separator {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: auto;
  }

   .active {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: bold;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_100};
  }

`;
