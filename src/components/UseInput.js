import React, { useState } from "react";
import { dbService } from 'fbase';

function UseInput() {

  const [uses, setUses] = useState({
    description: '',
    code: ''
  });

  const resetInputs = () => {
    setUses({
      description: '',
      code: ''
    });
  }
  const { description, code } = uses;

  const onSubmit = async (e) => {
      await e.preventDefault();
      dbService.collection("uses").add({
      // value : uses,
      description,
      code,
      user_id: "P7hQXLssEmXOkaLvY8eGQsnHS563",
      createAt: Date.now(),
    });
    resetInputs();
  }

  const onChange = (e) => {
    const { value, name } = e.target;
    setUses({
      ...uses,
      [name] : value
    });
  };
  return (
    <>
      <input name="description" value={description} type="text" placeholder="소개글을 압력하세요." onChange={onChange} />
      <input name="code" value={code} type="text" placeholder="코드를 입력하세요." onChange={onChange} />
      <button onClick={onSubmit}>저장</button>
    </>
  );
}

export default UseInput;