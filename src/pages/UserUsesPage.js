import MainContainer from "components/MainContainer";
import Sidebar from "components/Sidebar";
import React from "react";
import styled from "styled-components";

import UserUsesContainer from "../components/UserUsesContainer";

const StyledMain = styled.div`
  display: flex;
  align-items: baseline;
`;

function UserUsesPage() {
  return (
    <StyledMain>
      <Sidebar />
      <MainContainer>
        <UserUsesContainer />
      </MainContainer>
    </StyledMain>
  )
}

export default UserUsesPage;