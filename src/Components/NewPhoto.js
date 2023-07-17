import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function NewPhoto({ handleClose, show, handleAddPhoto }) {
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");

  return (
    <>
      <Modal className="new-photo-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                placeholder="maiores repudiandae dolor"
                onChange={(e) => setLabel(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://unsplash.com/photos/HYtBA9xDyfg"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => handleAddPhoto(label, url)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewPhoto;
