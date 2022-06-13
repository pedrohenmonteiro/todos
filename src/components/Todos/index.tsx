import { FiTrash } from "react-icons/fi"
import { Container } from "../Todos/styles"

interface TodoProps {
  todoList: { id: number; title: string; isComplete: boolean; }[];
  setTodoList: (value: { id: number; title: string; isComplete: boolean; }[]) => void;
}




export const Todos = ({todoList, setTodoList}: TodoProps) => {
 
  function deleteTodo(id: number) {
    const filtered = todoList.filter(item => item.id !== id)
    setTodoList(filtered)
}

function checkTodo(id: number) {
  const mapTasks = todoList.map(task => task.id === id ? {
    ...task,
    isComplete: !task.isComplete
  } : task)
  setTodoList(mapTasks)
}


  if(!todoList) return <div></div>
  return (
    <Container>
      <ul>
      {todoList.map(task => (
          <li>
            <div className={`checklist ${task.isComplete ? 'completed' : ''}`}>
            <label>
            <input type="checkbox" 
            readOnly
            checked={task.isComplete}
            onClick={() => checkTodo(task.id)}
            />
             <span className="checkmark"></span>
            </label>
             <p>{task.title}</p>
            </div>
          
          <button onClick={() => deleteTodo(task.id)}><FiTrash size={16}/></button>
        </li>
      ))}
      </ul>
      
    </Container>
  )
}