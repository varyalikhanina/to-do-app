import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ text, setTodos, todos, todo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return(
        <div className="todo">
            <li className={`todo__item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default ToDo;