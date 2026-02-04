// Leads API Service
// In production, this would connect to a real backend API

const LEADS_KEY = 'buildlabs_leads'

// Get all leads from localStorage
export const getLeads = () => {
  try {
    const leads = localStorage.getItem(LEADS_KEY)
    return leads ? JSON.parse(leads) : []
  } catch (error) {
    console.error('Error getting leads:', error)
    return []
  }
}

// Save a new lead
export const saveLead = (leadData) => {
  try {
    const leads = getLeads()
    const newLead = {
      id: Date.now().toString(),
      ...leadData,
      createdAt: new Date().toISOString(),
      status: 'new' // new, contacted, converted, lost
    }
    leads.unshift(newLead) // Add to beginning
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
    return { success: true, lead: newLead }
  } catch (error) {
    console.error('Error saving lead:', error)
    return { success: false, error: error.message }
  }
}

// Update lead status
export const updateLeadStatus = (leadId, status) => {
  try {
    const leads = getLeads()
    const leadIndex = leads.findIndex(lead => lead.id === leadId)
    if (leadIndex === -1) {
      return { success: false, error: 'Lead not found' }
    }
    leads[leadIndex].status = status
    leads[leadIndex].updatedAt = new Date().toISOString()
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
    return { success: true, lead: leads[leadIndex] }
  } catch (error) {
    console.error('Error updating lead:', error)
    return { success: false, error: error.message }
  }
}

// Delete a lead
export const deleteLead = (leadId) => {
  try {
    const leads = getLeads()
    const filteredLeads = leads.filter(lead => lead.id !== leadId)
    localStorage.setItem(LEADS_KEY, JSON.stringify(filteredLeads))
    return { success: true }
  } catch (error) {
    console.error('Error deleting lead:', error)
    return { success: false, error: error.message }
  }
}

// Get lead statistics
export const getLeadStats = () => {
  const leads = getLeads()
  return {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    converted: leads.filter(l => l.status === 'converted').length,
    lost: leads.filter(l => l.status === 'lost').length
  }
}

