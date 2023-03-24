// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from  "../../firebase";

// const auth = getAuth(app);

// export const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     return user.emailVerified;
//   } catch (error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     throw new Error(`${errorCode}: ${errorMessage}`);
//   }

// };



// export const signOut = () => {
//   auth
//     .signOut()
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };
