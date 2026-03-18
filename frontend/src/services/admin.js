import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getAdminStats = async () => {
    try {
        const leadsSnap = await getDocs(collection(db, 'leads'));
        const usersSnap = await getDocs(collection(db, 'users'));
        return {
            totalLeads: leadsSnap.size,
            totalUsers: usersSnap.size,
            totalOrders: 0,
            revenue: 0,
        };
    } catch (error) {
        console.error('Error fetching admin stats:', error);
        return { totalLeads: 0, totalUsers: 0, totalOrders: 0, revenue: 0 };
    }
};

export const getActivityLogs = async () => {
    return []; // Mock logs for now
};

export const getUsers = async () => {
    try {
        const usersSnap = await getDocs(collection(db, 'users'));
        return usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const getOrders = async () => {
    return []; // Mock orders for now
};
