import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import styles from './TodoItem.module.css'
export default function TodoItem({ todo, onDelete, onUpdate }) {
  const { text, status } = todo
  const handleDeleteTodo = (e) => {
    onDelete(todo)
  }
  const handleUpdateTodo = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...todo, status })
  }
  return (
    <>
      <li className={styles.todo}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={todo.id}
          checked={status === 'completed'}
          onChange={handleUpdateTodo}
        />
        <label htmlFor={todo.id} className={styles.text}>
          {text}
        </label>
        <span className={styles.icon}>
          <button className={styles.button} onClick={handleDeleteTodo}>
            <AiFillDelete />
          </button>
        </span>
      </li>
    </>
  )
}
