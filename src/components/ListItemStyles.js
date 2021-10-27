import styled from 'styled-components';

const Item = styled.div`
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 12px;
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-bg);
    cursor: pointer;
  }

  h3,
  p span {
    font-weight: 600;
  }

  p span {
    color: var(--color-gray);
    display: inline-block;
    margin-right: 8px;
  }

  p {
    font-size: 14px;
    color: var(--color-light);
  }
`;

export default Item;
