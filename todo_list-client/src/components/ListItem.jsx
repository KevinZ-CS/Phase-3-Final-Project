import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useState } from "react";


function ListItem({ task, onTaskDelete, onUpdateCheck }) {

    const [check, setCheck] = useState(task.complete)



    function handleDeleteClick() {
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE",
          });

        onTaskDelete(task.id)
    }


    function handleCheckChange(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            complete: !check,
          }),
        })
          .then((r) => r.json())
          .then((check) => {
            setCheck(check.complete)
            onUpdateCheck(check)
          }
          );
      }

    

    return (

    <ListGroup.Item variant="success">

        <span className="d-flex list-item"> 
            <Form.Check className="px-2" checked={check} onChange={handleCheckChange}/>
            <span className={check ? "strike" : ''}>{task.task}</span>
        </span>

        <span  className="delete-btn">
        <Button onClick={handleDeleteClick} type="button" variant="danger">Delete</Button>
        </span>  

    </ListGroup.Item>

    )
}
export default ListItem