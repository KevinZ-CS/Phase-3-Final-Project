import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Dropdown, ListGroup, Form, Col, Button } from 'react-bootstrap'
import NewToDoForm from "./NewToDoForm";
import ListItem from "./ListItem";
import { useState } from "react";
import { useEffect } from "react";
import EachCategory from "./EachCategory";

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [data, setData] = useState([])
    const [newCategory, setNewCategory] = useState('')
    const [addedNewCategory, setAddedNewCategory] = useState(false)

    useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then((r) => r.json())
    .then((data) => setData(data))
    },[addedNewCategory]);



    function updateCategory(data) {
      data.map((data) => ({id: data.id, category: data.category}))
    } 


    function handleSubmitCategory(e) {
      e.preventDefault();
  
      fetch("http://localhost:9292/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: newCategory,
        }),
      })
        .then((r) => r.json())
        .then((newCategory) => {
          setNewCategory('')
          setAddedNewCategory(true)
        });
    }



  

    function handleAddTask(newTask) {
      setTasks([...tasks, newTask]);
    }

    function handleDeleteCategory(id) {
        const updatedData = data.filter((data) => data.id !== id);
        setData(updatedData);
      }

return (
<Container className="py-4">
    <Row>
      <div className="col-md-4"></div>
    <Card className="col-md-4">
        <Card.Header className="h2 bg-white">ToDo:</Card.Header>

       {/* <NewToDoForm onAddNewTask={handleAddTask} /> */}


    <ListGroup>
      {data.map((category) => <EachCategory category={category} key={category.id} onDeleteCategory={handleDeleteCategory} />)}
    </ListGroup>
          

    <Card.Body>
 
    {/* <Dropdown className="py-4 filter-dropdown">
      <Dropdown.Toggle variant="success">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    {/* <ListGroup>
        {tasks.map((task) => <ListItem task={task} key={task.id} onTaskDelete={handleDeleteTask} /> )}
    </ListGroup> */}

<Form className="d-flex" onSubmit={handleSubmitCategory} >
     
     <Form.Group className="task-input px-2">
                 <label>Add Category:</label>
             <Form.Control 
             type="text"
             autoFocus
             autoComplete="off"
             onChange={(e) => setNewCategory(e.target.value)}
             value={newCategory}
             />
     </Form.Group>


     <Col className="mt-4 col-md-2">
     <Button type='submit' className="add-to-list-btn">Add</Button>
     </Col>


 </Form>


    </Card.Body>
    </Card>
    </Row>
</Container>

)}

export default ToDoList