import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap'
import { useState } from "react";


function Workout({ workout, onWorkoutDelete, onUpdateCheck }) {

    const [check, setCheck] = useState(workout.complete)



    function handleDeleteClick() {
        fetch(`http://localhost:9292/workout/${workout.id}`, {
            method: "DELETE",
          });

        onWorkoutDelete(workout.id)
    }


    function handleCheckChange(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/workout/${workout.id}`, {
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
            <span className={check ? "strike" : ''}>{workout.exercise}, Weight: {workout.weight}, Sets: {workout.sets}, Reps/Set: {workout.reps}  </span>
        </span>

        <span  className="delete-btn">
        <Button onClick={handleDeleteClick} type="button" variant="danger" size="sm" className="px-1 py-0">x</Button>
        </span>  

    </ListGroup.Item>

    )
}
export default Workout