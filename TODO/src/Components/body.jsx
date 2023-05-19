import { useState } from "react"

const Body = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            return;

        }
        const newTodo = {
            id: new Date().getTime(),
            task: inputValue,
            description: descriptionValue,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const handleTodoDelete = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const handleTodoClick = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="body">
            <form className="box" onSubmit={handleFormSubmit}>
                
                <h1>MY TODOS</h1>
                <div className="first">
                    Name:<br />
                    <input type="text" name="name" onChange={(e) => { setInputValue(e.target.value) }} ></input>
                    <span>{setTodos}</span>
                    Description:<br />
                    <input type="text" name="name" onChange={(e) => { setDescriptionValue(e.target.value) }} ></input>
                    <span>{setInputValue}</span>
                    <button className="add" type="submit">Add Task</button>
                </div>
                <div className="all">
                    {todos.map((todo) => {
                        return (
                            <div className="task1" key={todo.id} style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}>
                                <h2>{todo.task}</h2>
                                <p>{todo.description}</p>
                                <div className="buttons">
                                    <button className="complete" onClick={() => handleTodoClick(todo.id)}>Complete</button>
                                    <button className="delete" onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>



        </div>
    )
}
export default Body