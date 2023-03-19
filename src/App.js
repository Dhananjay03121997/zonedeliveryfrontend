import react, {useState} from 'react';

import './App.css';
import { Login } from './Login';
import { Products } from './Products';
import { Register} from './Register';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);
const [currentForm, setCurrentForm] = useState('login');
const toggleForm = (formName)=>{
  setCurrentForm(formName);
}
  return (
    <div className="App">
      {
        token ? Products :
        currentForm === "login" ?
        <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
