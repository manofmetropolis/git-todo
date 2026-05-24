function TodoItem(props) {
    return (
        <li onClick={() => props.toggleTodo(props.id)}>
            {props.completed ? '☑' : '☐'} {props.text}

            <button onClick={(e) => {
                e.stopPropagation()
                props.deleteTodo(props.id)
            }}
                >
                Delete
            </button>
        </li>
    )
}

export default TodoItem;