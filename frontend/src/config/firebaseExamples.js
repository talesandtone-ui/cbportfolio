/**
 * Firebase Usage Examples
 * This file contains common Firebase operations for reference
 * Copy these functions to your actual components/services as needed
 */

import { auth, db, storage } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit
} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from 'firebase/storage';

// ==================== AUTHENTICATION EXAMPLES ====================

/**
 * Sign up a new user with email and password
 */
export const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredential.user);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Signup error:', error.message);
        return { success: false, error: error.message };
    }
};

/**
 * Sign in existing user
 */
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Login error:', error.message);
        return { success: false, error: error.message };
    }
};

/**
 * Sign out current user
 */
export const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log('User signed out');
        return { success: true };
    } catch (error) {
        console.error('Signout error:', error.message);
        return { success: false, error: error.message };
    }
};

/**
 * Listen to authentication state changes
 * Use this in your App.jsx or main component
 */
export const observeAuthState = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

/**
 * Send password reset email
 */
export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true, message: 'Password reset email sent' };
    } catch (error) {
        console.error('Password reset error:', error.message);
        return { success: false, error: error.message };
    }
};

// ==================== FIRESTORE EXAMPLES ====================

/**
 * Add a new document to a collection
 */
export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: new Date().toISOString()
        });
        console.log('Document written with ID:', docRef.id);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error adding document:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Get all documents from a collection
 */
export const getAllDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return { success: true, data: documents };
    } catch (error) {
        console.error('Error getting documents:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Get a single document by ID
 */
export const getDocument = async (collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
        } else {
            return { success: false, error: 'Document not found' };
        }
    } catch (error) {
        console.error('Error getting document:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Update a document
 */
export const updateDocument = async (collectionName, documentId, data) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
        return { success: true };
    } catch (error) {
        console.error('Error updating document:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete a document
 */
export const deleteDocument = async (collectionName, documentId) => {
    try {
        await deleteDoc(doc(db, collectionName, documentId));
        return { success: true };
    } catch (error) {
        console.error('Error deleting document:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Query documents with filters
 */
export const queryDocuments = async (collectionName, filters = {}) => {
    try {
        let q = collection(db, collectionName);

        // Example: { field: 'status', operator: '==', value: 'active' }
        if (filters.where) {
            q = query(q, where(filters.where.field, filters.where.operator, filters.where.value));
        }

        // Example: { field: 'createdAt', direction: 'desc' }
        if (filters.orderBy) {
            q = query(q, orderBy(filters.orderBy.field, filters.orderBy.direction));
        }

        // Example: 10
        if (filters.limit) {
            q = query(q, limit(filters.limit));
        }

        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return { success: true, data: documents };
    } catch (error) {
        console.error('Error querying documents:', error);
        return { success: false, error: error.message };
    }
};

// ==================== STORAGE EXAMPLES ====================

/**
 * Upload a file to Firebase Storage
 */
export const uploadFile = async (file, path = 'uploads') => {
    try {
        const fileName = `${Date.now()}_${file.name}`;
        const storageRef = ref(storage, `${path}/${fileName}`);

        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log('File uploaded successfully:', downloadURL);
        return { success: true, url: downloadURL, path: snapshot.ref.fullPath };
    } catch (error) {
        console.error('Upload error:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Get download URL for an existing file
 */
export const getFileURL = async (filePath) => {
    try {
        const storageRef = ref(storage, filePath);
        const url = await getDownloadURL(storageRef);
        return { success: true, url };
    } catch (error) {
        console.error('Error getting file URL:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete a file from Storage
 */
export const deleteFile = async (filePath) => {
    try {
        const storageRef = ref(storage, filePath);
        await deleteObject(storageRef);
        return { success: true };
    } catch (error) {
        console.error('Error deleting file:', error);
        return { success: false, error: error.message };
    }
};

// ==================== USAGE IN COMPONENTS ====================

/*
Example: Using in a React component

import { signUpUser, addDocument, uploadFile } from '../config/firebaseExamples';

const MyComponent = () => {
  const handleSignup = async (email, password) => {
    const result = await signUpUser(email, password);
    if (result.success) {
      console.log('User created:', result.user);
    } else {
      console.error('Error:', result.error);
    }
  };

  const handleAddLead = async (leadData) => {
    const result = await addDocument('leads', leadData);
    if (result.success) {
      console.log('Lead added with ID:', result.id);
    }
  };

  const handleFileUpload = async (file) => {
    const result = await uploadFile(file, 'documents');
    if (result.success) {
      console.log('File URL:', result.url);
    }
  };

  return (
    // Your JSX
  );
};
*/
