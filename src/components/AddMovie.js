import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
export default function AddMovie({ addHandler }) {
  // modal manipulation
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //step1: get the data from the user
  // 4 dynamic variable to store the data from the inputs  that the user entred
  const [newtitle, setnewtitle] = useState("");
  const [newdescription, setnewdescription] = useState("");
  const [newrate, setnewrate] = useState("");
  const [newimgUrl, setnewimgUrl] = useState("");
  //step2: create an object from the data of the user
  const NewMovie = {
    id: Math.random(),
    title: newtitle,
    rate: newrate,
    description: newdescription,
    imgUrl: newimgUrl,
  };

  //step 3: add the object to the array  of movies
  const addmovie = () => {
    addHandler(NewMovie);
    handleClose();
  };
  return (
    <>
      <Button className="addBtn" variant="light" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the New movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie title "
              onChange={(e) => setnewtitle(e.target.value)}
            />
            <Form.Label>Movie Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie url poster "
              onChange={(e) => setnewimgUrl(e.target.value)}
            />
            <Form.Label>Movie newrate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie newrate "
              onChange={(e) => setnewrate(e.target.value)}
            />
            <Form.Label>Movie newdescription</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie newdescription "
              onChange={(e) => setnewdescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
