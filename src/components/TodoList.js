import React from 'react';
import {Todo} from './Todo';

function TodoList({todos, completeTodo, deleteTodoItem, updateTodo}) {

	const renderTodos = () => {
		return todos.map((todo, index) =>
				<Todo
					key={todo.id}
					text={todo.text}
					completed={todo.completed}
					changeComplete={(_) => completeTodo(index)}
					deleteTodo={() => deleteTodoItem(index)}
					update={(text) => updateTodo(text, index)}
				/>
			)
	}
	return (
		<div>
			{renderTodos()}
		</div>
	)
}

export {TodoList}
