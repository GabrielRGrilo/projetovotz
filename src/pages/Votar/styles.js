import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
  margin: 0 auto; 
  font-size: 2rem;
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
  
  padding-top: 5vh;
  padding-left: 5rem;
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
}

.cancel-btn {
  background-color: #6c757d;
  color: white;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.loading-container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


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

  .candidatesList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2vh;
  }
  .candidateItem {
    display: flex;
    align-items: center;
    gap: 7rem;
    padding: 0.8rem 1rem;
    border-radius: 8px;
  }

  .buttonVotar {
    font-size: 2rem; 
    padding: 10px 20px; 
    border-radius: 8px; 
    background-color: green; 
    color: #fff; 
    cursor: pointer; 
    transition: all 0.3s ease;
    width: 20rem;
  }

.buttonVotar:hover {
  background-color: #0056b3; 
  border-color: #004085; 
}

    .name {
      flex: 1;
      text-align: left;
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


  .header {
    width: 50% !important;
  }


  .photo {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Optional for circular images */
  margin-right: 10px; /* Adjust spacing */
  }

`;
