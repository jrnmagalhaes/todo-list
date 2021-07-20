// Todo List

// Fazer a parte de estilos.
// tentar melhorar a ux

import './App.css';
import {useState} from 'react';
import { Form, TodoList, Actions } from './components';

function App() {
  const [todoList, setTodoList] = useState([])
  const [filterType, setFilterType] = useState(null)

  const addToList = (item) => {
    const aux = [...todoList,
	    {
	    	id: Date.now(),
	    	text: item,
	    	completed: false
	    },
    ];
    setTodoList(aux);
  }

  const completeTodo = (index) => {
    const aux = [...todoList];
    aux[index].completed = !aux[index].completed
    setTodoList(aux);
  }

  const updateTodo = (value, index) => {
    const aux = [...todoList];
    aux[index].text = value
    setTodoList(aux);
  }

  const deleteTodoItem = (index) => {
    setTodoList(todoList.filter((_, todoIndex) => !(index === todoIndex)))
  }

  const returnTodoList = () => {
    if (filterType !== null)
      return todoList.filter(todo => filterType === 'completed' ? todo.completed : !todo.completed)
    return todoList;
  }

  const cleanCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.completed))
  }

  return (
    <div className="App">
      <Form submit={addToList}/>
      <TodoList updateTodo={updateTodo} deleteTodoItem={deleteTodoItem} todos={returnTodoList()} completeTodo={completeTodo} />
      <Actions setFilter={setFilterType} cleanCompleted={cleanCompleted}/>
    </div>
  );
}

export default App;
