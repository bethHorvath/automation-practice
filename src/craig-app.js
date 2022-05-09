import React, { useState } from 'react';
import styled from 'styled-components';

import { confluenceLinks } from './constants';

// import './App.css';

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

const changeStyling = () => {
  console.log('The button has been clicked and the width, font family and background color has been changed');
  document.body.style.width = '30%';
  const rdmCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rdmCol;
  document.body.style.fontFamily = 'monospace';
};

const handleSubmit = e => {
  e.preventDefault();
  console.log('full event:', e);
  console.log(`the event is ${e.type} and it was targetted on`, e.target);
};

const App = () => {
  const [keyPress, setKeyPress] = useState('');

  const keyPressFunction = e => {
    switch (e.key) {
      case 'd':
        console.log('You have hit d');
        break;
      case 'Enter':
        console.log('You have hit Enter');
        break;
      case 't':
        console.log('You have hit t');
        break;
      default:
        console.log('You have hit something you should not have');
    }
  };

  const outputPrinter = e => {
    keyPressFunction(e);
    setKeyPress(`you pressed ${e.key}`);
  };

  const confluenceDocs = () =>
    confluenceLinks.map((confluenceEl, i) => (
      <StyledLink key={i} href={confluenceEl.link}>
        {confluenceEl.name}
      </StyledLink>
    ));

  return (
    <StyledApp>
      <StyledHeader>
        <StyledParagraph>Lets start automating!</StyledParagraph>
        <StyledParagraph>But first, we are learning about the DOM</StyledParagraph>
        <StyledParagraph>practising CSS</StyledParagraph>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
        {confluenceDocs()}
        <button type="button" onDoubleClick={changeStyling}>
          changeStyling
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
