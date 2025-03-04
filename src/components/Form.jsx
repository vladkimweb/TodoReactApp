import { useState } from 'react'

function Form(props) {
  const [name, setName] = useState('')

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.addTask(name)
    console.log(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          뭐 하고 싶어요?~
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        추가하다
      </button>
    </form>
  )
}

export default Form
