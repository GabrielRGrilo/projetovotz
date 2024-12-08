import styled from "styled-components"

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    width: 100%;
    max-width: 28rem;
    height: 4.8rem;

    border: none;
    border-radius: 100px;

    font-family: "Poppins";
    font-weight: 500;
    font-size: 2.3rem;
    display: flex; 
    align-items: center;
    justify-content: center; 
`