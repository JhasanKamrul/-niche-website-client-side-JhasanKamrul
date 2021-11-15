import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // sending name to firebase 
                setAuthError('');
                const newUser = { email, displayName: name }
                console.log(newUser);
                setUser(newUser);
                // save user to the database 

                myUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: { name }
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.push('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // ..
            })
            .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false));
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                myUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/home';
                history.replace(destination);

            }).catch((error) => {
                // ...
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const myUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        setUser,
        token,
        isLoading,
        loginUser,
        registerUser,
        logOut,
        signInWithGoogle

    }
}
export default useFirebase;