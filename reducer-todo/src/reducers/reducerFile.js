export const initialState = {
    todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ],
};

export const reducerFile = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const addNewTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todoArray: [...state.todoArray, addNewTodo]
            };

        case 'TOGGLE_TODO':
            return {
                ...state,
                todoArray: state.todoArray.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };

        case 'COMPLETED_TODO':
            return {
                ...state,
                todoArray: state.todoArray.filter(todo => !todo.completed)
            };
        default:
            return state;
    }
};