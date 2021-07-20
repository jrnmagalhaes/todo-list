import React, {useState} from 'react'

function Todo({text, completed, changeComplete, deleteTodo, update}) {
	const [enableUpdate, setEnableUpdate] = useState(false)
	const [currentText, setCurrentText] = useState(text)

	const handleUpdate = () => {
		if (!enableUpdate) {
			setEnableUpdate(true);
		} else {
			update(currentText)
			setEnableUpdate(false)
		}
	}

	return (
		<div>
			{enableUpdate?
				<input value={currentText} onChange={(event) => setCurrentText(event.target.value)}/>
			:
				<span>{text}</span>
			}
			<input type="checkbox" onChange={changeComplete} checked={completed} />
			<button onClick={deleteTodo}>excluir</button>
			<button onClick={() => handleUpdate()}>{enableUpdate? "atualizar" : "habilita update"}</button>
		</div>
	)
}

export {Todo}
