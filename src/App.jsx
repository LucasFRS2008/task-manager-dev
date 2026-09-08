import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('@dev_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState('todas');
  
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Média');

  useEffect(() => {
    localStorage.setItem('@dev_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim() || !data) return;

    const newTask = {
      id: Date.now(),
      nome,
      data,
      descricao,
      prioridade,
      concluida: false
    };

    setTasks([newTask, ...tasks]);
    setNome('');
    setData('');
    setDescricao('');
    setPrioridade('Média');
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, concluida: !task.concluida } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'pendentes') return !task.concluida;
    if (filter === 'concluidas') return task.concluida;
    return true;
  });

  return (
    <div className="app-container">
      <header>
        <h1>Gerenciador de Tarefas do Programador 🚀</h1>
        <p>Organize seus sprints, bugs e features de forma eficiente.</p>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="task-form">
          <h2>Nova Tarefa de Dev</h2>
          <div className="form-group">
            <label>Nome da Tarefa:</label>
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              placeholder="Ex: Corrigir bug no login"
              required 
            />
          </div>

          <div className="form-group">
            <label>Data Limite:</label>
            <input 
              type="date" 
              value={data} 
              onChange={(e) => setData(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Descrição:</label>
            <textarea 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)} 
              placeholder="Detalhes técnicos da tarefa..."
            />
          </div>

          <div className="form-group">
            <label>Nível de Prioridade:</label>
            <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <button type="submit" className="btn-primary">Cadastrar Tarefa</button>
        </form>

        <div className="task-list-container">
          <div className="filter-buttons">
            <button 
              className={filter === 'todas' ? 'active' : ''} 
              onClick={() => setFilter('todas')}
            >
              Todas
            </button>
            <button 
              className={filter === 'pendentes' ? 'active' : ''} 
              onClick={() => setFilter('pendentes')}
            >
              Pendentes
            </button>
            <button 
              className={filter === 'concluidas' ? 'active' : ''} 
              onClick={() => setFilter('concluidas')}
            >
              Concluídas
            </button>
          </div>

          <div className="task-list">
            {filteredTasks.length === 0 ? (
              <p className="empty-msg">Nenhuma tarefa encontrada.</p>
            ) : (
              filteredTasks.map((task) => (
                <div key={task.id} className={`task-item ${task.concluida ? 'completed' : ''}`}>
                  <div className="task-info">
                    <h3>{task.nome}</h3>
                    <p className="task-date">Prazo: {task.data}</p>
                    <p className="task-desc">{task.descricao}</p>
                    <span className={`priority ${task.prioridade.toLowerCase()}`}>
                      Prioridade: {task.prioridade}
                    </span>
                  </div>

                  <div className="task-actions">
                    <button 
                      onClick={() => handleToggleComplete(task.id)} 
                      className="btn-complete"
                    >
                      {task.concluida ? 'Desfazer' : 'Concluir'}
                    </button>

                    <button 
                      onClick={() => handleDeleteTask(task.id)} 
                      className="btn-delete"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;