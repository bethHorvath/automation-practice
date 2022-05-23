import React from 'react';
import styled from 'styled-components';

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
  max-width: 896px;
  border: 1px solid #c1c7d0;
`;

const StyledTitleRow = styled.div`
  display: flex;
  color: rgb(0, 0, 255);
  background-color: #e6fcff;
  text-align: center;
  height: 35px;
  font-weight: bold;
`;

const StyledPictureRow = styled.div`
  display: flex;
  text-align: center;
  height: 146px;
`;

const StyledCol = styled.div`
  flex: ${props => props.size};
  border: 1px solid #c1c7d0;
  padding: 7px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 23px;
`;

const StyledLink = styled.a``;

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledTitle>Test Chapter</StyledTitle>
        <StyledSubTitle>
          Created by Field, James (Agile Test Lead), last modified by Avery, Luke (Scrum Master) on May 19, 2022
        </StyledSubTitle>
        <StyledGrid>
          <StyledTitleRow>
            <StyledCol size={1}>Team Calendar</StyledCol>
            <StyledCol size={1}>Team Process</StyledCol>
            <StyledCol size={1}>Test Data Hub</StyledCol>
            <StyledCol size={1}>Team Strategy</StyledCol>
          </StyledTitleRow>
          <StyledPictureRow>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+Test+-+Team+Calendar">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/3176/3176395.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+-+Team+Process">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/4149/4149680.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/01+Test+Data">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/2920/2920349.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+-+Test+-+Team+Strategy">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/609/609085.png" />
              </StyledLink>
            </StyledCol>
          </StyledPictureRow>
          <StyledTitleRow>
            <StyledCol size={1}>Team Handover Guides</StyledCol>
            <StyledCol size={1}>Team Structure</StyledCol>
            <StyledCol size={1}>Archive</StyledCol>
            <StyledCol size={1}>SQL Queries</StyledCol>
          </StyledTitleRow>
          <StyledPictureRow>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Services+Test+-+Squad+guides">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/1705/1705312.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Service+Test+Chapter+Structure">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/848/848525.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+Test+-+Archive">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/432/432607.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/The+SQL+Page">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/337/337953.png" />
              </StyledLink>
            </StyledCol>
          </StyledPictureRow>
          <StyledTitleRow>
            <StyledCol size={1}>Automation</StyledCol>
            <StyledCol size={1}>Tools</StyledCol>
            <StyledCol size={1}>NDA</StyledCol>
            <StyledCol size={1}>Demo Schedule</StyledCol>
          </StyledTitleRow>
          <StyledPictureRow>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/02+Automation">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/2289/2289266.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/03+Tools">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/1055/1055683.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+Test+-+NDA">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/2716/2716654.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Service+Friday+Demo+Schedule">
                <StyledImage src="https://t4.ftcdn.net/jpg/04/27/33/25/240_F_427332571_IeoccXzXqutsPw929RThSJUKfMoXlCjt.jpg" />
              </StyledLink>
            </StyledCol>
          </StyledPictureRow>
          <StyledTitleRow>
            <StyledCol size={1}>My Sky App</StyledCol>
            <StyledCol size={1}>Accessibility</StyledCol>
            <StyledCol size={1}>Test Library</StyledCol>
            <StyledCol size={1}>Training Videos</StyledCol>
          </StyledTitleRow>
          <StyledPictureRow>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/My+Sky+App+Testing">
                <StyledImage src="https://play-lh.googleusercontent.com/qny_nvVQwuziiMRuq9Vs5cnpKrXfP84g7xyaW21b_fFLO1JhGkFSx1Kr9qMKg_vbBZTu" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Digital+Service+-+Accessibility+Test+Strategy">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/2463/2463039.png" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Test+Library">
                <StyledImage src="https://www.ghil.ac.uk/fileadmin/_processed_/1/6/csm_German-Historical-Institute-London_HR0024_e6c6419f96.jpg" />
              </StyledLink>
            </StyledCol>
            <StyledCol size={1}>
              <StyledLink href="https://wiki.at.sky/display/LT/Trainning+Video">
                <StyledImage src="https://cdn-icons-png.flaticon.com/128/906/906175.png" />
              </StyledLink>
            </StyledCol>
          </StyledPictureRow>
        </StyledGrid>
      </StyledHeader>
    </StyledApp>
  );
};

export default App;
