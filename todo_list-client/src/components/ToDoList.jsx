import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Button, Form, Dropdown, ListGroup } from 'react-bootstrap'
import NewToDoForm from "./NewToDoForm";
import ListItem from "./ListItem";

function ToDoList() {

return (
<Container className="py-4">
    <Row>
    <Card>
        <Card.Header className="h2 bg-white">ToDo:</Card.Header>

       <NewToDoForm />
          
    <hr />

    <Card.Body>
 
    <Dropdown className="py-4 filter-dropdown">
      <Dropdown.Toggle variant="success">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <ListGroup>
        <ListItem />
    </ListGroup>


    </Card.Body>
    </Card>
    </Row>
</Container>

)}

export default ToDoList