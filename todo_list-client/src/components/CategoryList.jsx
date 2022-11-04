import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, ListGroup, Form, Col, Button } from 'react-bootstrap'
import { useState } from "react";
import EachCategory from "./EachCategory";

function CategoryList({ data, setAddedNewCategory, setData }) {


    const [newCategory, setNewCategory] = useState('')

    function handleSubmitCategory(e) {
      e.preventDefault();
  
      fetch("http://localhost:9292/", {
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



    <ListGroup>
      {data.map((category) => <EachCategory category={category} key={category.id} onDeleteCategory={handleDeleteCategory} />)}
    </ListGroup>
          

    <Card.Body>
 
 

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

export default CategoryList