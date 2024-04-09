import styled from "styled-components";
import { SlCalender } from "react-icons/sl";
import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { MovieProps } from "../interfaces/interface";

const StlyedMovie = styled.a`
  display: block;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.6rem;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    /* background-color: #161b25; */
    background-color: var(--primary-shade);
  }
`;

const ImgBox = styled.div`
  width: 4rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const H5 = styled.h5`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const Span = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

function Movie({ movie }: MovieProps) {
  const { handleSelectedId } = useContext(MoviesContext);
  const { imdbID, Poster, Title, Year } = movie;
  return (
    <StlyedMovie onClick={() => handleSelectedId?.(imdbID)}>
      <ImgBox>
        <Img src={Poster} alt={Title} />
      </ImgBox>
      <div>
        <H5>{movie?.Title}</H5>
        <Span>
          <SlCalender color="var(--icon-fill)" size={12} /> {Year}
        </Span>
      </div>
    </StlyedMovie>
  );
}

// "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"

export default Movie;
