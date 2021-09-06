import React from 'react'
import './TodoList.css'



function TodoList({ todos }) {
    return (
        <div >
            {todos.map((todo) => (
             
                    <div className="displaytodo" key={todo.id}>
                        <textarea type="text" value={todo.title}
                            className="list"
                            onChange={(event) => {
                                event.preventDefault();
                            }}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default TodoList
