import { useState, useEffect } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  // Hook useState: controla a lista de tarefas
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('@dev_tasks');

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Hook useState: controla o filtro selecionado
  const [filter, setFilter] = useState('todas');

  // Hook useEffect: salva as tarefas automaticamente
  useEffect(() => {
    localStorage.setItem('@dev_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Callback responsável por adicionar uma tarefa
  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  // Callback responsável por concluir ou reabrir uma tarefa
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, concluida: !task.concluida }
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

  // filter() cria uma nova lista de acordo com o filtro
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
        <TaskForm onAddTask={handleAddTask} />

        <div className="task-list-container">
          <TaskFilter
            currentFilter={filter}
            onChangeFilter={setFilter}
          />

          <TaskList
            tasks={filteredTasks}
            onToggleTask={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;