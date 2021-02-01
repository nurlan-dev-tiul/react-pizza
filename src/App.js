import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Header } from './components';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      {/* Header */}
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
