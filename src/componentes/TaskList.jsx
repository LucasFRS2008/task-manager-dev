import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="task-list">
      <h2>Minhas tarefas</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">
          Nenhuma tarefa encontrada.
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </section>
  );
}

export default TaskList;