import React, {useState} from 'react'

function Form({submit}) {
	const [currentTodo, setCurrentTodo] = useState("")

	const submitForm = () => {
		submit(currentTodo);
		setCurrentTodo("");
	}

	return (
		<div>
			<input value={currentTodo} onChange={(event) => setCurrentTodo(event.target.value)}/>
      <button onClick={() => submitForm()}>
        submit
      </button>
		</div>
	)
}

export {Form}
