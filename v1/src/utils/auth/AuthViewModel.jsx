import { loginUser, signOut } from "./AuthModal";

export const LoginViewModel = {
  signIn: async (email, password) => {
    try {
      const isVerified = await loginUser(email, password);
      if (!isVerified) {
        // User is not verified, show error message and sign out the user
        signOut();
        throw new Error("Email is not verified.");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

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
