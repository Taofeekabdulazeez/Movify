import styled, { css, keyframes } from "styled-components";
import { FaStar } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegFlag } from "react-icons/fa";
import Rating from "../ui/Rating";
import Button from "./Button";

const parallax = keyframes`
   to {
      transform: translateY(Calc(var(--speed) * 200px));
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

// const Img = styled.img`
//   width: 100%;
//   background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), #000);
// `;

const Title = styled.h2`
  --speed: 0;
  font-size: 3.2rem;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  padding: 1.2rem;
`;

const Content = styled.div`
  font-size: 1.6rem;
  padding-top: 3rem;
`;

const Container = styled.div`
  overflow: scroll;
  height: 40rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ImgBoxProps {
  image?: string;
}

const ImgBox = styled.div<ImgBoxProps>`
  ${(props) =>
    props.image &&
    css`
      background-image: linear-gradient(
          to bottom,
          rgba(235, 151, 78, 0.35),
          rgba(230, 125, 34, 0.35),
          rgba(0, 0, 0, 0.9)
        ),
        url(${props.image});
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
    color: #ddd;
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

function Parallax() {
  return (
    <Container>
      <StyledParallax>
        <ImgBox image="action.jpg" />
        <Title>THE CLAMAROOK</Title>
        <SubDetail>
          <p>
            <FaStar size={14} color="gold" /> 4.5 | 1282
          </p>
          <span>
            <IoIosTimer size={14} color="#fff" /> 108 min
          </span>
          <span>
            <BiUpvote size={14} color="#fff" />
            375,625
          </span>
        </SubDetail>
      </StyledParallax>
      <Content>
        <FlexRol>
          <Rating />
          <Button />
        </FlexRol>
        <H6>Storyline</H6>
        <Desc>
          In order to power the city, monsters have to scare children so that
          they scream. However, the children are toxic to the monsters, and
          after a child gets through, two monsters realize things may not be
          what they think.
        </Desc>
        <H6>
          <IoPersonOutline color="#92a5c8" /> Director
        </H6>
        <I>Shawn Levy</I>
        <H6>
          <IoPeopleOutline color="#92a5c8" /> Casts
        </H6>
        <I>Ben Stiller, Carla Gugino, Ricky Gervais</I>
        <H6>
          <RiSpeakLine color="#92a5c8" /> Language
        </H6>
        <I>English, Italian, Hebrew</I>
        <H6>
          <FaRegFlag color="#92a5c8" /> Country
        </H6>
        <I>United States, United Kingdom</I>
        <H6>
          <MdOutlineDateRange color="#92a5c8" /> Released
        </H6>
        <I>22 Dec 2008</I>
      </Content>
    </Container>
  );
}

export default Parallax;
