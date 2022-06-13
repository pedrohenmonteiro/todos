import { FormEvent } from "react"
import { Container,TodoInput } from "./styles"
interface TodoProps {
  todoText: string;
  setTodoText:(value: string) => void;
  handleSubmit: (value: FormEvent) => void;
}

export const Form = ({todoText, setTodoText, handleSubmit}: TodoProps) => {



  return (
    <Container>
      <TodoInput onSubmit={handleSubmit}>
       <input type="text"
       placeholder="Adicionar nova tarefa" 
       value={todoText}
       onChange={(e) => setTodoText(e.target.value)}
       />
       <button className="add-icon">+</button>
      </TodoInput>
    </Container>
  )
}