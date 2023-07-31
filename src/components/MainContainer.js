import React from "react";
import Titlebar from "./Titlebar";
import UserUsesContainer from "./UserUsesContainer";
import styled from "styled-components";

const StyledSidebar = styled.div`
  flex: 3;
`;

function MainContainer() {
  return (
    <StyledSidebar>
      <Titlebar />
      <UserUsesContainer />
    </StyledSidebar>
  )
}

export default MainContainer;