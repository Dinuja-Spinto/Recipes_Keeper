
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Recipe import
import addRecipe from "./component/addRecipe";
import allRecipeList from "./component/AllRecepiList"
import editRecipe from "./component/editRecipe";
import viewARecipe from "./component/viewARecipe";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={allRecipeList}></Route>
        <Route path="/addRecipe" component={addRecipe}></Route>
        <Route path="/editRecipe/:id" component={editRecipe}></Route>
        <Route path="/viewARecipe/:id" component={viewARecipe}></Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
