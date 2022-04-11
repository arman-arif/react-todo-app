import { useState } from "react";
import { Button, Modal as BsModal } from "react-bootstrap";

function Modal(props) {
    const [show, setShow] = useState(true);

    function closeHandler() {
        setShow(false);
        props.onClose();
    }

    function confirmHandler() {
        setShow(false);
        props.onConfirm(props.taskId);
    }

    return (
        <BsModal show={show}>
            <BsModal.Body className="pt-3">
                <h4 className="text-center mb-4">Are you sure?</h4>
                <div className="text-center">
                    <Button className="mx-3" variant="outline-secondary" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button className="mx-3" variant="danger" onClick={confirmHandler}>
                        Confirm
                    </Button>
                </div>
            </BsModal.Body>
        </BsModal>
    );
}

export default Modal;
