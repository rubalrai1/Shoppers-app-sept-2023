import { useState } from 'react';

const UseForm =(initialCreds, onSubmit)=>{
    const [creds, setCreds] =useState(initialCreds);
    const [errors, setErrors] = useState({});

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setCreds({
            ...creds,
            [name]: value,
        })
    }

    const validate =(data)=>{
        let errors ={};
        //validation logic
        if(!data.email){
            errors.email = 'Email is required!'
        }
        if (!/\S+@\S+\.\S+/.test(creds.email)){
            errors.email = "Email not valid!"
        }
        if(data.email.length < 4){
            errors.email = "Email length does not meet the criteria!"
        }
        if(data.password.length < 5){
            errors.password = "Password must be greater than 5!"
        }
        if(data.password.includes(data.email)){
            errors.password = 'Choose a different password!'
        }
        return errors;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const validateErrors = validate(creds);
        setErrors(validateErrors);
        console.log(validateErrors, 'rubal')
        if(Object.keys(validateErrors).length === 0){ //to check if no errors found or object empty
            onSubmit(creds);
        }
    }

    return{
        creds, 
        errors,
        handleChange,
        handleSubmit,
    } 
}

export default UseForm;