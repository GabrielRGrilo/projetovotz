import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 150rem;
`;

export const Form = styled.form`
    background: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    
    height: 100%;
    align-items: center;

    h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.DARK_700};
        margin-bottom: 1rem;
    }
        

    label {
        margin-left: 2rem;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.DARK_500};
    }

    button {
        margin-top: 5rem;
        max-width: 40rem;
        height: 6rem;
    }

   

   
    .box-styling {
    display: flex;
    flex-direction: row-reverse;
    height: 35rem;
    
    
    }

    .name-box {
    margin-bottom: 10rem;
    >div {
     height: 6.8rem;
    }
    
    }

    .emails-box { 
    display: flex;
    flex-direction: column;
    
    >div 
    {
        margin-bottom: 2rem;
        height: 6.8rem;
    }
    }

    .passwords-box {
      >div 
    {
        margin-bottom: 2rem;
        height: 6.8rem;
    }
    
    }


`;


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
  }
`;
