import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Sidebar = styled.div`
  width: 10vw;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

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
    width: 100vh;
    flex-grow: 1;
  }

  .menu-icon {
    font-size: 2.4rem;
    margin: 1vh;
    width: 100vw;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .menu-icon:first-child {
    margin-top: 2vh;
  }

  .logout {
    margin-top: auto;
    padding: 5.5vh 0;
    width: 100vw;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 2.4rem;
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

  h2 {
    font-size: 3.4rem;
    margin: 0;
  }
`

export const Header = styled.div`
  display: block;
  margin-bottom: 2vh;
  width: 80vw;
  padding-bottom: 20px;
  border-bottom: 1px solid #d3d3d3;

  .header {
    display: flex;
  }

  .bloco1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo{
  width: 150px;
    align-self: normal;
  
  
  }

  .header-image{
   width: 180px;
  }

.text{
font-size: 20px;
    font-weight: 600;
}
}
`

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
    font-size: 1.8rem;
  }
`

export const FooterButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 27vw;
  position: fixed;
  bottom: 1rem;
  left: 80vw;
  transform: translateX(-50%);

  .btn-back,
  .btn-next {
    padding: 1.5vh 2vw;
    border: none;
    cursor: pointer;
    margin-left: 1vw;
  }
`

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 80vw;
`

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: end;

  .filter-icon {
    font-size: 2rem;
    width: 24px;
    color: #909090;
    cursor: pointer;
  }
`

export const SearchInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 1.6rem;
  width: 240px;
  color: #909090;
  margin-left: 1rem;
  outline: none;

  &:focus {
    border-color: #606060;
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 100px;

  div {
    padding: 0.8rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`

export const FilterOptions = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
  min-width: 120px;

  div {
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`

export const VotingList = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  margin-bottom: 40px;
  margin-top: 20px;

  margin-top: 20px;
  width: 80vw;

  .voting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-bottom: 1px solid #f1f1f1;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f6f6f6; /* Cor de fundo ao passar o cursor */
    }

    .voting-info {
      display: flex;
      align-items: center;
      gap: 20px;

      .voting-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
      }

      .voting-details {
        display: flex;
        flex-direction: column;

        .voting-title {
          font-size: 1.6rem;
          font-weight: bold;
        }

        .voting-status {
          font-size: 14px;
          margin-top: 5px;
          text-transform: uppercase;
          font-weight: bold;
        }

        .voting-status.ativa {
          color: #3ab449;
        }

        .voting-status.cadastrada {
          color: #57708c;
        }

        .voting-status.encerrada {
          color: #ff7e79;
        }
      }
    }

    .view-button {
      padding: 8px 16px;
      font-size: 1.4rem;
      border: none;
      border-radius: 30px;
      background-color: #57708c;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      cursor: pointer;
      width: 120px;
    }
  }
`
