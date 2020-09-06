
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Main from "./Components/Main/Main";
import NoMatch from "./Components/NoMatch/NoMatch";
import UserDetail from "./Components/UserDetail/UserDetail";


function App() {

  return (
<Router>
   <Switch>
      <Route path="/Main">
      <Main></Main>
         </Route>

         <Route path="/posts/:userId">
<UserDetail></UserDetail>
         </Route>
        
<Route exact path="/">
<Main></Main>
</Route>

<Route path="*">
<NoMatch></NoMatch>
</Route>

   </Switch>
</Router>

  );
}

export default App;
