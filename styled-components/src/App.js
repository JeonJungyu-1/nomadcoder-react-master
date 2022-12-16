import styled, { keyframes } from "styled-components";
import Form from "./Form";
import Test from "./Test";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius:100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
// // <Wrapper>
// //   <Box>
// //     <span>hi</span>
// //   </Box>
// // </Wrapper>
// <>
// {/* <Test />
// <p>tttt</p>
// // {Test()}
// // {}
// <main children={Test()}/> */}

function App() {
  return (
    <Wrapper>
      {/* <Box>
        <Emoji>🧐</Emoji>
      </Box>
      <Emoji>🧐</Emoji> */}
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
