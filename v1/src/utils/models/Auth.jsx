import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import User from "./User";

class Auth {
  static async register(name, email, password) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await user.updateProfile({
      displayName: name,
    });

    const newUser = new User(user.uid, user.displayName, user.email);

    await setDoc(doc(db, "users", user.uid), newUser);

    return newUser;
  }

  static async login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);

    const user = await this.getCurrentUser();

    return user;
  }

  static async logout() {
    await signOut(auth);
  }

  static async getCurrentUser() {
    const user = auth.currentUser;

    if (!user) {
      return null;
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return new User(user.uid, data.name, data.email);
    } else {
      console.log("No such document!");
      return null;
    }
  }
}

export default Auth;
