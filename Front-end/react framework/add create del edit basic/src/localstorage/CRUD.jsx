import React, { useState, useEffect } from 'react'

const CRUDL = () => {

  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState(() => {

    // ถ้ามีข้อมูล Todo
    if (localStorage.getItem("value")) {
      return JSON.parse(localStorage.getItem("value"))
    } else {
      return [];
    }

  })


  useEffect(() => {
    // เก็บต่า todos ไว้ storage
    localStorage.setItem("value", JSON.stringify(todos))
  }, [todos])


  const handleOnchange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setTodos(
      [
        ...todos,
        {
          id: todos.length + 1,
          text: todo
        }
      ])
    setTodo("")

  }

  const handelDelete = (id) => {

    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }))
  }


  const [isEdit, setIsEdit] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const handleEdit = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
  }

  const handleEditClick = (todo) => {
    setIsEdit(true)
    setCurrentTodo({ ...todo })
  }

  const handleUpdate = (id, updatedTodo) => {

    setTodos(todos.map((todo) => {
      return (
        todo.id === id ? updatedTodo : todo
      )
    }))

    setIsEdit(false)
  }

  const handleUpdateClick = (e) => {
    e.preventDefault()
    handleUpdate(currentTodo.id, currentTodo)
  }

  return (
    <div style={{ margin: "0 auto" }}>


      {isEdit ? (
        <form onSubmit={handleUpdateClick}>
          <h2>Edit Todo</h2>
          <label htmlFor="edittodo">Edit todo:</label>
          <input type="text" name='editTodo' placeholder='Edit'
            value={currentTodo.text} onChange={handleEdit}
          />

          <button type='submit'>Update</button>
          <button onClick={() => { setIsEdit(false) }}>Cancle</button>
        </form>
      ) :
        <form onSubmit={handleAdd} >

          <input type="text" placeholder='Text here' value={todo} onChange={handleOnchange} />
          <button type='submit'>Add</button>

        </form>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
            <button onClick={() => { handelDelete(todo.id) }}>Del</button>
            <button onClick={() => { handleEditClick(todo) }}>Edit</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default CRUDL