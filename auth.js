// Firebase Authentication
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { auth } from "./firebase-config.js";

// Sign up
export async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        return {
            success: true,
            user: userCredential.user
        };

    } catch (error) {
        return {
            success: false,
            error: getAuthErrorMessage(error.code)
        };
    }
}

// Login
export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        return {
            success: true,
            user: userCredential.user
        };

    } catch (error) {
        return {
            success: false,
            error: getAuthErrorMessage(error.code)
        };
    }
}

// Logout
export async function logout() {
    try {
        await signOut(auth);

        return {
            success: true
        };

    } catch (error) {
        return {
            success: false,
            error: "Could not log out. Please try again."
        };
    }
}

// Watch login state
export function watchAuthState(callback) {
    return onAuthStateChanged(auth, callback);
}

// Firebase error messages
function getAuthErrorMessage(errorCode) {

    switch (errorCode) {

        case "auth/email-already-in-use":
            return "This email is already registered.";

        case "auth/invalid-email":
            return "Please enter a valid email address.";

        case "auth/weak-password":
            return "Password should be at least 6 characters.";

        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
            return "Incorrect email or password.";

        case "auth/too-many-requests":
            return "Too many attempts. Please try again later.";

        case "auth/network-request-failed":
            return "Network error. Please check your internet connection.";

        default:
            return "Something went wrong. Please try again.";
    }
}