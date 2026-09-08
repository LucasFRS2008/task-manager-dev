```jsx
import { useState, useEffect } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TaskFilter from './components/TaskFilter';

function App() {
  // Hook useState: controla a lista de tarefas
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('@dev_tasks');

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Hook useState: controla o filtro selecionado
  const [filter, setFilter] = useState('todas');

  // Hook useEffect: salva as tarefas automaticamente no localStorage
  useEffect(() => {
    localStorage.setItem('@dev_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Callback responsável por adicionar uma nova tarefa
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  // Callback responsável por concluir ou reabrir uma tarefa
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              concluida: !task.concluida,
            }
          : task
      )
    );
  };

  // Callback responsável por remover uma tarefa
  const handleDeleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  // filter() cria uma nova lista de acordo com o filtro escolhido
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'pendentes') {
      return !task.concluida;
    }

    if (filter === 'concluidas') {
      return task.concluida;
    }

    return true;
  });

  return (
    <div className="app-container">

      <header>
        <h1>Gerenciador de Tarefas do Programador</h1>

        <p>
          Organize seus sprints, bugs e features de forma eficiente.
        </p>
      </header>

      <main>

        {/* Formulário responsável pelo cadastro das tarefas */}
        <TaskForm onAddTask={handleAddTask} />

        <div className="task-list-container">

          {/* Componente responsável pelos filtros */}
          <TaskFilter
            currentFilter={filter}
            onChangeFilter={setFilter}
          />

          <div className="task-list">

            {filteredTasks.length === 0 ? (
              <p className="empty-msg">
                Nenhuma tarefa encontrada.
              </p>
            ) : (

              // map() percorre a lista e cria um TaskItem para cada tarefa
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggleTask={handleToggleComplete}
                  onDeleteTask={handleDeleteTask}
                />
              ))

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
```
