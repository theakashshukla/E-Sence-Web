// import { useState } from "react";
// import Auth from "../models/Auth";

// const LoginViewModel = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   const login = async () => {
//     setIsLoading(true);

//     try {
//       const currentUser = await Auth.login(email, password);

//       setUser(currentUser);
//     } catch (error) {
//       setError(error.message);
//     }

//     setIsLoading(false);
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     isLoading,
//     error,
//     user,
//     login,
//   };
// };
// export default LoginViewModel;
