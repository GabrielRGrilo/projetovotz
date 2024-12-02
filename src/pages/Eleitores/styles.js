import styled from "styled-components";
export const Container = styled.div`
  padding: 2rem;
  height: 50vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding-bottom: 4rem;
  padding-top: 4rem;
`;
export const Row = styled.div`
  display: flex;
  gap: 1rem;
  label {
    font-size: 1.6rem;
    flex: 1;
  }
  input {
    flex: 2;
    padding: 0.8rem;
    font-size: 1.6rem;
  }
  input[type="file"] {
    padding: 0;
  }
  input[type="checkbox"] {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 3%;
  }
  .button-container {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  a {
    width: 17%;
  }
  button {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin: 1rem;
  }
  .no-hover {
    &:hover {
      background-color: ${({ theme }) =>
        theme.COLORS.DARK_700}; /* Mesma cor do estado normal */
      cursor: default; /* Remove o ponteiro de clique */
    }
  }
  .required {
    color: red; /* Cor do asterisco */
    margin-left: 0.2rem; /* Um pequeno espaço entre o rótulo e o asterisco */
  }
`;
