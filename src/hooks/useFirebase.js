import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../firebase/firebase.init';


firebaseInitialize()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(() => setIsLoading(false));
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])
    return{
        user,
        error,
        googleSignIn,
        logout,
        isLoading
    }
}
export default useFirebase;