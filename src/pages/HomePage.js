import MainContainer from "components/MainContainer";
import Sidebar from "components/Sidebar";
import UseInput from "components/UseInput";
import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  align-items: baseline;
`;

function HomePage() {
  return (
    <StyledMain>
    <Sidebar />
    <MainContainer>
      <div>홈페이지</div>
    </MainContainer>
  </StyledMain>
  )
}

export default HomePage;