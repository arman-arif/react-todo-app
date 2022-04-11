const todoInit = [
    { id: 1, title: "Learn React", done: false},
    { id: 2, title: "Learn Vue", done: true},
    { id: 3, title: "Learn Angular", done: false}
];

const todoData = [];

if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify(todoInit));
    todoData.push(...todoInit);
} else {
    const getTodoData = JSON.parse(localStorage.getItem("todos"));
    todoData.push(...getTodoData);
}

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos"));
}

export { getTodos, saveTodos };
export default todoData;
