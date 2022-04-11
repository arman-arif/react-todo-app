import { Col, Container, Navbar, Row } from "react-bootstrap";

function AppLayout(props) {
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
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AppLayout;
