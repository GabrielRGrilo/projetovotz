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
  flex-grow: 1;
  margin-right: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 1rem;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const IconWrapper = styled.span`
  margin-left: auto;
  color: #333;
`;

export const HiddenFileInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

/* Estilos para a Tabela */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1.6rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
`;

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  white-space: nowrap;
`;

export const Td = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: -0.1rem;
  border: 0.2rem solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.LIGHT_DARK};
`;

export const IconAction = styled.span`
  margin: 0 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  font-size: 1.4rem;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }

  .icon {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }

  .icon:hover {
    color: ${({ theme }) => theme.COLORS.DARK_100};
  }
`;

export const NoAuditorsRow = styled.tr`
  td {
    text-align: center;
    padding: 2rem;
    font-size: 1.6rem;
  }
`;

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

