
import React, { useState } from "react"
import UserService from '../service/RegistrationSevice'

const RegisterForm = ({setShowAllUser , currentUser , setCurrentUser}) => {


            const handleChange = (e) => {
            const { name , value } =e.target
            console.log(name + ' : ' + value);
           setCurrentUser({
               ...currentUser,
               [ name ]:value
           })
        }
    const save = () =>{
        console.log(currentUser);
            createUser() 
        
    }

    const createUser = () =>{
        console.log('currentemployee', currentUser);
        UserService.createUser(currentUser).then(
            (result) => {
                console.log(result)
                if(result.status === 200){
                    resetForm()
                }
            }
        )
    }

    const resetForm = () => {
        console.log('We are in Reset Form')
        setCurrentUser({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            id:null
        })
    }

    return(
        <div>
            <input placeholder="first Name " className="form-control mb-3 mt-4" 
            value={ currentUser.firstName }
            onChange={ handleChange }
            name="firstName"
            // onChange={ ( xyz ) => handleChange(xyz) }
            />
            <input placeholder="last Name " className="form-control mb-3" 
            value={ currentUser.lastName }
            onChange={ handleChange } 
            name="lastName"
            />
            <input placeholder="Email " className="form-control mb-3"
            value={ currentUser.email }
            onChange={ handleChange }
            name="email"
            />
            <input placeholder="password" className="form-control mb-3" 
            value={ currentUser.password }
            onChange={ handleChange }
            name="password"
            />
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-primary w-100" onClick={ save }>
                    <i className="bi bi-save"></i>SAVE</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary w-100" onClick={ resetForm }>
                    <i className="bi bi-arrow-clockwise" ></i>CLEAR</button>
                </div>

            </div>
        </div >
    )
}
export default RegisterForm