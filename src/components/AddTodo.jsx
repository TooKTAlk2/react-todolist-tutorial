import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './AddTodo.module.css'
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length === 0) {
      alert('Please enter a text')
      return
    }
    onAdd({ id: uuidv4(), text, status: 'active' })
    setText('')
  }
  const handleChange = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          name="addTodo"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </div>
  )
}
