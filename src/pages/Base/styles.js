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
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 1vh;
  }

  h2 {
    font-size: 3.4rem;
    margin: 0;
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
    flex-grow: 1;
    padding: 1.5vh;
    border: 0.1rem solid black;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_DARK_300};
    text-align: center;
    cursor: pointer;
    border-radius: 0;
    font-weight: normal;
  }

  .active {
    font-weight: bold;
    font-size: 2.5rem;
  }
`;
