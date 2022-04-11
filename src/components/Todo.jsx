import { Card, Col, Button } from "react-bootstrap";
import Modal from "./Modal";
import { useState } from "react";

function Todo(props) {
    const [show, setShow] = useState(false);
    const task = props.task;

    function deleteHandler() {
        setShow(true);
    }

    function closeHandler() {
        setShow(false);
    }

    return (
        <Col sm={6} lg={4}>
            <Card className={"mb-4 " + (task.done || "shadow")}>
                <Card.Body className={task.done && "bg-light"}>
                    <Card.Title>{task.title}</Card.Title>
                </Card.Body>
                <Card.Footer className={"d-flex justify-content-between border-top-0 " + (task.done || "bg-white")}>
                    <Button variant={task.done ? "secondary" : "success"} size="sm">
                        {task.done ? "Undone" : "Done"}
                    </Button>
                    <Button variant="danger" size="sm" onClick={deleteHandler}>
                        Delete
                    </Button>
                </Card.Footer>
                {show && <Modal onClose={closeHandler} />}
            </Card>
        </Col>
    );
}

export default Todo;
