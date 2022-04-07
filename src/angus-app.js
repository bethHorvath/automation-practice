import React from 'react';
// import './angus-app.css';
import styled from 'styled-components';

const RedText = styled.p`
  color: red;
`;
const AquaText = styled.p`
  color: aqua;
  font-style: italic;
`;
const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const StyledApp = styled.div`
  text-align: center;
`;
const StyledLink = styled.a`
  color: #61dafb;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <RedText>Lets start automating!</RedText>
        <RedText>But first, we are learning about the DOM</RedText>
        <AquaText>CSS practice line</AquaText>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
