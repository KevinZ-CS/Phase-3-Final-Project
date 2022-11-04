import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card, Dropdown, ListGroup, Form, Col, Button } from 'react-bootstrap'
import NewToDoForm from "./NewToDoForm";
import ListItem from "./ListItem";
import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

function EachCategory({ category, onDeleteCategory }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/categories/${category.id}`, {
            method: "DELETE",
          });

          onDeleteCategory(category.id)
    }

    return (
        <ListGroup.Item variant="success">
       
        <Link style={{textDecoration: 'none'}} to={`/${category.category}/${category.id}`} ><h3 className="text-center">{category.category}</h3></Link> 
        <Button variant="danger" className="delete-category" onClick={handleDeleteClick}>X</Button>
    
      
        </ListGroup.Item>
    )
}

export default EachCategory