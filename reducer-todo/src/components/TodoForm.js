import React, { useState } from 'react';

const TodoForm = (props) => {
    const { addTodo, completedTodo } = (props);
    const [item, setItem] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(item);
        setItem('');
    };

    const handleChanges = event => {
        setItem(event.target.value);
    }

    const handleCompleted = event => {
        event.preventDefault();
        completedTodo();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='input'
                name='item'
                type='text'
                placeholder='...todo'
                value={item}
                onChange={handleChanges} />

            <button
                className='button'
                type='submit'>
                Add New Todo
            </button>

            <button
                className='button'
                onClick={handleCompleted}>
                Clear Completed
            </button>
        </form>
    );
};
export default TodoForm;