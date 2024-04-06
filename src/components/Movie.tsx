import styled from "styled-components";
import { SlCalender } from "react-icons/sl";

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
    /* background-color: #28354d; */
    background-color: #161b25;
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

interface MovieProps {
  title: string;
  img: string;
  year: number;
}

function Movie({ title, img, year }: MovieProps) {
  return (
    <StlyedMovie>
      <ImgBox>
        <Img src={img} />
      </ImgBox>
      <div>
        <H5>{title}</H5>
        <Span>
          <SlCalender color="#92a5c8" size={12} /> {year}
        </Span>
      </div>
    </StlyedMovie>
  );
}

// "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"

export default Movie;
