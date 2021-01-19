import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                <form>
                    <label htmlFor="">
                        Title:
                        <input type="text" />
                    </label>
                    <button>Submit Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;











