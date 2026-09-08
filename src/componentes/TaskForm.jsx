import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Média");

  // Callback executado quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !date || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    const newTask = {
      id: Date.now(),
      name,
      date,
      description,
      priority,
      completed: false,
    };

    onAddTask(newTask);

    setName("");
    setDate("");
    setDescription("");
    setPriority("Média");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Nova tarefa</h2>

      <input
        type="text"
        placeholder="Nome da tarefa"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <textarea
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>

      <button type="submit">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default TaskForm;