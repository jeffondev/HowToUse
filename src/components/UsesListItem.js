import React from "react";

function UsesListItem(props) {
  const { code, description } = props;

  return (
    <>
      <div>코드: {code}, 설명: {description}</div>
    </>
  )
}

export default UsesListItem;