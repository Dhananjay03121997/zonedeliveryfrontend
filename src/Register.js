import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = (props) => {


    useEffect(() => {
        console.log("In UseEffect Register");
    }, []);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {
            email,
            password: pass,
            firstName,
            lastName
        }).then(data => {
            if (data.status === 200) {
                alert('success');
            }
            alert(`${data.status}: ${data.data.message}`);
        }).catch((err) => {
            alert(`${err.message}`);

        });

    }
    return (
        <div className='form-container'>
            {/* <form className='register-form' onSubmit={handleSubmit}> */}
            <label>
                First Name
            </label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" placeholder="First Name" id="firstName" name="First Name" />
            <label>
                Last Name
            </label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="LastName" placeholder="Last Name" id="LastName" name="LastName" />
            <label>
                email
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@example.com" id="email" name="email" />
            <label>
                password
            </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
            <button type='submit' onClick={handleSubmit}>Register</button>
            {/* </form> */}
            <Link to="/login">
                <button className='link-btn'>Already havean account? Login here.</button>
            </Link>
        </div>
    )
}