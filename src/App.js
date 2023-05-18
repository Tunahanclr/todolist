import { useEffect, useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoLİst from "./components/TodoLİst";
function App() {
  const [inputText,setİnputText]=useState("")
  const [todos,setTodos]=useState([])
   const [status, setStatus] = useState("all")
   const [filteredTodos, setFilteredTodos] = useState([])
   
   useEffect(() => {
    filterHandler(todos)
   }, [todos,status])
   console.log(filteredTodos)
  
    const filterHandler=()=>{
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo)=>todo.completed === true))
        break;
        case "uncomplete":
          setFilteredTodos(todos.filter((todo)=>todo.completed === false)) 
      default:
        setFilteredTodos(todos)
        break;
    }
    }
    const saveLocalTodos=()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    }
    useEffect(() => {
        saveLocalTodos()
    }, [])
      return (
    <div className="App">
      <header>
      <h1>TODO LİST</h1>  
      </header> 
      <Form
      inputText={inputText} setİnputText={setİnputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoLİst todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
