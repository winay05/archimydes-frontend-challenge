import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";

import "./UserModal.css";

export default function UserModal(props) {
  const { handleCreate } = props;
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    let user = { ...form };
    if (!user.role) {
      user.role = "user";
    }
    if (
      !user.name ||
      user.name?.length < 1 ||
      !user.email ||
      user.email?.length < 1
    ) {
      alert("enter the name and email first!");
      return;
    }
    handleClose();
    setForm({});
    handleCreate(user);
  };
  return (
    <>
      <div className="btn btn-primary" onClick={handleShow} role="button">
        <span>
          <strong>+</strong>{" "}
        </span>
        Create User
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
                aria-label="Default select example"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Row style={{ margin: 0 }}>
              <Button variant="light" onClick={handleClose}>
                Cancel
              </Button>
            </Row>
            <Row style={{ margin: 0 }}>
              <Button variant="primary" onClick={handleSubmit}>
                Create User
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}