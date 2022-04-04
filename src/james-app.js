// import React from 'react';

// import './App.css';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p className="text">Lets start automating!</p>
//         <a className="App-link" href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
//           Sky website
//         </a>
//         <p className="text">But first, we are learning about DOM</p>
//         <p className="text1">I have just made this up to test the colour</p>
//       </header>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import styled from 'styled-components';
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
 
const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledParagraph>Lets start automating!</StyledParagraph>
        <StyledParagraph>But first, we are learning about the DOM!</StyledParagraph>
        <StyledParagraph>Jus testing the css</StyledParagraph>
        <StyledLink href="https://www.sky.com/" target="_blank" rel="noopener noreferrer">
          Sky website
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  );
};
 
export default App;
 