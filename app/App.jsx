import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import HomePage from './features/home-page/HomePage.jsx';

function App() {
  return (
    <div>
      <AppBar
        className="app-bar"
        title="TODO App"
        zDepth={2}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
