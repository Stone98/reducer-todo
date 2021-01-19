
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
        default:
            return state;
    }
}

export default reducer;