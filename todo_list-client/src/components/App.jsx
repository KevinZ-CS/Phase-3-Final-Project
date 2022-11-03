import React from "react";
import ToDoList from "./ToDoList";
import { Route, Switch } from  'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
         <ToDoList/>
      </Route>
    </Switch>
  );
}

export default App;
