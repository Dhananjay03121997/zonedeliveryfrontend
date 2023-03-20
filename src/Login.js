import react, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Login = (props) => {
   let history = useHistory();

   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/signin', {
         email,
         password: pass
      }).then((data) => {
         console.log(data);
         if (data.status === 200) {
            localStorage.setItem('token', data.data.data.accessToken);
         }
         alert('success');
         history.push('/register', true);
         history.push('/register');
      }).catch(err => {
         alert(`${err.message}`);

      })
   }
   return (
      <div className='form-container'>
         {/* <form className='login-form' onSubmit={handleSubmit}> */}
         <label>
            email
         </label>
         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
         <label>
            password
         </label>
         <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
         <button type='submit' onClick={handleSubmit}>Log In</button>
         {/* </form> */}
         <Link to="/register">
            <button className='link-btn' >Don't have account? Register here.</button>
         </Link>
      </div>
   )
}