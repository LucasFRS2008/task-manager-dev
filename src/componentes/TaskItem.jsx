function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div
      className={`task-item ${
        task.concluida ? 'completed' : ''
      }`}
    >
      <div className="task-info">
        <h3>{task.nome}</h3>

        <p className="task-date">
          Prazo: {task.data}
        </p>

        <p className="task-desc">
          {task.descricao}
        </p>

        <span
          className={`priority ${task.prioridade.toLowerCase()}`}
        >
          Prioridade: {task.prioridade}
        </span>
      </div>

      <div className="task-actions">
        <button
          className="btn-complete"
          onClick={() => onToggleTask(task.id)}
        >
          {task.concluida ? 'Desfazer' : 'Concluir'}
        </button>

        <button
          className="btn-delete"
          onClick={() => onDeleteTask(task.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default TaskItem;