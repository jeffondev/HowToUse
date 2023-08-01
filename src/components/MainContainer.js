import React from "react";
import Titlebar from "./Titlebar";
import UserUsesContainer from "./UserUsesContainer";
import styled from "styled-components";

const StyledSidebar = styled.div`
  flex: 3;
`;

function MainContainer({children}) {
  return (
    <StyledSidebar>
      <Titlebar />
      {children}
    </StyledSidebar>
  )
}

export default MainContainer;