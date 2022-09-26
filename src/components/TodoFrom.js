import React from 'react'

const TodoFrom = ({ handleSubmit, todo, setTodo, editId }) => {
    return (
        <form onSubmit={handleSubmit} className='todoForm'>
            <input
                type="text"
                className='in'
                value={todo}
                onChange={((e) => setTodo(e.target.value))}
            />
            <button style={{
                backgroundColor: "#8533ff"
            }}>{editId ? "Edit" : "Add"}</button>
        </form>
    )
}

export default TodoFrom;