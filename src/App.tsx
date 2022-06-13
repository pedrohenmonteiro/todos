import { useState } from "react";
import { Form} from "./components/Form/index";
import { Todos } from "./components/Todos/index";
import { GlobalStyles } from "./globalStyles";
import {FormEvent} from 'react'

interface ListProps {
    id: number;
    title: string;
    isComplete: boolean;
}

function App() {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState<ListProps[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTodoList([
      ...todoList,
      {
        id: Math.random(),
        title: todoText,
        isComplete: false
      }
    ])
    setTodoText('')
  }

 


  return (
    <>
    <Form todoText={todoText} setTodoText={setTodoText} handleSubmit={handleSubmit}/>
    <Todos todoList={todoList} setTodoList={setTodoList}/>
    <GlobalStyles />
    </>
  );
}

export default App;
