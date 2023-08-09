import React, { useEffect } from "react";
import { dbService } from 'fbase';
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import MainContainer from "components/MainContainer";
import UseDetail from "components/UseDetail";
import { useParams } from 'react-router-dom';


const StyledMain = styled.div`
  display: flex;
  align-items: baseline;
`;

function UseDetailPage() {

  const {id} = useParams();

  return (
    <StyledMain>
      <Sidebar />
      <MainContainer>
        <UseDetail id={id}/>
      </MainContainer>
    </StyledMain>
  )
}

export default UseDetailPage;