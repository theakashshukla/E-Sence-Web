// import { useState } from "react";
// import { auth, provider } from "firebase";

// const useAuth = () => {
//   const [user, setUser] = useState(null);

//   const login = async () => {
//     try {
//       const result = await auth.signInWithPopup(provider);
//       setUser(result.user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       await auth.signOut();
//       setUser(null);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return { user, login, logout };
// };

// export default useAuth;
