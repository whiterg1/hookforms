import React, {useState} from 'react';

const Form = props =>{
const {state, setState} = props;
const [firstNameErrors, setFirstNameErrors] = useState(false);
const [lastNameErrors, setLastNameErrors] = useState(false);
const [emailErrors, setEmailErrors] = useState(false);
const [passwordErrors, setPasswordErrors] = useState(false);
const [passwordMatch, setPasswordMatch] = useState(false);
    
    const onChange = e => {
       setState({
        ...state,
        [e.target.name]: e.target.value
       });
       if(e.target.name === "firstName"){
        firstNameValidation(e);
       }else if (e.target.name ==="lastName"){
        lastNameValidation(e);
       }else if (e.target.name === "email"){
        emailValidation(e);
       }else if (e.target.name === "password" || "confirmPassword"){
        passwordValidation(e);
        passwordMatching();
       }
    }
    const firstNameValidation = e =>{
        if(e.target.value.length < 2){
            setFirstNameErrors(true);
        }else{
            setFirstNameErrors(false);
        }
    }
    
    const lastNameValidation = e =>{
        if(e.target.value.length < 2){
            setLastNameErrors(true);
        }else{
            setLastNameErrors(false);
        }
    }

    const emailValidation = e =>{
        if (e.target.value.length < 5) {
            setEmailErrors(true);
        }else{
            setEmailErrors(false);
        }
    }

    const passwordValidation = e =>{
        if(e.target.value.length < 8){
            setPasswordErrors(true);
        }else{
            setPasswordErrors(false);
        }
    }

    const passwordMatching = () =>{
        if(state.password !== state.confirmPassword){
            setPasswordMatch(false);
        }else{
            setPasswordMatch(true);
        }
    }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange = {onChange} type="text" name="firstName"/>
                <div className="validations">
                    {firstNameErrors ? "First Name must be 2 characters" : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange = {onChange}type="text" name="lastName"/>
                <div className="validations">
                    {lastNameErrors ? "Last Name must be 2 characters" : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange = {onChange} type="text" name="email"/>
                <div className="validations">
                    {emailErrors ? "Email must be 5 characters" : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange = {onChange} type="text" name="password"/>
                <div className="validations">
                    {passwordErrors ? "Password must be 8 characters" : null}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange = {onChange} type="text" name="confirmPassword"/>
                <div className="validations">
                {passwordErrors ? "Password must be 8 characters" : null}
                </div>
                <div className="validations">
                {passwordMatch ? "Passwords must match!" : null}
                </div>
            </div>
        </form>
     );
    
}
export default Form;