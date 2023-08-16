// import React, { useEffect } from 'react';
// import { setComments } from "store";
// import { useDispatch, useSelector } from 'react-redux';
// import { dbService } from 'fbase';

// function CommentLsit(props) {
//   const {id} = props;
//   const comments = useSelector(state => state.comments);
//   const dispatch = useDispatch();
//   useEffect(() => {

//     dbService.collection("comment")
//       .where("id", "==", id)
//       .onSnapshot((snapshot) => {
//         const valueObject = snapshot.docs.map((document) => ({
//           ...document.data(),
//           id : document.id,
//         }));
//         dispatch(setComments(valueObject));
//     })
//   }, []);
//   return (
//     <>
//       {
//         comments.map(e => (
//           <div key={e.id}>{e.what}</div>
//         ))
//       }
//     </>
//   );
// }

// export default CommentLsit;

import React, { useEffect } from 'react';
import { setComments } from "store";
import { useDispatch, useSelector } from 'react-redux';
import { dbService } from 'fbase';

function CommentLsit(props) {
  const { id } = props;
  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dbService.collection("comment")
      .where("uses_id", "==", id)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const valueObject = snapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        dispatch(setComments(valueObject));
      });

    return () => {
      // Cleanup: unsubscribe from the snapshot listener
      unsubscribe();
    };
  }, [id, dispatch]);

  if (!comments) {
    return <div>Loading...</div>;
  }

  if (comments.length === 0) {
    return <div>아무 댓글이 없어요..</div>;
  }

  return (
    <>
      {comments.map(e => (
        <div key={e.id}>{e.what}</div>
      ))}
    </>
  );
}

export default CommentLsit;
