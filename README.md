# Task Manager Dev

Sistema de Lista de Tarefas do Programador desenvolvido em React + Vite + CSS para auxiliar desenvolvedores no gerenciamento e organização de suas tarefas.

## Integrantes

* **RM569742 — Lucas Ferreira Rodrigues Silva**
* **RM573079 — Nicolas Gomes de Almeida**
* **RM571981 — Bruno Gonçalves Minitti**

## Repositório

https://github.com/LucasFRS2008/task-manager-dev

## Sobre o projeto

O Task Manager Dev é uma aplicação web desenvolvida para facilitar o gerenciamento de tarefas voltadas para programação.

A aplicação permite cadastrar tarefas informando nome, data, descrição e nível de prioridade. Também é possível marcar tarefas como concluídas, remover tarefas e utilizar filtros para visualizar diferentes estados da lista.

Os dados são armazenados automaticamente no `localStorage`, permitindo que as tarefas permaneçam salvas mesmo após atualizar ou fechar a página.

## Funcionalidades

* Cadastro de tarefas
* Nome da tarefa
* Data limite
* Descrição
* Nível de prioridade
* Marcação de tarefas como concluídas
* Remoção de tarefas
* Filtro de tarefas pendentes
* Filtro de tarefas concluídas
* Visualização das tarefas pendentes na lista principal
* Persistência automática utilizando `localStorage`
* Interface estilizada e responsiva

## Tecnologias utilizadas

* React
* Vite
* JavaScript
* CSS
* Git
* GitHub

## Estrutura do projeto

```text
src/
├── componentes/
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskFilter.jsx
│   └── TaskList.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Conceitos utilizados

Durante o desenvolvimento foram utilizados conceitos fundamentais do React e JavaScript:

* `useState` para gerenciamento dos estados da aplicação
* `useEffect` para salvar automaticamente as tarefas
* `filter()` para filtrar as tarefas de acordo com seu estado
* `map()` para percorrer e renderizar a lista de tarefas
* Callbacks para comunicação entre os componentes
* `localStorage` para persistência dos dados no navegador

O código também possui comentários nas partes relacionadas aos Hooks, métodos de array e callbacks, conforme solicitado na atividade.

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/LucasFRS2008/task-manager-dev.git
```

Entre na pasta do projeto:

```bash
cd task-manager-dev
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Após executar o comando, acesse no navegador o endereço informado pelo Vite.

## Projeto acadêmico

Projeto desenvolvido para a **FIAP** como atividade acadêmica utilizando React + Vite + CSS.

