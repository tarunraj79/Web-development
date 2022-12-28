import React, {useState} from "react";

function UserRegistration(props) {
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [firstNameEntered, setFirstNameEntered] = useState(false);
    const [lastNameEntered, setLastNameEntered] = useState(false);
    const [emailEntered, setEmailEntered] = useState(false);
    const [passwordEntered, setPasswordEntered] = useState(false);
    const [confirmPasswordEntered, setConfirmPasswordEntered] = useState(false);

    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handleFirstName = (event) => {
        if(event.target.value) {
            if(!event.target.value.match(firstNameRegex)) {
                setErrorFirstName("Please enter only alphabets!!!");
            } 
            else {
                setErrorFirstName("");
                props.setFirstName(event.target.value);
                setFirstNameEntered(true);
            }
        }
        else {
            setErrorFirstName("First name is required!!!");
            setFirstNameEntered(false);
        }
    };
    const handleLastName = (event) => {
        if(event.target.value) {
            if(!event.target.value.match(lastNameRegex)) {
                setErrorLastName("Please enter only alphabets!!!");
            } 
            else {
                setErrorLastName("");
                props.setLastName(event.target.value);
                setLastNameEntered(true);
            }
        }
        else {
            setErrorLastName("Last name is required!!!");
            setLastNameEntered(false);
        }
    };
    const handleEmail = (event) => {
        if(event.target.value) {
            if(!event.target.value.match(emailRegex)) {
                setErrorEmail("Please provide valid email address");
            } 
            else {
                setErrorEmail("");
                props.setEmail(event.target.value);
                setEmailEntered(true);
            }
        }
        else {
            setErrorEmail("Email address is required!!!");
            setEmailEntered(false);
        }
    };
    const handlePassword = (event) => {
        if(event.target.value) {
            if(!event.target.value.match(passwordRegex)) {
                setErrorPassword("Please create password consisting of atleast one alphabet, a number and a special character with a minimum length of 8 characters");
            } 
            else {
                setErrorPassword("");
                props.setPassword(event.target.value);
                setPasswordEntered(true);
            }
        }
        else {
            setErrorPassword("Password is required!!!");
            setPasswordEntered(false);
        }
    };
    const handleConfirmPassword = (event) => {
        if(event.target.value) {
            if(!event.target.value.match(props.password)) {
                setErrorConfirmPassword("Passwords are not matched!!!");
            } 
            else {
                setErrorConfirmPassword("");
                props.setConfirmPassword(event.target.value);
                setConfirmPasswordEntered(true);
            }
        }
        else {
            setErrorConfirmPassword("Confirm password is required!!!");
            setConfirmPasswordEntered(false);
        }
    };

    const validateFormHandler = (event) => {
        if(firstNameEntered && lastNameEntered && emailEntered && passwordEntered && confirmPasswordEntered) {
            alert("User registered successfully!!!")
            props.setFirstName("");
            props.setLastName("");
            props.setEmail("");
            props.setPassword("");
            props.setConfirmPassword("");
        } 
        else {
            alert("Please enter all fields!!!");
        }
    };

    return (
        <div className='registration'>
            <form>
                <h2 style={{align: "center", color: "red"}}>Register User</h2>
                <label>Firstname: </label>
                <input type="text" name="fname" onChange={handleFirstName} required/> <br />
                <div style={{ color: "red" }}>{errorFirstName}</div> <br />
                <label>Lastname: </label>
                <input type="text" name="lname" onChange={handleLastName} required/> <br />
                <div style={{ color: "red" }}>{errorLastName}</div> <br />
                <label>Email: </label>
                <input type="email" name="email" onChange={handleEmail} required/> <br />
                <div style={{ color: "red" }}>{errorEmail}</div> <br />
                <label>Password: </label>
                <input type="password" name="password" onChange={handlePassword} required/> <br />
                <div style={{ color: "red" }}>{errorPassword}</div> <br />
                <label>Confirm Password: </label>
                <input type="password" name="cpassword" onChange={handleConfirmPassword} required/> <br />
                <div style={{ color: "red" }}>{errorConfirmPassword}</div> <br />
                <button className="button" onClick={validateFormHandler}>Submit</button><br />
            </form>
        </div>
    );
}

export default UserRegistration;