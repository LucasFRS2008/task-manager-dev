import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Média');

  // Callback executado quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome.trim() || !data) {
      return;
    }

    const newTask = {
      id: Date.now(),
      nome,
      data,
      descricao,
      prioridade,
      concluida: false,
    };

    onAddTask(newTask);

    setNome('');
    setData('');
    setDescricao('');
    setPrioridade('Média');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Nova Tarefa de Dev</h2>

      <div className="form-group">
        <label>Nome da Tarefa:</label>

        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Ex: Corrigir bug no login"
          required
        />
      </div>

      <div className="form-group">
        <label>Data Limite:</label>

        <input
          type="date"
          value={data}
          onChange={(event) => setData(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Descrição:</label>

        <textarea
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Detalhes técnicos da tarefa..."
        />
      </div>

      <div className="form-group">
        <label>Nível de Prioridade:</label>

        <select
          value={prioridade}
          onChange={(event) => setPrioridade(event.target.value)}
        >
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>

      <button type="submit" className="btn-primary">
        Cadastrar Tarefa
      </button>
    </form>
  );
}

export default TaskForm;