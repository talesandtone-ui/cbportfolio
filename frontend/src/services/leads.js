import { db } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';

export const getLeads = async () => {
    try {
        const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching leads:', error);
        return [];
    }
};

export const updateLeadStatus = async (leadId, status) => {
    try {
        await updateDoc(doc(db, 'leads', leadId), { status });
        return true;
    } catch (error) {
        console.error('Error updating lead status:', error);
        return false;
    }
};

export const deleteLead = async (leadId) => {
    try {
        await deleteDoc(doc(db, 'leads', leadId));
        return true;
    } catch (error) {
        console.error('Error deleting lead:', error);
        return false;
    }
};
