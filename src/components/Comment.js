import React, { useState } from 'react';
import { dbService } from 'fbase';

function Comment(props) {
  const [comment, setComment] = useState("");
  const {id} = props;

  const onSubmit = async (e) => {
    await e.preventDefault();
    dbService.collection("comment").add({
      uses_id: id,
      what: comment,
      createdAt: Date.now(),
    });
    setComment("");
  };

  // const onSubmit = async (event) => {           댓글 수정 코드
  //   event.preventDefault();
  //   await dbService.doc(`nweets/${nweetObj.id}`).update({
  //     text:newNweet
  //   });
  //   setEditing(false);
  // }
  const onChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <input onChange={onChange} value={comment} placeholder='댓글을 입력해주세요'></input>
      <button onClick={onSubmit} >등록</button>
    </div>
  );
}

export default Comment;