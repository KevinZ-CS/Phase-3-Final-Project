import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Dropdown } from 'react-bootstrap'
import { useState } from "react";

function NewToDoForm({ onAddNewTask }) {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Select Category');


    function handleClick(e) {
        setCategory(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            task: task,
            category: category,
            due_date: date,
          }),
        })
          .then((r) => r.json())
          .then((newTask) => {
            onAddNewTask(newTask);
            setTask('');
            setCategory('Select Category')
            setDate('')
          });
      }


    return (
    <Form className="d-flex px-2" onSubmit={handleSubmit} >
     
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
            <Dropdown.Item as='button' type="button" value='School' onClick={handleClick}>School</Dropdown.Item>
            <Dropdown.Item as='button' type="button" value='Work' onClick={handleClick}>Work</Dropdown.Item>
            <Dropdown.Item as='button' type="button" value='Personal' onClick={handleClick}>Personal</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>


        <Col className="mt-4 px-1">
        <Button type='submit' className="add-to-list-btn">Add to List</Button>
        </Col>


    </Form>
    )
}

export default NewToDoForm