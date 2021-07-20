import React from 'react'

function Actions({setFilter, cleanCompleted}) {
	return (
		<div>
			<button onClick={() => setFilter('completed')}>Filtrar completados</button>
			<button onClick={() => setFilter('active')}>Filtrar ativos</button>
			<button onClick={() => setFilter(null)}>limpar filtros</button>
			<button onClick={() => cleanCompleted()}>remover completados</button>
		</div>
	)
}

export {Actions}
