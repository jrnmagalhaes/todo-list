import React from 'react';
import {Todo} from './Todo';
import {EmptyList} from './EmptyList';

function TodoList({todos, completeTodo, deleteTodoItem, updateTodo, filtering = false}) {

	const renderTodos = () => {
		return todos.map((todo, index) =>
				<Todo
					key={todo.id}
					index={index}
					text={todo.text}
					completed={todo.completed}
					changeComplete={(_) => completeTodo(index)}
					deleteTodo={() => deleteTodoItem(index)}
					update={(text) => updateTodo(text, index)}
				/>
			)
	}
	return (
		<div className="list-container">
			{todos.length > 0?
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Feito</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{renderTodos()}
					</tbody>
				</table>
			:
				<EmptyList filtering={filtering}/>
			}
		</div>
	)
}

export {TodoList}
