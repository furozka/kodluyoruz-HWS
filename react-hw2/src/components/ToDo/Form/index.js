import React, { useState } from 'react'

function Form({ setTodos, todos }) {
    const [form, setForm] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if (form === "") {
            return;
        }
        setTodos([...todos, { todoText: form, checked: false }])
        setForm("")
    }

    // Check All
    const checkAll = () => {
        const newTodos = [...todos]
        console.log("toggled All")
        if (true === (newTodos.every((item) => item.checked === true) || newTodos.every((item) => item.checked === false))) {
            newTodos.forEach((todo) => {
                todo.checked = !todo.checked
            })
        } else {
            console.log("false turned")
            newTodos.forEach((todo) => {
                todo.checked = true
            })
        }
        console.log(newTodos.every((item) => item.checked === true))
        setTodos(newTodos)
    }
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input value={form} onChange={(e) => setForm(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
            <section className="main">

                <input className="toggle-all" type="checkbox" />
                <label onClick={checkAll} htmlFor="toggle-all">
                    Mark all as complete
                </label>

            </section>
        </div>
    )
}

export default Form