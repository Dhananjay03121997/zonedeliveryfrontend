import react, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import { Login } from './Login';
import Products from './Products';
import { Register } from './Register';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch > */}
          <Redirect from="/" to="/login" exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path='/product' component={Products} exact />
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
