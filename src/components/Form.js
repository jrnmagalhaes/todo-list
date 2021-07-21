import React, {useState} from 'react'

function Form({submit}) {
	const [currentTodo, setCurrentTodo] = useState("")

	const submitForm = (evt) => {
		evt.preventDefault();
		submit(currentTodo);
		setCurrentTodo("");
	}

	return (
		<form className="new-todo" onSubmit={(evt) => submitForm(evt)}  >
			<input placeholder="Nova tarefa" value={currentTodo} onChange={(event) => setCurrentTodo(event.target.value)}/>
			<button type="submit" >
				cadastrar
			</button>
		</form>
	)
}

export {Form}
