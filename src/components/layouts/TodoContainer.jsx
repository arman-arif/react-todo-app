import { Row } from "react-bootstrap";

function TodoContainer(props) {
    return <Row>{props.children}</Row>;
}

export default TodoContainer;
