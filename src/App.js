import React, {useEffect} from 'react';
import ToDoList from './components/ToDoList';
import Context from './context';
import Loader from './components/Loader';

const AddToDo = React.lazy(() => import('./components/AddToDo'));
function App() {
  const [todos, setTodos] = React.useState([]);
  const [loader, setLoader] = React.useState(true);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(json => {
      setTimeout(() => {
        setTodos(json)
        setLoader(false)
      }, 2000)
    })
   }, []
  )
  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    ) 
 }


 function addToDo(title) {
  setTodos(
    todos.concat([{
      id: Date.now(),
      completed: false,
      title
    }])
  )
 }

  function removeToDo(id) {
    setTodos(
      todos.filter(x => x.id !== id)
    )
  }
  return (
    <Context.Provider value={{removeToDo}}>
      <div className="wrapper">
        <h1> to do list</h1>
        <div className="addWrap"  style={{'marginBottom': '15px'}}>
          <React.Suspense fallback={<Loader/>}>
          <AddToDo addToDo={addToDo}/>
          </React.Suspense>
      
          { loader && <Loader/>}
        </div>
   
        {
           todos.length ?
            <ToDoList todos={todos} toggleTodo={toggleTodo}/>
            : loader ? null : <div> Список пуст </div>        
        }

      </div>
    </Context.Provider>   
  );
}

export default App;
