import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';

function UseDetail(props) {

  const { id } = props;
  console.log(id);
  const [use, setUse] = useState({});

  useEffect(() => {
    dbService.collection("uses")
      .where('__name__', "==", id)
      .onSnapshot((snapshot) => {
        const valueObject = snapshot.docs.map((document) => ({
          ...document.data(),
          id : document.id,
        }));
        setUse(valueObject[0]);
    })
  }, []);

  return (
    <>
      <div>코드 : {use.code}, 설명글 : {use.description}</div>
    </>
  )
}

export default UseDetail;