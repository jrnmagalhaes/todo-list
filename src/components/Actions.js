import React from 'react'

function Actions({setFilter, cleanCompleted}) {
	return (
		<div className="actions">
			<div>
				<label htmlFor="filtro">Filtra por: </label>
				<select name="filtro" onChange={(event) => setFilter(event.target.value)} id="">
					<option value="all">Todos</option>
					<option value="completed">Feitos</option>
					<option value="active">Ativos</option>
				</select>
			</div>
			<button className="warning" onClick={() => cleanCompleted()}>remover tarefas completas</button>
		</div>
	)
}

export {Actions}
