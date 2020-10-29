import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FnTodo from './functional/FnTodo';
import ClassTodo from './class/ClassTodo';

const App = () => {
  React.useEffect(() => document.title = 'React TODO', []);

  return (
    <Router>
      <Switch>
        <Route path="/class">
          <ClassTodo />
        </Route>
        <Route path="/function">
          <FnTodo />
        </Route>
        <Route path="/">
          <div>
            Go to /class for the class based component, and /function for the functional component.
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;