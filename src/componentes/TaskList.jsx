import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-msg">
          Nenhuma tarefa encontrada.
        </p>
      ) : (
        // map() percorre a lista e cria um componente para cada tarefa
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;