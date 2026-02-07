const API_URL = '/api/leads';
import { authService } from './auth';

export const getLeads = async () => {
  try {
    const token = authService.getToken();
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error getting leads:', error);
    return [];
  }
};

export const saveLead = async (leadData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });
    const data = await response.json();

    if (data.success) {
      return { success: true, lead: data.data };
    } else {
      return { success: false, error: data.error || 'Failed to save lead' };
    }
  } catch (error) {
    console.error('Error saving lead:', error);
    return { success: false, error: error.message };
  }
};

export const updateLeadStatus = async (leadId, status) => {
  try {
    const token = authService.getToken();
    const response = await fetch(`${API_URL}/${leadId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status }),
    });
    const data = await response.json();
    return data.success ? { success: true, lead: data.data } : { success: false, error: data.error };
  } catch (error) {
    console.error('Error updating lead:', error);
    return { success: false, error: error.message };
  }
};

export const deleteLead = async (leadId) => {
  try {
    const token = authService.getToken();
    const response = await fetch(`${API_URL}/${leadId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data.success ? { success: true } : { success: false, error: data.error };
  } catch (error) {
    console.error('Error deleting lead:', error);
    return { success: false, error: error.message };
  }
};

export const getLeadStats = async () => {
  try {
    // If backend has stats endpoint, use it. Otherwise calculate from getLeads (less efficient but works for MVP)
    // Actually we implemented /api/analytics
    const token = authService.getToken();
    const response = await fetch('/api/analytics', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();

    if (data.success) {
      // Transform backend stats format to frontend expected format if needed
      // Frontend expects: { total, new, contacted, converted, lost }
      // Backend returns: { totalLeads, dailyLeads, ..., leadsByStatus: [{_id, count}] }

      const stats = {
        total: data.data.totalLeads,
        new: 0,
        contacted: 0,
        converted: 0,
        lost: 0
      };

      data.data.leadsByStatus.forEach(item => {
        const status = item._id.toLowerCase();
        if (stats.hasOwnProperty(status)) {
          stats[status] = item.count;
        }
      });

      return stats;
    }
    return { total: 0, new: 0, contacted: 0, converted: 0, lost: 0 };
  } catch (error) {
    console.error('Error getting stats:', error);
    return { total: 0, new: 0, contacted: 0, converted: 0, lost: 0 };
  }
};
