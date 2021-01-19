

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

const reducer = (state, action) => {
    switch (action.type) {
        case ('INCREMENT'):
            return state + 1;
        case ('DECREMENT'):
            return state - 1;
        default:
            return (state);
    }
}

export default reducer;