import styled from "styled-components";

const StyledError = styled.div`
  text-align: center;
  margin-top: 3rem;

  & p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

interface ErrorProps {
  message?: string;
}

function Error({ message }: ErrorProps) {
  return (
    <StyledError>
      <p>{message}</p>
    </StyledError>
  );
}

export default Error;
