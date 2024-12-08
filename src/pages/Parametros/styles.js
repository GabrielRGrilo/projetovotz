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
    font-weight: bold;
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

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1.6rem;
    font-weight: normal;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 150px; //precisa ser fixo por isso usando px.

  p {
    font-size: 1.6rem;
    text-align: left;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    text-align: left;
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    Font-weight: normal;
  }

  input[type="radio"] {
    margin-left: 0;
    padding-left: 0;
  }

  display: flex;
  align-items: center;

  label {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: left;
  width: 155px; /*---> precisa ser fixo, por isso px*/
  margin-top: 0;
  padding-left: 15px; /*---> precisa ser fixo, por isso px*/

  label {
    font-size: 1.6rem;
    display: flex;
    align-items: left;
    font-weight: normal;
  }
`;
