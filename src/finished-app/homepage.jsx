import React from 'react';
import styled from 'styled-components';

import { testPages } from './helpers';

const Table = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 1rem;
`;

const StyledElement = styled.div`
  padding: 5rem;
  border: 1rem solid black;
  font: 1.5rem Arial;
`;

// eslint-disable-next-line prettier/prettier
const displayPages = () => Object.entries(testPages).map(pageInfo => {
    return (
      <StyledElement key={pageInfo[0]}>
        <a href={pageInfo[1]} target="_blank">
          {pageInfo[0]}
        </a>
      </StyledElement>
    );
  });

export const Homepage = () => <Table>{displayPages()}</Table>;
