function TaskFilter({ currentFilter, onChangeFilter }) {
  return (
    <div className="filter-buttons">
      <button
        className={currentFilter === 'todas' ? 'active' : ''}
        onClick={() => onChangeFilter('todas')}
      >
        Todas
      </button>

      <button
        className={currentFilter === 'pendentes' ? 'active' : ''}
        onClick={() => onChangeFilter('pendentes')}
      >
        Pendentes
      </button>

      <button
        className={currentFilter === 'concluidas' ? 'active' : ''}
        onClick={() => onChangeFilter('concluidas')}
      >
        Concluídas
      </button>
    </div>
  );
}

export default TaskFilter;