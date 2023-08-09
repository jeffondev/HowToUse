import React from "react";
import {useNavigate} from "react-router-dom";

function UsesListItem(props) {
  const { id, code, description } = props;
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(`/uses/${id}`);
  }

  return (
    <>
      <div>코드: {code}, 설명: {description}</div>
      <button onClick={onClick}>상세보기</button>
    </>
  )
}

export default UsesListItem;