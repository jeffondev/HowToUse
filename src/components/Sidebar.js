import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  background: gray;
  flex: 1;
`;

function Sidebar() {
  return (
    <>
      <StyledSidebar>사이드바 영역</StyledSidebar>
    </>
  )
}

export default Sidebar;