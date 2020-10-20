import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo__container">
            <ul className="todo__list">
                {filteredTodos.map((todo) => (
                    <ToDo 
                      text={todo.text} 
                      key={todo.id} 
                      todos={todos} 
                      todo={todo} 
                      setTodos={setTodos}
                      />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;