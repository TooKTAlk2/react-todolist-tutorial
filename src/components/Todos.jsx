import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './TodoItem'
import styles from './Todos.module.css'

const initialTodos = [
  {
    id: uuidv4(),
    text: 'Todo 1',
    status: 'active',
  },
  {
    id: uuidv4(),
    text: 'Todo 2',
    status: 'active',
  },
  {
    id: uuidv4(),
    text: 'Todo 3',
    status: 'active',
  },
]

export default function Todos({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage)
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
  }
  const handleDeleteTodo = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
  }
  const handleUpdateTodo = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)))
  }
  const filteredItems = getFilteredItems(todos, filter)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filteredItems.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDeleteTodo}
                onUpdate={handleUpdateTodo}
              />
            )
          })}
        </ul>
        <AddTodo onAdd={handleAddTodo} />
      </section>
    </>
  )
}
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos
  }
  return todos.filter((todo) => todo.status === filter)
}
function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage')
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}
