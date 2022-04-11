import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Composer from "./components/Composer";
import Todo from "./components/Todo";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      done: false
    },
    {
      id: 2,
      title: "Learn Vue",
      done: true
    },
    {
      id: 3,
      title: "Learn Angular",
      done: false
    }
  ]);

  function addTaskHandler(taskValue) {
    setTodos(todos => [
        {
            id: todos.length + 1,
            title: taskValue,
            done: false
        },
        ...todos
    ]);
  }

    return (
        <Container fluid className="p-0 bg-light vh-100">
            <Navbar bg="dark" expand="lg" className="justify-content-center">
                <Navbar.Brand>
                    <h1 className="text-white">Todos</h1>
                </Navbar.Brand>
            </Navbar>
            <Container className="p-3">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <Composer onAddTask={addTaskHandler}/>
                        <Row>
                          {todos.sort((a, b) => a.done === b.done ? 1 : a.done > b.done ? 1 : -1).map(todo => <Todo task={todo} key={todo.id}/>) }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default App;
