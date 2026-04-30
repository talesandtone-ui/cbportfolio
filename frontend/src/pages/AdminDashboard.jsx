import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Users, Mail, Phone, Building, Calendar, Filter, Search, CheckCircle, XCircle, Clock, TrendingUp, Trash2, Eye, Activity, ShoppingCart } from 'lucide-react'
import { firebaseAuthService as authService } from '../services/firebaseAuth'
import { getLeads, updateLeadStatus, deleteLead } from '../services/leads'
import { getAdminStats, getActivityLogs, getUsers, getOrders } from '../services/admin'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [leads, setLeads] = useState([])
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])
  const [logs, setLogs] = useState([])
  const [filteredLeads, setFilteredLeads] = useState([])
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0,
    leadStats: { new: 0, contacted: 0, converted: 0, lost: 0 }
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/admin/login')
      return
    }

    const fetchData = async () => {
      const adminStats = await getAdminStats();
      if (adminStats) setStats(adminStats);

      const recentLogs = await getActivityLogs();
      setLogs(recentLogs);

      const allUsers = await getUsers();
      setUsers(allUsers);

      const allOrders = await getOrders();
      setOrders(allOrders);

      loadLeads();
    }

    fetchData();
    const interval = setInterval(fetchData, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    filterLeads()
  }, [leads, searchTerm, statusFilter])

  const loadLeads = async () => {
    const allLeads = await getLeads()
    setLeads(allLeads)
    setFilteredLeads(allLeads)
  }

  const filterLeads = () => {
    let filtered = [...leads]
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter)
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        (lead.phone && lead.phone.includes(term))
      )
    }
    setFilteredLeads(filtered)
  }

  const handleStatusChange = async (leadId, newStatus) => {
    await updateLeadStatus(leadId, newStatus)
    loadLeads()
  }

  const handleDelete = async (leadId) => {
    if (window.confirm('Are you sure?')) {
      await deleteLead(leadId)
      loadLeads()
      setSelectedLead(null)
    }
  }

  const handleLogout = () => {
    authService.logout()
    navigate('/admin/login')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    })
  }

  // Render Functions
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-dark-900 p-6 rounded-xl shadow-sm border border-dark-700/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-dark-400">Total Revenue</p>
              <h3 className="text-2xl font-bold text-white mt-2">${stats.revenue}</h3>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-dark-900 p-6 rounded-xl shadow-sm border border-dark-700/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-dark-400">Active Users</p>
              <h3 className="text-2xl font-bold text-white mt-2">{stats.totalUsers}</h3>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        <div className="bg-dark-900 p-6 rounded-xl shadow-sm border border-dark-700/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-dark-400">Total Orders</p>
              <h3 className="text-2xl font-bold text-white mt-2">{stats.totalOrders}</h3>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
        <div className="bg-dark-900 p-6 rounded-xl shadow-sm border border-dark-700/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-dark-400">Total Leads</p>
              <h3 className="text-2xl font-bold text-white mt-2">{stats.totalLeads}</h3>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="bg-dark-900 rounded-xl shadow-sm border border-dark-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {logs.length === 0 ? (
            <p className="text-dark-500">No recent activity.</p>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3 hover:bg-dark-800/50 rounded-lg transition-colors">
                <Activity className="w-5 h-5 text-primary-500 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">
                    <span className="font-bold">{log.user?.name || 'Unknown'}</span> {log.action}
                  </p>
                  <p className="text-xs text-dark-500 mt-1">{formatDate(log.timestamp)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )

  const renderLeads = () => (
    <div className="bg-dark-900 rounded-xl shadow-sm border border-dark-700/50 overflow-hidden">
      <div className="p-4 border-b border-dark-700/50 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-400" />
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-dark-950 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 bg-dark-950 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-dark-500 uppercase bg-dark-950">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id || lead.id} className="border-b dark:border-dark-700 hover:bg-dark-800/50">
                <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                <td className="px-6 py-4 text-dark-400">{lead.email}</td>
                <td className="px-6 py-4">
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead._id || lead.id, e.target.value)}
                    className="text-xs rounded-full px-2 py-1 bg-dark-800 border-dark-700"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="lost">Lost</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-dark-400">{formatDate(lead.createdAt)}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <button onClick={() => setSelectedLead(lead)} className="text-primary-600 hover:text-primary-700"><Eye size={16} /></button>
                  <button onClick={() => handleDelete(lead._id || lead.id)} className="text-red-600 hover:text-red-700"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="bg-dark-900 rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold mb-4">Users Management</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-dark-950">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-b dark:border-dark-700">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>{user.role}</span></td>
                <td className="px-6 py-4">{formatDate(user.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-900 border-r border-dark-700/50 hidden md:block fixed h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold font-display text-gradient mb-8">Admin Panel</h1>
          <nav className="space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-primary-500/10 text-primary-600' : 'text-dark-600 hover:bg-dark-50'}`}>
              <TrendingUp size={20} />
              <span>Overview</span>
            </button>
            <button onClick={() => setActiveTab('leads')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-primary-500/10 text-primary-600' : 'text-dark-600 hover:bg-dark-50'}`}>
              <Mail size={20} />
              <span>Leads</span>
            </button>
            <button onClick={() => setActiveTab('users')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'users' ? 'bg-primary-500/10 text-primary-600' : 'text-dark-600 hover:bg-dark-50'}`}>
              <Users size={20} />
              <span>Users</span>
            </button>
            <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 mt-8">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar/Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-900 border-t border-dark-700/50 flex justify-around items-center p-3">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex flex-col items-center space-y-1 ${activeTab === 'overview' ? 'text-primary-500' : 'text-dark-500'}`}
        >
          <TrendingUp size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Overview</span>
        </button>
        <button
          onClick={() => setActiveTab('leads')}
          className={`flex flex-col items-center space-y-1 ${activeTab === 'leads' ? 'text-primary-500' : 'text-dark-500'}`}
        >
          <Mail size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Leads</span>
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex flex-col items-center space-y-1 ${activeTab === 'users' ? 'text-primary-500' : 'text-dark-500'}`}
        >
          <Users size={20} />
          <span className="text-[10px] font-medium uppercase tracking-wider">Users</span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 mb-20 md:mb-0">
        <header className="flex justify-between items-center mb-8">
          <div className="md:hidden">
            <h1 className="text-xl font-bold font-display text-gradient">Buildlabs</h1>
            <p className="text-xs text-dark-500 capitalize">{activeTab} Panel</p>
          </div>
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold font-display text-white capitalize">{activeTab} Panel</h1>
            <p className="text-sm text-dark-500">Welcome back, Admin</p>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-dark-400 hover:text-red-500 transition-colors flex items-center space-x-2 bg-dark-900 md:bg-transparent rounded-lg border border-dark-700 md:border-none"
          >
            <span className="hidden md:inline text-sm font-medium">Logout</span>
            <LogOut size={20} />
          </button>
        </header>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'leads' && renderLeads()}
        {activeTab === 'users' && renderUsers()}
      </main>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-900 rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-bold">Lead Details</h3>
              <button onClick={() => setSelectedLead(null)}><XCircle /></button>
            </div>
            <div className="space-y-4">
              <p><strong>Name:</strong> {selectedLead.name}</p>
              <p><strong>Email:</strong> {selectedLead.email}</p>
              <p><strong>Phone:</strong> {selectedLead.phone}</p>
              <p><strong>Message:</strong></p>
              <p className="bg-dark-50 p-3 rounded">{selectedLead.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
