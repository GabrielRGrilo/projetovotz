import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  height: 50vh;

  button {
    margin: 1rem; 
    width: 30%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  label {
    font-size: 1.6rem;
    flex: 1;
    font-weight: bold;
  }

  align-items: center;

  input {
    flex: 2;
    padding: 0.8rem;
    font-size: 1.6rem;
  }

  input#profile {
    padding: 2.4rem;
  }
  button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-left: auto;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

`;

export const FileNameDisplay = styled.span`
  flex: 9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4.5rem;
  padding: 0.5rem;
  border: 0.245rem solid ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.1rem;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const IconWrapper = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;

export const HiddenFileInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const Table = styled.table`
  text-align: left;
`;

export const Th = styled.th`
  text-align: left;
`;

export const Td = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: -0.1rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
`;

export const IconAction = styled.span`
  margin: 0.5rem;
  cursor: pointer;
  font-size: 1.4rem;

  .icon {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }

  .icon:hover {
    color: ${({ theme }) => theme.COLORS.DARK_100};
  }
`;

export const NoCandidatesRow = styled.tr`
  td {
    text-align: center;
    padding: 1.25rem;
    font-size: 1.6rem;
  }
`;