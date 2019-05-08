import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'app/Home';

class Routing extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routing;
