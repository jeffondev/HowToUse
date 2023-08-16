import React, { useEffect } from "react";
import { dbService } from 'fbase';
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import MainContainer from "components/MainContainer";
import UseDetail from "components/UseDetail";
import { useParams } from 'react-router-dom';
import CommentLsit from "components/CommentLsit";
import Comment from "components/Comment";


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
      <CommentLsit id={id}/>
      <Comment id={id}/>
    </StyledMain>
  )
}

export default UseDetailPage;