import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Dropdown } from 'react-bootstrap'

function NewToDoForm() {
    return (
        <Form className="d-flex px-2" >
     
        <Form.Group className="task-input px-2 col-md-4">
                    <label>Task:</label>
                <Form.Control 
                type="text"
                autoFocus
                autoComplete="off"
                />
        </Form.Group>

        <Col className="mt-4 py-1 px-1 d-flex">
        <input type='date'></input>
        </Col>



        <Dropdown className="mt-4 px-1">
        <Dropdown.Toggle variant="success">
            Select Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


        <Col className="mt-4 px-1">
        <Button className="add-to-list-btn">Add to List</Button>
        </Col>


    </Form>
    )
}

export default NewToDoForm