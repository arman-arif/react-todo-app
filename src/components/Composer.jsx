import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

function Composer() {
    return (
        <div className="my-3">
            <Form>
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="What todo?" />
                    <Button variant="outline-secondary" type="sumbit">
                        Add Task
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}

export default Composer;
