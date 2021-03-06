import React, { useState } from 'react';
import styled from 'styled-components';

import { confluenceLinks } from './constants';

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

const random = number => {
  return Math.floor(Math.random() * (number + 1));
};

const backgroundChange = () => {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
};

const changeStyling = () => {
  console.log('The button has been clicked and the width and font family has been changed');
  document.body.style.width = '30%';
  document.body.style.backgroundColor = backgroundChange();
  document.body.style.fontFamily = 'monospace';
};

const keyPressFunction = e => {
  switch (e.key) {
    case 'Enter':
      console.log('you hit enter');
      break;
    case 'd':
      console.log('you hit d');
      break;
    default:
      console.log('you hit something else');
  }
};

const App = () => {
  const [keyPress, setKeyPress] = useState('');

  const outputPrinter = e => {
    keyPressFunction(e);
    setKeyPress(`you pressed: ${e.key}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`the event is: ${e.type} and this was triggered on:`, e.target);
  };

  const confluenceDocs = () =>
    confluenceLinks.map((confluenceEl, i) => (
      <StyledLink key={i} href={confluenceEl.link}>
        {confluenceEl.name}
      </StyledLink>
    ));

  return (
    <StyledApp data-test-id="body">
      <StyledHeader>
        <StyledParagraph className="text">Lets start automating!</StyledParagraph>
        <StyledParagraph className="text">But first, we are learning about the DOM!</StyledParagraph>
        <StyledParagraph className="text">Practicing CSS</StyledParagraph>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
        {confluenceDocs()}
        <button type="button" onClick={changeStyling} data-test-id="change-colour-button">
          Change color
        </button>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <input id="textbox" type="text" onKeyDown={outputPrinter} data-test-id="key-press-input" />
        <div id="output">{keyPress}</div>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
