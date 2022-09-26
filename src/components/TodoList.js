import React from 'react'

const TodoList = ({ todos, handleEdit, handleDelete }) => {
    return (

        <ul className='allTodos'>
            {
                todos.map((t) => (

                    <li className='singleTodo' ><span className='todoText' key={t.id}>
                        {t.todo}
                    </span>
                        <button
                            onClick={() => handleEdit(t.id)}
                            style={{ backgroundColor: "#ecae28" }}
                        >Edit
                        </button>

                        <button
                            onClick={() => handleDelete(t.id)}
                            style={{
                                backgroundColor:"#e91912"
                        }}
                        >Delete
                        </button>
                    </li>
                ))
            }

        </ul>
    )
}

export default TodoList