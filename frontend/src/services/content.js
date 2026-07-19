import { db, storage } from '../config/firebase';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

/**
 * Generic fetcher for a collection, ordered by createdAt
 */
export const getCollection = async (colName, orderField = 'createdAt', direction = 'asc') => {
    try {
        const q = query(collection(db, colName), orderBy(orderField, direction));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(`Error fetching collection ${colName}:`, error);
        // Fallback to empty array
        return [];
    }
};

/**
 * Add a new document to a collection
 */
export const addContent = async (colName, data) => {
    try {
        const docRef = await addDoc(collection(db, colName), {
            ...data,
            createdAt: new Date().toISOString()
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error(`Error adding to ${colName}:`, error);
        return { success: false, error: error.message };
    }
};

/**
 * Update an existing document
 */
export const updateContent = async (colName, itemId, data) => {
    try {
        const docRef = doc(db, colName, itemId);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date().toISOString()
        });
        return { success: true };
    } catch (error) {
        console.error(`Error updating ${colName} item ${itemId}:`, error);
        return { success: false, error: error.message };
    }
};

/**
 * Delete a document from a collection
 */
export const deleteContent = async (colName, itemId) => {
    try {
        const docRef = doc(db, colName, itemId);
        await deleteDoc(docRef);
        return { success: true };
    } catch (error) {
        console.error(`Error deleting from ${colName} item ${itemId}:`, error);
        return { success: false, error: error.message };
    }
};

/**
 * Upload a file to Firebase Storage with progress tracking
 */
export const uploadFile = async (file, folderPath, onProgress) => {
    return new Promise((resolve) => {
        try {
            const cleanName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const fileRef = ref(storage, `${folderPath}/${Date.now()}_${cleanName}`);
            const uploadTask = uploadBytesResumable(fileRef, file);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (onProgress) onProgress(Math.round(progress));
                }, 
                (error) => {
                    console.error('Firebase Storage upload error:', error);
                    resolve({ success: false, error: error.message });
                }, 
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve({ success: true, url: downloadURL });
                }
            );
        } catch (err) {
            console.error('File upload exception:', err);
            resolve({ success: false, error: err.message });
        }
    });
};
