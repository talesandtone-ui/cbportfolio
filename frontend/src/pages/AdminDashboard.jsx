import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Users, Mail, Phone, Building, Calendar, Filter, Search, CheckCircle, XCircle, Clock, TrendingUp, Trash2, Eye } from 'lucide-react'
import { authService } from '../services/auth'
import { getLeads, updateLeadStatus, deleteLead, getLeadStats } from '../services/leads'
import { highlightElement } from '../utils/animations'

const AdminDashboard = () => {
  const [leads, setLeads] = useState([])
  const [filteredLeads, setFilteredLeads] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    converted: 0,
    lost: 0
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check authentication
    if (!authService.isAuthenticated()) {
      navigate('/admin/login')
      return
    }

    loadLeads()
  }, [navigate])

  useEffect(() => {
    filterLeads()
  }, [leads, searchTerm, statusFilter])

  const loadLeads = () => {
    const allLeads = getLeads()
    setLeads(allLeads)
    setFilteredLeads(allLeads)
    setStats(getLeadStats())
    
    // Highlight new leads
    setTimeout(() => {
      const newLeads = allLeads.filter(l => l.status === 'new')
      newLeads.forEach((lead, index) => {
        setTimeout(() => {
          const row = document.querySelector(`tr[data-lead-id="${lead.id}"]`)
          if (row) highlightElement(row)
        }, index * 100)
      })
    }, 500)
  }

  const filterLeads = () => {
    let filtered = [...leads]

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        (lead.phone && lead.phone.includes(term)) ||
        (lead.company && lead.company.toLowerCase().includes(term)) ||
        (lead.service && lead.service.toLowerCase().includes(term))
      )
    }

    setFilteredLeads(filtered)
  }

  const handleStatusChange = async (leadId, newStatus) => {
    const result = await updateLeadStatus(leadId, newStatus)
    if (result.success) {
      loadLeads()
    }
  }

  const handleDelete = async (leadId) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const result = await deleteLead(leadId)
      if (result.success) {
        loadLeads()
        if (selectedLead?.id === leadId) {
          setSelectedLead(null)
        }
      }
    }
  }

  const handleLogout = () => {
    authService.logout()
    navigate('/admin/login')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'converted':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'lost':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-dark-100 text-dark-800 dark:bg-dark-700 dark:text-dark-300'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-900">
      {/* Header */}
      <header className="bg-white dark:bg-dark-800 shadow-sm border-b border-dark-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold font-display text-dark-900 dark:text-dark-100">
                Admin Dashboard
              </h1>
              <p className="text-sm text-dark-600 dark:text-dark-400 mt-1">
                Manage leads and inquiries
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-600 dark:text-dark-400">Total Leads</p>
                <p className="text-2xl font-bold text-dark-900 dark:text-dark-100 mt-1">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-600 dark:text-dark-400">New</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{stats.new}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-600 dark:text-dark-400">Contacted</p>
                <p className="text-2xl font-bold text-yellow-600 mt-1">{stats.contacted}</p>
              </div>
              <Mail className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-600 dark:text-dark-400">Converted</p>
                <p className="text-2xl font-bold text-green-600 mt-1">{stats.converted}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-dark-600 dark:text-dark-400">Lost</p>
                <p className="text-2xl font-bold text-red-600 mt-1">{stats.lost}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-sm mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-900 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-900 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="converted">Converted</option>
                <option value="lost">Lost</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-dark-200 dark:divide-dark-700">
              <thead className="bg-dark-50 dark:bg-dark-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Lead
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-dark-800 divide-y divide-dark-200 dark:divide-dark-700">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <Users className="w-12 h-12 text-dark-400 mx-auto mb-4" />
                      <p className="text-dark-600 dark:text-dark-400">No leads found</p>
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead, index) => (
                    <tr 
                      key={lead.id}
                      data-lead-id={lead.id}
                      className={`table-row hover:bg-dark-50 dark:hover:bg-dark-900`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-dark-900 dark:text-dark-100">
                              {lead.name}
                            </div>
                            {lead.company && (
                              <div className="text-sm text-dark-500 dark:text-dark-400 flex items-center mt-1">
                                <Building className="w-3 h-3 mr-1" />
                                {lead.company}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-dark-900 dark:text-dark-100 flex items-center mb-1">
                          <Mail className="w-4 h-4 mr-2 text-dark-400" />
                          {lead.email}
                        </div>
                        {lead.phone && (
                          <div className="text-sm text-dark-500 dark:text-dark-400 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {lead.phone}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-dark-900 dark:text-dark-100">
                          {lead.service || 'Not specified'}
                        </div>
                        {lead.budget && (
                          <div className="text-sm text-dark-500 dark:text-dark-400">
                            Budget: {lead.budget}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-xs font-medium px-3 py-1 rounded-full border-0 ${getStatusColor(lead.status)} focus:ring-2 focus:ring-primary-500`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-500 dark:text-dark-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(lead.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold font-display text-dark-900 dark:text-dark-100">
                  Lead Details
                </h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-dark-400 hover:text-dark-600 dark:hover:text-dark-300"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Name</label>
                  <p className="text-lg text-dark-900 dark:text-dark-100">{selectedLead.name}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Email</label>
                    <p className="text-dark-900 dark:text-dark-100">{selectedLead.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Phone</label>
                    <p className="text-dark-900 dark:text-dark-100">{selectedLead.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Company</label>
                    <p className="text-dark-900 dark:text-dark-100">{selectedLead.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Service</label>
                    <p className="text-dark-900 dark:text-dark-100">{selectedLead.service || 'Not specified'}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Budget</label>
                  <p className="text-dark-900 dark:text-dark-100">{selectedLead.budget || 'Not specified'}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Message</label>
                  <p className="text-dark-900 dark:text-dark-100 whitespace-pre-wrap bg-dark-50 dark:bg-dark-900 p-4 rounded-lg">
                    {selectedLead.message}
                  </p>
                </div>

                <div className="pt-4 border-t border-dark-200 dark:border-dark-700">
                  <label className="text-sm font-medium text-dark-600 dark:text-dark-400">Submitted</label>
                  <p className="text-dark-900 dark:text-dark-100">{formatDate(selectedLead.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard

