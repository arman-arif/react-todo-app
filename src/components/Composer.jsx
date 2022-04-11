import { useRef } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

function Composer(props) {
    const taskInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const taskValue = taskInputRef.current.value;

        if (taskValue.trim().length > 0) {
            props.onAddTask(taskValue);
            taskInputRef.current.value = "";
        }
    }

    return (
        <div className="my-3">
            <Form onSubmit={submitHandler}>
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="What todo?" ref={taskInputRef} />
                    <Button variant="outline-secondary" type="sumbit">
                        Add Task
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

export default Composer;
