
export const initialState = {
    todos: [
        {
            title: 'todo 1',
            id: 0,
            completed: false
        },
        {
            title: 'todo 2',
            id: 1,
            completed: false
        },
        {
            title: 'todo 3',
            id: 2,
            completed: false
        },
    ],
};


const reducer = (state, action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            const newTodo = {
                id: Date.now(),
                completed: false,
                title: action.payload,
            };
            return ({ ...state, todos: [...state.todos, newTodo] });
        case ('TOGGLE_COMPLETED'):
            // 1. map through each todo
            // 2. if todo has the id we are looking for (in th action.payload), return a copy of that item with completed flipped
            // 3. if todo does not have the id we are looking for, return as is.
            return ({
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return ({ ...todo, completed: !todo.completed })
                    } else {
                        return todo;
                    }
                })
            });
        case ('CLEAR_COMPLETED'):
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return (!todo.completed);
                })
            }
        default:
            return state;
    }
}

export default reducer;