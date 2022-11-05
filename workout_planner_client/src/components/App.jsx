import { Route, Switch } from  'react-router-dom';
import CategoryList from "./CategoryList";
import WorkoutList from "./WorkoutList";

function App() {

  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList />
      </Route>
      <Route exact path='/:category/:id'>
         <WorkoutList />
      </Route>
    </Switch>
  );
}

export default App;
