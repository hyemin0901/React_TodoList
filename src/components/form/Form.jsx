import React, { useState } from "react";
import "./style.css";

function Form(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(2);
  //TodoList 컴포넌트에서 list배열로 3개를 썼기때문에 3을 넣어준다
  //기본적으로 위에 3개의 const들은 원래 있는 값임.
  //const [] 이 대괄호 안에 있는 이름은 바뀔 수 있는것

  function addToDo(e) {
    e.preventDefault(); //새로고침 방지 입력값을 넣고 추가하기를 했을때 페이지가 새로고침되어 기본값으로 되돌아 가지않고 입력값이 추가되게 하는 것
    const copy = [
      ...props.todos,
      { id: id, title: title, body: body, isDone: false },
    ];
    const idPlus = id + 1;
    setId(idPlus); //setID는 변경될 값이니까 id+1 값이 저장된 idPlus값을 넣어준다.
    props.setTodos(copy); // TodoList에서 Form으로 props한걸 여기서 받고,
    // setList값은 함수값이니까 소괄호 안에 위에 만들어준 copy값을 넣어준다.
  }

  function onHandleTitleChange(e) {
    setTitle(e.target.value);
  } // console.log 찍어보면 target은 input에 쓰여지는 값, value는 입력된 값

  function onHandleBodyChange(e) {
    setBody(e.target.value);
  }

  return (
    <form className="form_container" onSubmit={addToDo}>
      <div className="input_container">
        제목
        <input type="text" name="title" onChange={onHandleTitleChange} />
        내용
        <input type="text" name="body" onChange={onHandleBodyChange} />
      </div>
      <button>추가하기</button>
    </form>
  );
}

export default Form;
