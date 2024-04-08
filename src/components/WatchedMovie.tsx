import { useContext } from "react";
import { MoviesContext } from "./contexts/MoviesContext";
import { watchedMovieObj } from "../interfaces/interface";
import styled from "styled-components";
import { FaRankingStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const StlyedMovie = styled.a`
  display: block;
  text-decoration: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.6rem;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    /* background-color: #28354d; */
    background-color: #161b25;
    button {
      display: block;
    }
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

const FlexRol = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Button = styled.button`
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
`;

interface WatchedMovieProps {
  watched: watchedMovieObj;
}

function WatchedMovie({ watched }: WatchedMovieProps) {
  const { handleDeleteWatched, handleSelectedId } = useContext(MoviesContext);
  const { id, image, title, imdbRating, runtime, userRating } = watched;

  return (
    <StlyedMovie onClick={() => handleSelectedId?.(id)}>
      <ImgBox>
        <Img src={image} />
      </ImgBox>
      <div>
        <H5>{title}</H5>
        <FlexRol>
          <Span>
            <FaRankingStar size={14} color="yellow" />
            {imdbRating}
          </Span>
          <Span>
            <FaStar size={14} color="gold" />
            {userRating}
          </Span>
          <Span>
            <IoTimer size={14} color="#92a5c8" /> {runtime} min
          </Span>
        </FlexRol>
      </div>
      <div>
        <Button onClick={() => handleDeleteWatched?.(id)}>
          <MdDelete color="#b12c1e" size={16} />
        </Button>
      </div>
    </StlyedMovie>
  );
}

export default WatchedMovie;
