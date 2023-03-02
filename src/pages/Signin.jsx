import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from "react";
import { app } from "../firebase";

/* auth  */

const auth = getAuth(app);

const SigninPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(value => console.log('Successfully signed in user'))
        .catch(error => console.log(error))
    }

    return(
        <div className="signin-page">
            <h1>Sign In Page</h1>
            <label>Enter Your Email</label>
            <input onChange={(e) => setEmail(e.target.value)}
             value={email}
             type="email" 
             required 
             placeholder="Email"/>
            <label>Enter Your Password</label>
            <input onChange={(e) => setPassword(e.target.value)}
             value={password}
             type="password" 
             required 
             placeholder="Password" />
            <button onClick={signinUser}>
                Login
            </button>
        </div>
    );
}
export default SigninPage;