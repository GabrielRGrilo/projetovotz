import styled from 'styled-components';

export const Container = styled.div`
  width: 7vw;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  transition: width 0.3s ease;

  .sidebar-name {
    font-size: 2.4rem;
    margin-top: 5vh;
    margin-bottom: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .sidebar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    flex-grow: 1;
  }

  .menu-icon {
    font-size: 2.4rem;
    margin: 1vh;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    width: 100%; 
    transition: color 0.3s ease; 
  }

  .menu-icon:first-child {
    margin-top: 2vh;
  }

  .logout {
    font-size: 2.4rem;
    margin: 1vh;
    margin-top: auto;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400}; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    width: 17vw;
  }
`;

