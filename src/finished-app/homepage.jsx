import React from 'react';
import styled from 'styled-components';

import { testPages } from './helpers';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

// eslint-disable-next-line prettier/prettier
const displayPages = () => Object.entries(testPages).map(pageInfo => {
    return (
      <a key={pageInfo[0]} href={pageInfo[1]} target="_blank">
        {pageInfo[0]}
      </a>
    );
  });

export const Homepage = () => <StyledPage>{displayPages()}</StyledPage>;
