import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Composer from "./components/Composer";
import AppLayout from "./components/layouts/AppLayout";
import TodoContainer from "./components/layouts/TodoContainer";
import Todo from "./components/Todo";
import todoData, { getTodos, saveTodos } from "./store";

function App() {

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

    function doneHandler(task) {
        const newTodos = todos.map(todo => {
            if (todo.id === task.id) {
                todo.done = !task.done;
            }
            return todo;
        });
        setTodos(newTodos);
        saveTodos(newTodos);
    }

    function deleteHandler(taskId) {
        const newTodos = todos.filter(todo => todo.id !== taskId);
        setTodos(newTodos);
        saveTodos(newTodos);
    }

    return (
        <AppLayout>
            <Composer onAddTask={addTaskHandler} />
            <TodoContainer>
                {sortedTodos.map((todo) => (
                    <Todo task={todo} key={todo.id} onDone={doneHandler} onDelete={deleteHandler}/>
                ))}
            </TodoContainer>
        </AppLayout>
    );
}

export default App;
