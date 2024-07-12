import React from "react";
import UseForm from "./UseForm";
import './loginform.css';

const LoginForm =()=>{
    const initialCreds = {email: '', password: ''};
    const onSubmit =async(creds)=>{
        try{
            const response = await fetch('/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(creds)
            })

            if(response.OK){
                const data =await response.JSON();
                localStorage.setItems('sessionToken', data.token);
                console.log('Login Success!!', data);
            }else{
                const errorData = await response.json();
                console.error('Login Failed!! ', errorData);
            }
        }catch(error){
            console.error('An error has occured ',error)
        }
    }
    const { creds, errors, handleChange, handleSubmit } = UseForm(initialCreds, onSubmit);
    console.log(errors.email, 'rubalerror')
    return(
        <>
            <div className ="login-container">
            <form className = "login-form" onSubmit={handleSubmit}>
                <h2>LoginForm</h2>
                <div className="form-group">
                    <label htmlFor = 'email'>Email: </label>
                <input 
                    type = 'email' 
                    name = 'email'
                    value= {creds.email} 
                    onChange ={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className = "error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                <label htmlFor = 'password'>Password: </label>
                <input 
                    type = 'password' 
                    name = 'password'
                    value= {creds.password} 
                    onChange ={handleChange}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className = "error-message">{errors.password}</span>}
                </div>
            <button onClick ={handleSubmit} type = 'submit'>Submit</button>
            </form>
            </div>
        </>
    )
}
export default LoginForm;
