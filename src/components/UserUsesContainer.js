import React, { useEffect, useState } from "react";
import { dbService } from 'fbase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import { setUserUses } from "store";
import UsesListItem from "./UsesListItem";

function UserUsesContainer() {
  const dispatch = useDispatch();
  const uses = useSelector(state => state.uses);

  useEffect(() => {

    dbService.collection("uses")
      .where("user_id", "==", "P7hQXLssEmXOkaLvY8eGQsnHS563")
      .onSnapshot((snapshot) => {
        const valueObject = snapshot.docs.map((document) => ({
          ...document.data(),
          id : document.id,
        }));
        dispatch(setUserUses(valueObject));
    })
  }, []);
  return (
    <>
      {
        uses.map(e => (
          <UsesListItem key={e.id} code={e.code} description={e.description} />
        ))
      }
    </>
  );
}

export default UserUsesContainer