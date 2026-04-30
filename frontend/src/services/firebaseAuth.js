/**
 * Firebase Authentication Service (Client-Side Only)
 * 
 * USE THIS if you want to use Firebase Auth WITHOUT a backend server.
 * If you're currently using backend auth (authService from auth.js), 
 * you can switch to this for a serverless approach.
 * 
 * To switch:
 * 1. Replace the import in your components:
 *    OLD: import { authService } from '../services/auth'
 *    NEW: import { firebaseAuthService } from '../services/firebaseAuth'
 * 
 * 2. The function names are the same, so your component code won't need changes!
 */

import { auth, db } from '../config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const firebaseAuthService = {
    /**
     * Register a new user with Firebase Auth
     * Also creates a user document in Firestore
     */
    register: async (name, email, password) => {
        try {
            // Create user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile with name
            await updateProfile(user, {
                displayName: name
            });

            // Create user document in Firestore
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                name: name,
                email: email,
                createdAt: new Date().toISOString(),
                role: 'client' // or 'admin', 'vendor', etc.
            });

            // Store user info in localStorage for quick access
            localStorage.setItem('user', JSON.stringify({
                uid: user.uid,
                name: name,
                email: email
            }));

            return {
                success: true,
                user: {
                    uid: user.uid,
                    name: name,
                    email: email
                }
            };
        } catch (error) {
            console.error('Registration error:', error);

            // User-friendly error messages
            let errorMessage = 'Registration failed';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Email already registered';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Password should be at least 6 characters';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            }

            return { success: false, error: errorMessage };
        }
    },

    /**
     * Login existing user
     */
    login: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Get additional user data from Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.exists() ? userDoc.data() : {};

            const userInfo = {
                uid: user.uid,
                name: user.displayName || userData.name || '',
                email: user.email,
                ...userData
            };

            // Store in localStorage
            localStorage.setItem('user', JSON.stringify(userInfo));

            return { success: true, user: userInfo };
        } catch (error) {
            console.error('Login error:', error);

            let errorMessage = 'Login failed';
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                errorMessage = 'Invalid email or password';
            } else if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Invalid credentials';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many attempts. Please try again later.';
            }

            return { success: false, error: errorMessage };
        }
    },

    /**
     * Logout current user
     */
    logout: async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('user');
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Get current user from localStorage (quick access)
     */
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated: () => {
        return !!auth?.currentUser || !!localStorage.getItem('user');
    },

    /**
     * Get Firebase Auth token (for API requests if needed)
     */
    getToken: async () => {
        try {
            if (auth?.currentUser) {
                return await auth.currentUser.getIdToken();
            }
            return null;
        } catch (error) {
            console.error('Error getting token:', error);
            return null;
        }
    },

    /**
     * Send password reset email
     */
    resetPassword: async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return { success: true, message: 'Password reset email sent' };
        } catch (error) {
            console.error('Password reset error:', error);

            let errorMessage = 'Failed to send reset email';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            }

            return { success: false, error: errorMessage };
        }
    },

    /**
     * Listen to authentication state changes
     * Use this in App.jsx to keep auth state in sync
     * 
     * Example usage:
     * useEffect(() => {
     *   const unsubscribe = firebaseAuthService.onAuthStateChange((user) => {
     *     if (user) {
     *       console.log('User logged in:', user);
     *     } else {
     *       console.log('User logged out');
     *     }
     *   });
     *   return () => unsubscribe();
     * }, []);
     */
    onAuthStateChange: (callback) => {
        return onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Get additional user data from Firestore
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                const userData = userDoc.exists() ? userDoc.data() : {};

                const userInfo = {
                    uid: user.uid,
                    name: user.displayName || userData.name || '',
                    email: user.email,
                    ...userData
                };

                localStorage.setItem('user', JSON.stringify(userInfo));
                callback(userInfo);
            } else {
                localStorage.removeItem('user');
                callback(null);
            }
        });
    }
};

// Export as default for easier imports
export default firebaseAuthService;
