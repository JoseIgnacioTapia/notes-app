import styled from 'styled-components';

const MessageState = styled.section`
  width: 100%;
  margin-top: 2rem;

  p {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: ${props => (props.error ? 'rgb(218, 15, 15)' : 'var(--color-text)')};
  }
`;

export default MessageState;
