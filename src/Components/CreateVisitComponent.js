import React, {useState} from 'react';
import './RegistrationStyle.css'
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [job,setJob] = useState(null);
    const [site,setSite] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "job"){
            setJob(value);
        }
        if(id === "site"){
            setSite(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,job,site);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="job">
                    <label className="form__label" for="job">job </label>
                    <input className="form__input" type="job"  id="job" value={job} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="site">
                    <label className="form__label" for="site">site</label>
                    <input className="form__input" type="job" id="site" value={site} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">create</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm