import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useState } from "react";


function ListItem() {

    const [check, setCheck] = useState(false)
    console.log(check)

    return (

    <ListGroup.Item variant="success">

        <span className="d-flex list-item">
            <Form.Check className="px-2" checked={check} onChange={(e) => setCheck(!check)}/>
            <span className="strike">Chore: Take dog out for a walk</span>
        </span>

        <span  className="delete-btn">
        <Button className="" type="button" variant="danger">Delete</Button>
        </span>  

    </ListGroup.Item>

    )
}
export default ListItem