import React from 'react';
import styled from 'styled-components';

import { confluenceLinks } from './testConfluenceTasksConstants';

const StyledApp = styled.div`
  text-align: left;
`;

const StyledHeader = styled.header`
  color: black;
  background-color: #fff;
  min-height: 10vh;
  margin-left: 20px;
  justify-content: center;
`;

const StyledTitle = styled.p`
  font-size: 28px;
`;

const StyledSubTitle = styled.p`
  font-size: 12px;
  color: #5e6c84;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 896px;
  border: 1px solid #c1c7d0;
`;

const StyledTitleRow = styled.div`
  border: 1px solid #c1c7d0;
  color: rgb(0, 0, 255);
  background-color: #e6fcff;
  text-align: center;
  font-weight: bold;
`;

const StyledPictureRow = styled.div`
  border: 1px solid #c1c7d0;
  display: flex;
  text-align: center;
  height: 146px;
`;

const StyledCol = styled.div`
  flex: ${props => props.size};
  padding: 7px;
`;

const StyledCell = styled.div`
  flex: 1 0 21%;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 23px;
`;

const confluenceDocs = () =>
  confluenceLinks.map((confluenceEl, i) => (
    <StyledCell key={i}>
      <StyledTitleRow>
        <StyledCol size={1}>{confluenceEl.name}</StyledCol>
      </StyledTitleRow>
      <StyledPictureRow>
        <StyledCol size={1}>
          <a href={confluenceEl.link}>
            <StyledImage src={confluenceEl.imgLink} />
          </a>
        </StyledCol>
      </StyledPictureRow>
    </StyledCell>
  ));

const App = () => {
  return (
    <StyledApp data-test-id="body">
      <StyledHeader>
        <StyledTitle>Test Chapter</StyledTitle>
        <StyledSubTitle>
          Created by Field, James (Agile Test Lead), last modified by Avery, Luke (Scrum Master) on May 19, 2022
        </StyledSubTitle>
        <StyledGrid>{confluenceDocs()}</StyledGrid>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
