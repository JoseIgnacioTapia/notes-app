import styled from 'styled-components';

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  background-color: var(--color-lighter);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 30px;
    color: var(--color-dark);
    font-weight: 800;
    text-align: center;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    svg {
      fill: var(--color-dark);
      height: 25px;
      width: 25px;
      object-fit: cover;
    }
  }
`;

export default AppHeader;
