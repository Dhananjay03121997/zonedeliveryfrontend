import react, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AddProduct } from './addProduct';

import './App.css';
import { Login } from './Login';
import Products from './Products';
import { Register } from './Register';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <BrowserRouter>
      <div className="App">

        {/* <Switch > */}
        <Redirect from="/" to={token ?"/product":"/login"} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path='/product' component={Products} exact />
        <Route path='/addProduct' component={AddProduct} exact />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
