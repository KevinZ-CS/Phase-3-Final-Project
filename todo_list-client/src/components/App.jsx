import React, { useEffect, useState } from "react";
import { Route, Switch } from  'react-router-dom';
import CategoryList from "./CategoryList";
import TaskList from "./TaskList";

function App() {



  const [data, setData] = useState([])
  const [addedNewCategory, setAddedNewCategory] = useState(false)
  const [updatedComplete, setUpdatedComplete] = useState(false)
  const [addedNewTask, setAddedNewTask] = useState(false)
  const [deletedTask, setDeletedTask] = useState(false)
  // const [check, setCheck] = useState(false)
 
  console.log('hello')

  useEffect(() => {
  fetch("http://localhost:9292/categories")
  .then((r) => r.json())
  .then((data) => setData(data))
  },[addedNewCategory, updatedComplete, addedNewTask, deletedTask]);



  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList data={data} setAddedNewCategory={setAddedNewCategory} setData={setData}   />
      </Route>
      <Route exact path='/:category/:id'>
         <TaskList data={data} setUpdatedComplete={setUpdatedComplete} setAddedNewTask={setAddedNewTask} addedNewTask={addedNewTask} deletedTask={deletedTask} setDeletedTask={setDeletedTask} />
      </Route>
    </Switch>
  );
}

export default App;
