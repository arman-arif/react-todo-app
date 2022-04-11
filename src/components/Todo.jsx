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

    function doneHandler() {
        props.onDone(task);
    }

    return (
        <Col sm={6} lg={4}>
            <Card className={"mb-4 " + (task.done || "shadow")}>
                <Card.Body className={task.done && "bg-light"}>
                    <Card.Title>{task.title}</Card.Title>
                </Card.Body>
                <Card.Footer className={"d-flex justify-content-between border-top-0 " + (task.done || "bg-white")}>
                    <Button variant={task.done ? "secondary" : "success"} size="sm" onClick={doneHandler}>
                        {task.done ? "Undone" : "Done"}
                    </Button>
                    <Button variant="danger" size="sm" onClick={deleteHandler}>
                        Delete
                    </Button>
                </Card.Footer>
                {show && <Modal taskId={task.id} onClose={closeHandler} onConfirm={props.onDelete} />}
            </Card>
        </Col>
    );
}

export default Todo;
