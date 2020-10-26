import React from 'react';
import {Modal as ModalLive, Button} from 'react-bootstrap';
import '../components/Modal.css';

export const Modal = (
    function Example() {
        const [show, setShow] = React.useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button className ='ModalButton' variant="primary" onClick={handleShow}>
              Log In to your Account
            </Button>
      
            <ModalLive show={show} onHide={handleClose}>
              <ModalLive.Header closeButton>
                <ModalLive.Title>Modal heading</ModalLive.Title>
              </ModalLive.Header>
              <ModalLive.Body>Woohoo, you're reading this text in a modal!</ModalLive.Body>
              <ModalLive.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </ModalLive.Footer>
            </ModalLive>
          </>
        );
      }
)

