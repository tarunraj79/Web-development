import './App.css';
import React, {useState} from "react";
import UserRegistration from './UserRegistration';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <UserRegistration 
        firstName={firstName} setFirstName={setFirstName}
        lastName={lastName} setLastName={setLastName}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
      
    </div>
  );
}

export default App;
