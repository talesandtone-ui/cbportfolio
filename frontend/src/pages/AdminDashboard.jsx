import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Mail, Phone, Building, Calendar, Search, CheckCircle,
  XCircle, Clock, MessageSquare, Trash2, Eye, ChevronDown, Users,
  Inbox, ArrowRight, RefreshCw
} from 'lucide-react'
import { firebaseAuthService as authService } from '../services/firebaseAuth'
import { getLeads, updateLeadStatus, deleteLead } from '../services/leads'

const STATUS_CONFIG = {
  new:       { label: 'New',       color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  contacted: { label: 'Contacted', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30' },
  converted: { label: 'Converted', color: 'bg-[#8BCF1D]/15 text-[#8BCF1D] border-[#8BCF1D]/30' },
  lost:      { label: 'Lost',      color: 'bg-red-500/15 text-red-400 border-red-500/30' },
}

const AdminDashboard = () => {
  const [leads, setLeads] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const user = authService.getCurrentUser()
    if (!authService.isAuthenticated() || !user || user.role !== 'admin') {
      navigate('/admin/login')
      return
    }
    fetchLeads()
  }, [navigate])

  useEffect(() => {
    let result = [...leads]
    if (statusFilter !== 'all') result = result.filter(l => l.status === statusFilter)
    if (search) {
      const t = search.toLowerCase()
      result = result.filter(l =>
        (l.name || '').toLowerCase().includes(t) ||
        (l.email || '').toLowerCase().includes(t) ||
        (l.phone || '').includes(t) ||
        (l.company || '').toLowerCase().includes(t)
      )
    }
    setFiltered(result)
  }, [leads, search, statusFilter])

  const fetchLeads = async () => {
    setLoading(true)
    const all = await getLeads()
    setLeads(all)
    setLoading(false)
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchLeads()
    setRefreshing(false)
  }

  const handleStatus = async (id, status) => {
    await updateLeadStatus(id, status)
    setLeads(prev => prev.map(l => (l.id || l._id) === id ? { ...l, status } : l))
    if (selectedLead && (selectedLead.id || selectedLead._id) === id) {
      setSelectedLead(prev => ({ ...prev, status }))
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lead?')) return
    await deleteLead(id)
    setLeads(prev => prev.filter(l => (l.id || l._id) !== id))
    setSelectedLead(null)
  }

  const formatDate = (val) => {
    if (!val) return '—'
    const d = val?.toDate ? val.toDate() : new Date(val)
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  // Stats
  const total = leads.length
  const newCount = leads.filter(l => l.status === 'new').length
  const contactedCount = leads.filter(l => l.status === 'contacted').length
  const convertedCount = leads.filter(l => l.status === 'converted').length

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex">

      {/* ── Sidebar ── */}
      <aside className="w-60 bg-neutral-900 border-r border-neutral-800 hidden md:flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-neutral-800">
          <div className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Buildlabs" className="w-7 h-7" />
            <span className="font-black text-base tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>
              BUILD<span className="text-[#8BCF1D]">LABS</span>
            </span>
          </div>
          <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mt-1.5">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <div className="flex items-center space-x-3 px-3 py-3 rounded-xl bg-[#8BCF1D]/10 border border-[#8BCF1D]/20 text-[#8BCF1D]">
            <Inbox className="w-4 h-4" />
            <span className="text-sm font-bold">Enquiries</span>
            {newCount > 0 && (
              <span className="ml-auto bg-[#8BCF1D] text-black text-[10px] font-black px-2 py-0.5 rounded-full">{newCount}</span>
            )}
          </div>
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <button
            onClick={() => { authService.logout(); navigate('/admin/login') }}
            className="w-full flex items-center space-x-2 px-3 py-3 rounded-xl text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 md:ml-60 flex flex-col">

        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-[#0b0b0b]/90 backdrop-blur border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-white font-display">Enquiries</h1>
            <p className="text-xs text-neutral-500 mt-0.5">{total} total leads received</p>
          </div>
          <button
            onClick={handleRefresh}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl border border-neutral-700 text-neutral-300 hover:border-[#8BCF1D]/50 hover:text-[#8BCF1D] transition-all text-xs font-bold ${refreshing ? 'opacity-50' : ''}`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </header>

        <div className="p-6 flex-1">

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total', value: total, icon: Inbox, color: 'text-white', bg: 'bg-neutral-800/60' },
              { label: 'New', value: newCount, icon: Mail, color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { label: 'Contacted', value: contactedCount, icon: Phone, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
              { label: 'Converted', value: convertedCount, icon: CheckCircle, color: 'text-[#8BCF1D]', bg: 'bg-[#8BCF1D]/10' },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} border border-neutral-800 rounded-2xl p-4 flex items-center justify-between`}>
                <div>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">{s.label}</p>
                  <p className={`text-3xl font-black mt-1 ${s.color}`}>{s.value}</p>
                </div>
                <s.icon className={`w-6 h-6 ${s.color} opacity-50`} />
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email or phone..."
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#8BCF1D]/30 focus:border-[#8BCF1D]/40 transition-all"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8BCF1D]/30"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* Leads Cards */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-2 border-[#8BCF1D] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <Inbox className="w-10 h-10 text-neutral-700 mx-auto mb-3" />
              <p className="text-neutral-500 font-medium">No enquiries found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((lead) => {
                const id = lead.id || lead._id
                const st = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new
                return (
                  <div
                    key={id}
                    className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-4 sm:p-5 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Left Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="font-black text-white text-base">{lead.name || '—'}</h3>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${st.color}`}>
                            {st.label}
                          </span>
                          {lead.service && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
                              {lead.service}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-neutral-400">
                          <span className="flex items-center gap-1.5">
                            <Mail className="w-3 h-3 text-neutral-600" />
                            <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                          </span>
                          {lead.phone && (
                            <span className="flex items-center gap-1.5">
                              <Phone className="w-3 h-3 text-neutral-600" />
                              <a href={`tel:${lead.phone}`} className="hover:text-white transition-colors">{lead.phone}</a>
                            </span>
                          )}
                          {lead.company && (
                            <span className="flex items-center gap-1.5">
                              <Building className="w-3 h-3 text-neutral-600" />
                              {lead.company}
                            </span>
                          )}
                          {lead.budget && (
                            <span className="flex items-center gap-1.5">
                              <span className="text-neutral-600">₹</span>
                              {lead.budget}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-neutral-600" />
                            {formatDate(lead.createdAt)}
                          </span>
                        </div>

                        {lead.message && (
                          <p className="mt-3 text-xs text-neutral-500 leading-relaxed line-clamp-2 border-l-2 border-neutral-700 pl-3">
                            {lead.message}
                          </p>
                        )}
                      </div>

                      {/* Right Actions */}
                      <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatus(id, e.target.value)}
                          className="text-xs bg-neutral-800 border border-neutral-700 text-white rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8BCF1D]/40"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setSelectedLead(lead)}
                            title="View details"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-[#8BCF1D]/10 hover:text-[#8BCF1D] text-neutral-400 transition-all"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <a
                            href={`https://wa.me/${(lead.phone || '').replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-green-500/10 hover:text-green-400 text-neutral-400 transition-all"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleDelete(id)}
                            title="Delete"
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-red-500/10 hover:text-red-400 text-neutral-400 transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>

      {/* ── Lead Detail Modal ── */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedLead(null)}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-xl font-black text-white">{selectedLead.name}</h3>
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border mt-1 inline-block ${(STATUS_CONFIG[selectedLead.status] || STATUS_CONFIG.new).color}`}>
                  {(STATUS_CONFIG[selectedLead.status] || STATUS_CONFIG.new).label}
                </span>
              </div>
              <button onClick={() => setSelectedLead(null)} className="p-2 rounded-xl text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { label: 'Email', value: selectedLead.email, href: `mailto:${selectedLead.email}` },
                { label: 'Phone', value: selectedLead.phone, href: `tel:${selectedLead.phone}` },
                { label: 'Company', value: selectedLead.company },
                { label: 'Service', value: selectedLead.service },
                { label: 'Budget', value: selectedLead.budget },
                { label: 'Date', value: formatDate(selectedLead.createdAt) },
              ].filter(r => r.value).map((row, i) => (
                <div key={i} className="flex justify-between gap-4 py-2.5 border-b border-neutral-800 last:border-0">
                  <span className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] pt-0.5 flex-shrink-0">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="text-white font-medium text-right hover:text-[#8BCF1D] transition-colors text-xs break-all">{row.value}</a>
                  ) : (
                    <span className="text-white font-medium text-right text-xs">{row.value}</span>
                  )}
                </div>
              ))}

              {selectedLead.message && (
                <div className="pt-2">
                  <p className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] mb-2">Message</p>
                  <p className="text-neutral-300 text-xs leading-relaxed bg-neutral-800 rounded-xl p-4">{selectedLead.message}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href={`https://wa.me/${(selectedLead.phone || '').replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white text-xs font-black uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${selectedLead.email}`}
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#8BCF1D] hover:bg-[#9fd624] text-black text-xs font-black uppercase tracking-wider transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <button
                onClick={() => handleDelete(selectedLead.id || selectedLead._id)}
                className="py-3 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
