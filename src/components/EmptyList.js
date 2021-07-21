import React from 'react';
import addTask from '../assets/images/add-task.png'
import noData from '../assets/images/no-data.png'

function EmptyList({filtering}) {
	if (filtering) {
		return (
			<div className="sem-tarefas">
				<img src={noData} alt="desenho de pranchetas vazias" />
				<span>Não existem items para o filtro selecionado</span>
			</div>
		)
	} else {
		return (
			<div className="sem-tarefas">
				<img src={addTask} alt="desenho de um homem colocando papeis na parede" />
				<span>Você não possui tarefas cadastradas no momento, utilize o campo de texto no topo da tela para adicionar novas tarefas</span>
			</div>
		)
	}
}

export {EmptyList}
