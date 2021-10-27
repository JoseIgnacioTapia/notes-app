import styled from 'styled-components';

export const NoteContainer = styled.div`
  textarea {
    background-color: var(--color-white);
    border: none;
    padding: 16px 12px;
    width: 100%;
    height: 70vh;
    resize: none;
    scrollbar-width: none; /* Firefox */

    &::active,
    &::focus {
      outline: none;
      border: none;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-main);
  padding: 10px;

  h3 {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;

    svg {
      fill: var(--color-main);
      width: 20px;
      margin-right: 8px;
    }
  }

  button {
    border: none;
    outline: none;
    font-weight: 600;
    background-color: transparent;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const NotesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;

  .notes-title,
  .notes-count {
    color: var(--color-main);
    font-size: 24px;
    font-weight: 600;
  }

  .notes-count {
    font-size: 18px;
    color: var(--color-gray);
  }
`;

export const NotesList = styled.div`
  padding: 0;
  margin: 16px 0;
  height: 70vh;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
