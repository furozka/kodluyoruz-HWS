import React, { useEffect, useState } from 'react'

function List({ todos, setTodos }) {
  const [filter, setFilter] = useState("all")
  const [isVisibleClearChecked, setIsVisibleClearChecked] = useState(false);
  const toggleCheck = (index) => {
    console.log("input change")
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked
    setTodos(newTodos)
  }

  const destroyTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    console.log(newTodos)
  }

  const filteredTodo = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return (todo.checked === false);
    } else {
      return (todo.checked === true);
    }
  })

  const clearComplatedTodos = ()=>{
    const newTodos = todos.filter((todo)=>{
      if(todo.checked===false){
        return true;
      }else{
        return false;
      }
    })
    
    setTodos(newTodos)
  }

  useEffect(() => {
    if (todos.some((todo) => {
      if (todo.checked === true) {
        return true;
      } else {
        return false;
      }
    })) {
      setIsVisibleClearChecked(true)
    } else {
      setIsVisibleClearChecked(false)
    }
  }, [todos])

  return (
    <div>
      <ul className="todo-list">
        {
          filteredTodo.map((todo, index) => {
            return (<>
              {
                todo.checked ?
                  (<li key={index} className="completed">
                    <div className="view">
                      <input checked={todo.checked} onChange={() => { toggleCheck(index) }} className="toggle" type="checkbox" />
                      <label>{todo.todoText}</label>
                      <button onClick={() => destroyTodo(index)} className="destroy"></button>
                    </div>
                  </li>) :
                  (<li key={index} className="">
                    <div className="view">
                      <input checked={todo.checked} onChange={() => { toggleCheck(index) }} className="toggle" type="checkbox" />
                      <label>{todo.todoText}</label>
                      <button onClick={() => destroyTodo(index)} className="destroy"></button>
                    </div>
                  </li>)
              }

            </>)
          })}</ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => todo.checked === false).length}</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a onClick={() => setFilter("all")} name="all" href="#/" className={filter === "all" ? "selected" : ""}>All</a>
          </li>
          <li>
            <a onClick={() => setFilter("active")} name="active" href="#/" className={filter === "active" ? "selected" : ""}>Active</a>
          </li>
          <li>
            <a onClick={() => setFilter("completed")} name="completed" href="#/" className={filter === "completed" ? "selected" : ""}>Completed</a>
          </li>
        </ul>

        <button onClick={clearComplatedTodos} style={isVisibleClearChecked ? { display: "inline" } : { display: "none" }} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </div>
  )
}

export default List