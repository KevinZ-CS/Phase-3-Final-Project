import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import { Route, Switch } from  'react-router-dom'

function App() {



  const [data, setData] = useState([])
  const [addedNewCategory, setAddedNewCategory] = useState(false)

  useEffect(() => {
  fetch("http://localhost:9292/categories")
  .then((r) => r.json())
  .then((data) => setData(data))
  },[addedNewCategory]);

  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList data={data} setAddedNewCategory={setAddedNewCategory} setData={setData} />
      </Route>
      <Route exact path='/:id'>
         {/* <ToDoList data={data} /> */}
      </Route>
    </Switch>
  );
}

export default App;
