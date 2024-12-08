import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 85vw;
`

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
`

export const Content = styled.div`
  
  padding-top: 5vh;
  padding-left: 15rem;
  padding-right: 5rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  transition: margin-left 0.3s ease;

  .election-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.election-actions {
  display: flex;
  gap: 10px;
  justify-content: end;
}

.btn-publish {
  background-color: #dbdbdb;
  
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 180px;
  font-weight: 600;
}

.btn-publish:disabled {
  background-color:#c7c7c7 ;
  cursor: not-allowed;
}

.icon-action {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.icon-action:hover {
  transform: scale(1.1);
}

.modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: red;
}

.cancel-btn {
  background-color: #6c757d;
  color: white;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}


  .voting-registration {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2vh;
    width: 80vw;
    text-align: right;
  }

  .title-election {
    font-size: 24px;
    font-weight: bolder;
  }

  .title-result {
    font-size: 24px;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 12px;
    display: flex;
    
  }

  .tab-content {
    overflow-y: auto;
    width: 80vw;
    padding: 0.5rem;
    height: 48vh;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  .button-relatorio{
  width: 150px;
    background-color: #e2ecf6;
    font-weight: 600;
    margin-top: 12px;
}
}
  
  }

  h2 {
    font-size: 3.4rem;
    margin: 0;
  }

  h3 {
    font-size: 2rem;
    margin: 0;
    color: red;
  }

  .header-newelection {
    display: flex;
    width: 80vw;
  }

  .header {
    width: 50% !important;
  }

  .newelection {
    position: relative;
    align-items: end;
    text-align: right;
  }

  .newelection-image {
    height: auto;
    width: auto;
  }

  .image {
    width: 8vw;
    height: auto;
    margin: 0;
    border-radius: 50%;
  }

  .seach_filter {
    width: 80vw;
    display: flex;
    padding: 2vw 0;
    vertical-align: middle;
    align-items: center;
  }

  .inputs_title {
    margin: 0;
    padding: 0;
  }

  .inputs {
    margin: 0.5vw 0;
    padding: 0.5vw 0;
  }

  .search_input,
  .filter_select {
    height: 2.5vw;
    margin: 0 !important;
    pading: 0 !important;
    border-radius: 8px;
  }

  .search_input {
    background: url(images/comment-author.gif) no-repeat scroll 7px 7px;
    padding-left: 30px;
  }

  .inputs_title {
  }

  .elections {
    height: 10vw;
    width: 80vw;
    display: flex;
    vertical-align: middle;
    border-radius: 8px;
  }

  .election_image {
    width: 15%;
    text-align: center;
  }

  .election_data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1vw;
  }
`

// Estilos do modal
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem; /* Usando rem para o padding */
  width: 30%;
  height: 20vh;
  border-radius: 0.8rem; /* Usando rem para a borda */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -1.5vh; 
  left: 13vw; 
  background: none;
  border: none;
  font-size: 4rem;
  cursor: pointer;
  color: #333;
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
    font-size: 1.8rem;
  }
`
