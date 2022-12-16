import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" onChange={onChange} />
        <button>Log in</button>
      </form>
      <Container>
        <H1>protected</H1>
      </Container>
    </div>
  );
}

export default App;
