import React, { useState } from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import List from "../list/List";
import Form from "../form/Form";

function TodoList() {
  //useState() 안에 있는게 state의 초기값, list는
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      {/* layout만 단일로 열고 닫지 않고 <Layout> </Layout>으로 쓴 이유는 children으로 사용하기 때문임  */}
      <Header />
      {/* id, title, body, isdone을 사용하는 곳이 form과 list이기 때문에 두곳에 props해주는 것 */}
      <Form todos={todos} setTodos={setTodos} />
      {/*Form에서 8번~13번줄의 내용을 가져다 써야하니까 props해준다*/}
      <List todos={todos} setTodos={setTodos} />
      {/*에서 8번~13번줄의 내용을 가져다 써야하니까 props해준다*/}

      {/* Header, Form  순으로 화면에 렌더링 되니까 위의 순서로 작성해줌 */}
    </Layout>
  );
}

export default TodoList;

//각각 컴포넌트가 무엇을 역할을 하는지
//역할을 하기 위해서 뭐가 필요한지
//전달을 받아야하는건지 자급자족 할 수 있는건지
//자급자족도 웬만하면 state 값으로 진행을 한다
//state는 직접적으로 건드리는 것이 아니라 간접적으로 하나 만들어서 가리켜준다
//배열에서의 ...은 추가할때
//객체에서의 ...은 추가도 되고 해당 키값의 value값을 바꿀때도 사용한다.
//
