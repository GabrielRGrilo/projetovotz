import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
    padding: 1.2rem 1.6rem;
    border-radius: 4.8rem;
    height: 4.8rem;
    outline: none;
    max-width: 50rem;
    


        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
    > input {
        background: transparent;
        color: ${({ theme }) => theme.COLORS.DARK_700};
        
        border: none;
        width: 100%;

        outline: none;

        height: 4.8rem;
        font-size: 1.6rem;
        font-weight: 600;
        margin-left: 1.6rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            font-size: 1.6rem;
            font-weight: 400;
        }
    }
`