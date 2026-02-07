import { authService } from './auth';

const API_URL = '/api/admin';

export const getAdminStats = async () => {
    try {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/stats`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.success ? data.data : null;
    } catch (error) {
        console.error('Error fetching admin stats:', error);
        return null;
    }
};

export const getActivityLogs = async () => {
    try {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/activity`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error('Error fetching activity logs:', error);
        return [];
    }
};

export const getUsers = async () => {
    try {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const getOrders = async () => {
    try {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/orders`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.success ? data.data : [];
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
};
