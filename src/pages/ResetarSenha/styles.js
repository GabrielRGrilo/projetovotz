import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 50vh;
    
    a {
    width: 5rem;
    position: fixed;
    top: 4rem;
    left: 6rem;
    color: #333;
    svg {
        font-size: 4rem;
    }
`;

export const Content = styled.div`
    
    padding: 40px;
    border-radius: 10px;
   
    max-width: 400px;
    width: 100%;
    text-align: center;

    h1 {
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
    }

    p {
        color: #555;
        margin-bottom: 30px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    label {
        text-align: left;
        font-size: 16px;
        color: #555;
        margin-bottom: 10px;
    }
        button {
        margin-top: 20px;

    
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    img.logo {
        width: 120px;
        height: auto;
        margin-bottom: 10px;
    }

    p {
        color: #555;
        font-size: 16px;
    }
`;
