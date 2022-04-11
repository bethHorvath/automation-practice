import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledParagraph = styled.p`
  color: red;
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

const StyledLink = styled.a`
  color: #61dafb;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledParagraph>Lets start automating!</StyledParagraph>
        <StyledParagraph>But first, we are learning about the DOM!</StyledParagraph>
        <StyledParagraph>Practicing CSS!</StyledParagraph>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
