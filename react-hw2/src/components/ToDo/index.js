import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

function ToDo() {
    const [todos, setTodos] = useState([{ todoText: "Quest1", checked: false }, { todoText: "Quest2", checked: false }, { todoText: "Quest3", checked: true }])

    useEffect(()=>{},[todos])
    return (
        <div>
            <Form todos={todos} setTodos={setTodos}></Form>
            <List todos={todos} setTodos={setTodos}></List>
        </div>
    )
}

export default ToDo