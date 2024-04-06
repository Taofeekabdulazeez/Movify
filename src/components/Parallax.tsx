import styled, { css, keyframes } from "styled-components";
import Rating from "../ui/Rating";

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

const Content = styled.p`
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
  bottom: -1rem;

  & p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  & span {
    font-size: 1rem;
    color: #ddd;
  }
`;

const Desc = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.6;
`;

function Parallax() {
  return (
    <Container>
      <StyledParallax>
        <ImgBox image="action.jpg" />
        <Title>THE CLAMAROOK</Title>
        <SubDetail>
          <p>⭐ 4.5 | 1282</p>
          <span>release ▪ 2019</span>
        </SubDetail>
      </StyledParallax>
      <Content>
        <Rating />
        <Desc>
          In order to power the city, monsters have to scare children so that
          they scream. However, the children are toxic to the monsters, and
          after a child gets through, two monsters realize things may not be
          what they think.
        </Desc>
      </Content>
    </Container>
  );
}

export default Parallax;
