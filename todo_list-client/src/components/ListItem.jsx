import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useState } from "react";


function ListItem({ task }) {

    const [check, setCheck] = useState(false)


    return (

    <ListGroup.Item variant="success">

        <span className="d-flex list-item">
            <Form.Check className="px-2" checked={check} onChange={(e) => setCheck(!check)}/>
            <span className={check ? "strike" : ''}>{task.task}</span>
        </span>

        <span  className="delete-btn">
        <Button className="" type="button" variant="danger">Delete</Button>
        </span>  

    </ListGroup.Item>

    )
}
export default ListItem