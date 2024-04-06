import styled from "styled-components";

const StlyedMovie = styled.a`
  display: block;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.6rem;
  align-items: center;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 4rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const H5 = styled.h5`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
`;

function Movie() {
  return (
    <StlyedMovie>
      <ImgBox>
        <Img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" />
      </ImgBox>
      <div>
        <H5>Inception</H5>
        <Span>📅 2022</Span>
      </div>
    </StlyedMovie>
  );
}

export default Movie;
