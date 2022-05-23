import React, { useState } from 'react';
import styled from 'styled-components';

import { confluenceLinks } from './constants';

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

const StyledApp = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

const random = number => {
  return Math.floor(Math.random() * (number + 1));
};

const changeStyling = () => {
  console.log('The button has been clicked and the width, font family and background colour has been changed');
  document.body.style.width = '30%';
  const rdmCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rdmCol;
  document.body.style.fontFamily = 'monospace';
};

const handleSubmit = e => {
  e.preventDefault();
  console.log('full event:', e);
  console.log(`the event is ${e.type} and it was targeted on `, e.target);
};

const App = () => {
  const [keyPress, setKeyPress] = useState('');

  const keyPressFunction = e => {
    switch (e.key) {
      case 'Enter':
        console.log('You clicked on Enter');
        break;
      case 'd':
        console.log('You clicked on d');
        break;
      default:
        console.log('typed anything');
    }
  };
  const outputPrinter = e => {
    keyPressFunction(e);
    setKeyPress(`you pressed: ${e.key}`);
  };

  const confluenceDocs = () =>
    confluenceLinks.map((confluenceEL, i) => (
      <StyledLink key={i} href={confluenceEL.link}>
        {confluenceEL.name}
      </StyledLink>
    ));

  return (
    <StyledApp>
      <StyledHeader>
        <StyledParagraph>Lets start automating!</StyledParagraph>
        <StyledParagraph>But first we are learning about the DOM</StyledParagraph>
        <StyledParagraph>Practising CSS</StyledParagraph>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
        {confluenceDocs()}
        <button type="button" onClick={changeStyling}>
          Change styling
        </button>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <form>
          <input id="textbox" type="text" onKeyDown={outputPrinter} data-test-id="keypress-enter" />
          <div id="output">{keyPress}</div>
        </form>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
