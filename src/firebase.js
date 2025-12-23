import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "netflix-clone-b4d24.firebaseapp.com",
  projectId: "netflix-clone-b4d24",
  storageBucket: "netflix-clone-b4d24.firebasestorage.app",
  messagingSenderId: "239327189082",
  appId: "1:239327189082:web:edb581bee3dacad031a063"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, signup, login, logout };