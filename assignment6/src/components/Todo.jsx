import React, { useState } from 'react'
import './todo.css'
const Todo = () => {
	const [todos, settodos] = useState([]);
	const [input, setInput] = useState("");
	const addTask = () => {
		
		settodos(() => [...todos, input]);
		setInput("");

	}
	const handlekeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };
 
	const deleteTodo = (idx) => {
		settodos(() => todos.filter((_, i) => i != idx));
	}
	return (
		<div className='container'>
			<div className='input-box'>
				<input
					type="text"
					placeholder='Enter todo...'
					className='border border-gray-300 rounded-l-md px-4 py-2 mr-3'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handlekeyDown}

				/>
			</div>
			<ul className='mt-5'>
				{todos.map( (todo, i) => (
						<li key={i} className='p-1'>
							{todo}
							<button 
								className='ml-2' 
								onClick={() => deleteTodo(i)}
							>
								Delete
							</button>
						</li>
				))}
			</ul>
		</div>
	)
}

export default Todo