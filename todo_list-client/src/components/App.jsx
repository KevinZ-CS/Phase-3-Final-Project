import React, { useEffect, useState } from "react";
import { Route, Switch } from  'react-router-dom';
import CategoryList from "./CategoryList";
import TaskList from "./TaskList";

function App() {




  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList />
      </Route>
      <Route exact path='/:category/:id'>
         <TaskList />
      </Route>
    </Switch>
  );
}

export default App;
