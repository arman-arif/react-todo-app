import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Composer from "./components/Composer";
import AppLayout from "./components/layouts/AppLayout";
import TodoContainer from "./components/layouts/TodoContainer";
import Todo from "./components/Todo";
import todoData, { getTodos, saveTodos } from "./store";

function App() {

    console.log(getTodos());

    const [todos, setTodos] = useState(todoData);

    const sortedTodos = sortTodos(todos);

    function sortTodos(todos) {
        //return todos.sort((a, b) => (a.done === b.done ? 1 : a.done > b.done ? 1 : -1));
        return todos.sort((a, b) => (a.done === b.done) ? b.id - a.id : a.done ? 1 : -1);
    }

    function addTaskHandler(taskValue) {
        const newTodo = {
            id: todos.length + 1,
            title: taskValue,
            done: false
        };
        setTodos([...todos, newTodo]);
        saveTodos([...todos, newTodo]);
    }

    return (
        <AppLayout>
            <Composer onAddTask={addTaskHandler} />
            <TodoContainer>
                {sortedTodos.map((todo) => (
                    <Todo task={todo} key={todo.id} />
                ))}
            </TodoContainer>
        </AppLayout>
    );
}

export default App;
