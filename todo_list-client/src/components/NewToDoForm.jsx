import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Dropdown } from 'react-bootstrap'
import { useState } from "react";

function NewToDoForm() {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Select Category');
    console.log(category)

    function handleClick(e) {
        setCategory(e.target.value)
    }


    return (
    <Form className="d-flex px-2" >
     
        <Form.Group className="task-input px-2 col-md-4">
                    <label>Task:</label>
                <Form.Control 
                type="text"
                autoFocus
                autoComplete="off"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                />
        </Form.Group>

        <Col className="mt-4 py-1 px-1 d-flex">
        <input 
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        >
        </input>
        </Col>


        <Dropdown className="mt-4 px-1">
        <Dropdown.Toggle variant="success"  >
            {category}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item as='button' value='School' onClick={handleClick}>School</Dropdown.Item>
            <Dropdown.Item as='button' value='Work' onClick={handleClick}>Work</Dropdown.Item>
            <Dropdown.Item as='button' value='Personal' onClick={handleClick}>Personal</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


        <Col className="mt-4 px-1">
        <Button className="add-to-list-btn">Add to List</Button>
        </Col>


    </Form>
    )
}

export default NewToDoForm