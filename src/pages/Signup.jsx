import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from "react";
import { app } from "../firebase";

/* auth  */

const auth = getAuth(app);

const SignupPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('Successfully created user'))
    }

    return(
        <div className="signup-page">
            <h1>Sign Up Page</h1>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
             value={email}
             type="email" 
             required 
             placeholder="Email"/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
             value={password}
             type="password" 
             required 
             placeholder="Password" />
            <button onClick={createUser}>
                SignUp
            </button>
        </div>
    );
}
export default SignupPage;