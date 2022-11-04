import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, ListGroup, Form, Col, Button } from 'react-bootstrap'
import ListItem from "./ListItem";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



function TaskList() {


    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const { category, id } = useParams();


    useEffect(() => {
      fetch(`http://localhost:9292/${id}`)
      .then((r) => r.json())
      .then((data) => setTasks(data))
      },[]);


   

    function handleSubmitTask(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/${category}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: newTask,
          category_id: id,
        }),
      })
        .then((r) => r.json())
        .then((newTask) => {
            console.log(newTask)
          setNewTask('')
          handleAddTask(newTask)
        });
    }


    function handleAddTask(newTask) {
      setTasks([...tasks, newTask]);
    }

    function handleDeleteTask(id) {
        const updatedTask = tasks.filter((task) => task.id !== id);
        setTasks(updatedTask);
      }

      function handleUpdateTask(updatedTaskObj) {
        const updatedTasks = tasks.map((task) => {
          if (task.id === updatedTaskObj.id) {
            return updatedTaskObj;
          } else {
            return task;
          }
        });
        setTasks(updatedTasks);
      }

return (
    <React.Fragment>

<Container className="py-4">
    <Row>
      <div className="col-md-2"></div>
    <Card className="col-md-8">
        <Card.Header className="h2 bg-white">ToDo: {category}</Card.Header>

          

    <Card.Body>
 


    <ListGroup>
        {tasks.map((task) => <ListItem task={task} key={task.id} onTaskDelete={handleDeleteTask} onUpdateCheck={handleUpdateTask} /> )}
    </ListGroup>
       
<Form className="d-flex" onSubmit={handleSubmitTask} >
     
     <Form.Group className="task-input px-2">
                 <label>Add Task:</label>
             <Form.Control 
             type="text"
             autoFocus
             autoComplete="off"
             onChange={(e) => setNewTask(e.target.value)}
             value={newTask}
             />
     </Form.Group>


     <Col className="mt-4 col-md-2">
     <Button type='submit' className="add-to-list-btn">Add</Button>
     </Col>


    


 </Form>
 <Link to="/" >Back</Link>


    </Card.Body>
    </Card>
    </Row>
</Container>


</React.Fragment>
)}

export default TaskList