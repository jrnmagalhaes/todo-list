import React, {useState, useEffect} from 'react'

function Todo({index, text, completed, changeComplete, deleteTodo, update}) {
	const [enableUpdate, setEnableUpdate] = useState(false)
	const [currentText, setCurrentText] = useState(text)

	const handleUpdate = (evt) => {
		evt.preventDefault()
		if (currentText !== "") {
			update(currentText)
			setEnableUpdate(false)
		} else {
			setEnableUpdate(false)
			setCurrentText(text);
		}
	}

	useEffect(() => {
		if (enableUpdate) {
			const input = document.getElementById(`todo-${index}`)
			input.focus();
		}
	}, [enableUpdate])

	const triggerUpdate = () => {
		setEnableUpdate(true);
	}

	return (
		<tr>
			<td>
				{enableUpdate?
					<form onSubmit={(evt) => {handleUpdate(evt)}}>
						<input id={`todo-${index}`} className="input-tarefa" value={currentText} onChange={(event) => setCurrentText(event.target.value)}/>
					</form>
					:
					<span className={`texto-tarefa ${completed? "completa" : ""}`} onClick={() => triggerUpdate()}>{text}</span>
				}
			</td>
			<td>
				<input type="checkbox" onChange={changeComplete} checked={completed} />
			</td>
			<td>
				<button className="icon" onClick={deleteTodo}><i className="fas fa-trash-alt"></i></button>
			</td>
		</tr>
	)
}

export {Todo}
