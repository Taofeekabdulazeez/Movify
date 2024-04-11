import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { watchedMovieObj } from "../interfaces/interface";
import styled, { css, keyframes } from "styled-components";
import Rating from "../ui/Rating";
import Spinner from "../ui/Spinner";
import { FaStar, FaRegFlag } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import {
  IoIosTimer,
  IoMdAddCircleOutline,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";

const parallax = keyframes`
   to {
      transform: translateY(calc(var(--speed) * 200px));
    }
`;

const StyledParallax = styled.div`
  --speed: -5;
  display: grid;
  grid-template-areas: "stack";
  position: relative;
  z-index: 0;

  & > * {
    grid-area: stack;
    animation: ${parallax} linear 500ms;
    animation-timeline: scroll();
  }
`;

const Name = styled.h2`
  --speed: 0;
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--text-body);
  /* color: red; */
  position: absolute;
  bottom: 0;
  padding: 1.2rem;
  z-index: 8;
  /* background-color: blue; */
`;

const Content = styled.div`
  font-size: 1.6rem;
  padding-top: 3rem;
  background: var(--parllax-gradient);
  /* #28354d */
`;

const Container = styled.div`
  overflow: scroll;
  height: 40rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ImgBoxProps {
  $image?: string;
}

const ImgBox = styled.div<ImgBoxProps>`
  ${(props) =>
    props.$image &&
    css`
      background-image: var(--image-gradient), url(${props.$image});
    `}

  width: 100%;
  background-size: cover;
  height: 30rem;
  background-repeat: no-repeat;
`;

const SubDetail = styled.div`
  --speed: 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  position: absolute;
  left: 1.2rem;
  bottom: -1.4rem;

  & p {
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  & > span {
    font-size: 1.1rem;
    color: var(--text-body);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const Desc = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const H6 = styled.h6`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FlexRol = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const I = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  font-style: italic;
  color: var(--accent-color);
  /* color: #4080d4; */
`;

interface ButtonProps {
  $type?: string;
}

const Button = styled.button<{ $type?: string }>`
  background: none;
  border: 0;
  padding: 1.2rem 1.4rem;

  ${(props: ButtonProps) =>
    props.$type === "add" &&
    css`
      background: var(--btn-add);
    `}

  ${(props: ButtonProps) =>
    props.$type === "remove" &&
    css`
      background: var(--btn-delete);
    `}

  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 9px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  margin-top: 6rem;
  /* color: #4080d4; */
  color: var(--accent-color);
`;

function MovieDetails() {
  const {
    watchedList,
    movie,
    userRating = 0,
    handleAddWatched,
    handleDeleteWatched,
    handleUserRating,
    isLoadingDetails,
  } = useContext(MoviesContext);

  const isWatched = watchedList
    ?.map((watched) => watched.id)
    ?.includes(movie.imdbID);

  const watchedUserRating = watchedList?.find(
    (watched) => watched.id === movie.imdbID
  )?.userRating;

  const {
    Title,
    Runtime,
    Language,
    imdbVotes,
    Director,
    Country,
    Plot,
    Released,
    Actors,
    Poster,
    imdbID,
    imdbRating,
  } = movie;

  const setWatched = () => {
    const newMovie: watchedMovieObj = {
      id: imdbID,
      image: Poster,
      title: Title,
      imdbRating: Number(imdbRating),
      runtime: Number(Runtime?.split(" ")[0]),
      userRating,
    };

    handleAddWatched?.(newMovie);
    handleUserRating?.(0);
  };

  if (isLoadingDetails) return <Spinner />;

  if (!movie.imdbID) return <Message>Start by searching for a movie</Message>;

  return (
    <Container>
      <StyledParallax className="text-effect">
        <ImgBox $image={Poster} />
        <Name>{Title}</Name>
        <SubDetail>
          <p>
            <FaStar size={14} color="gold" />{" "}
            {(Number(imdbRating) / 2).toFixed(1)} |
            <BiUpvote size={14} color="var(--icon-fill)" />
            {imdbVotes}
          </p>
          <span>
            <IoIosTimer size={14} color="var(--icon-fill)" /> {Runtime}
          </span>
        </SubDetail>
      </StyledParallax>
      <Content>
        <FlexRol>
          {!isWatched ? (
            <>
              <Rating
                defaultRating={0}
                onSetRating={handleUserRating}
                showNumRating={true}
              />
              {userRating > 0 && (
                <Button $type="add" onClick={setWatched}>
                  <IoMdAddCircleOutline size={20} color="#fff" />
                  <span>Add to List</span>
                </Button>
              )}
            </>
          ) : (
            <>
              <P>You rated this movie {watchedUserRating}!</P>
              <Button
                $type="remove"
                onClick={() => handleDeleteWatched?.(imdbID)}
              >
                <IoMdRemoveCircleOutline size={20} color="#fff" />
                <span>Remove</span>
              </Button>
            </>
          )}
        </FlexRol>
        <H6>Storyline</H6>
        <Desc>{Plot}</Desc>
        <H6>
          <IoPersonOutline color="var(--icon-fill)" /> Director
        </H6>
        <I>{Director}</I>
        <H6>
          <IoPeopleOutline color="var(--icon-fill)" /> Casts
        </H6>
        <I>{Actors}</I>
        <H6>
          <RiSpeakLine color="var(--icon-fill)" /> Language
        </H6>
        <I>{Language}</I>
        <H6>
          <FaRegFlag color="var(--icon-fill)" /> Country
        </H6>
        <I>{Country}</I>
        <H6>
          <MdOutlineDateRange color="var(--icon-fill)" /> Released
        </H6>
        <I>{Released}</I>
      </Content>
    </Container>
  );
}

export default MovieDetails;
