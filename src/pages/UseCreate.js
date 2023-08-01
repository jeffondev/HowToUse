import MainContainer from "components/MainContainer";
import Sidebar from "components/Sidebar";
import UseInput from "components/UseInput";
import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  align-items: baseline;
`;

function UsesCreate() {
  return(
    <StyledMain>
      <Sidebar />
      <MainContainer>
        <UseInput />
      </MainContainer>
    </StyledMain>
  )
}

export default UsesCreate;