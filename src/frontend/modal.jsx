import React, {useState} from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image className="image-thumbnail" src={props.content} thumbnail onClick={handleShow} />
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <Image src={props.content} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;