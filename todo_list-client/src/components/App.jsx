import React, { useEffect, useState } from "react";
import { Route, Switch } from  'react-router-dom';
import CategoryList from "./CategoryList";
import TaskList from "./TaskList";

function App() {



  const [data, setData] = useState([])
  const [addedNewCategory, setAddedNewCategory] = useState(false)
  


 


  useEffect(() => {
  fetch("http://localhost:9292/")
  .then((r) => r.json())
  .then((data) => setData(data))
  },[addedNewCategory]);



  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList data={data} setAddedNewCategory={setAddedNewCategory} setData={setData}   />
      </Route>
      <Route exact path='/:category/:id'>
         <TaskList />
      </Route>
    </Switch>
  );
}

export default App;
