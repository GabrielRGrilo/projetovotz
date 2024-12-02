import styled from 'styled-components';

import backgroundImg from '../../assets/logoVotz.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 1.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: black
    }

    > h2  {
        font-size: 2.4rem;
        margin: 48px 0;
        color: grey;
    }

    > label {
        display: flex;
        width: 57.1rem;
        font-size: 1.6rem;
        font-weight: 700;
        color: black;
        text-align: center;
        margin-left: 0.8rem;
        margin-bottom: 0.8rem;
    }   

    > div {
       margin-bottom: 2.4rem;

    }   

    > button {
       
        margin-top: 7rem;
        margin-bottom: 2.4rem;
        
}

    > p {
        font-size: 1.6rem;
        color: black;
        margin-top: 1.6rem;
    }
    > a {
        font-size: 1.6rem;
        font-weight: 700;
        color: purple;
        margin-top: 1.6rem;
        text-decoration: none;
    }    

    .registerInputBox {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            display: flex;
            justify-content: center;
            position: relative;
            right: 22rem;
            font-size: 1.6rem;
            font-weight: 700;
            color: black;
            text-align: center;
            margin-left: 2.8rem;
            
        }
        

        >div {
        height: 6.8rem;
        margin-bottom: 5rem;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;