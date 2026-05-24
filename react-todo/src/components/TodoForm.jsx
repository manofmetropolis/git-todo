import { useState } from 'react';

function TodoForm() {
    const [input, setInput] = useState('');
    return (
        <>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button
                onClick={() => {
                    setTodos([
                        ...todos,
                        {
                            id: Date.now(),
                            text: input,
                            completed: false,
                        },
                    ])

                    setInput('')
                }}>
                Add To-Do Item
            </button>
        </>
    )
}

export default TodoForm