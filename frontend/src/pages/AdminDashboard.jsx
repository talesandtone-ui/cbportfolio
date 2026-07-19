import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Mail, Phone, Building, Calendar, Search, CheckCircle,
  XCircle, Clock, MessageSquare, Trash2, Eye, ChevronDown, Users,
  Inbox, ArrowRight, RefreshCw, Briefcase, Plus, Edit, Star, Video, Image, Award, Play, FileText, Upload
} from 'lucide-react'
import { firebaseAuthService as authService } from '../services/firebaseAuth'
import { getLeads, updateLeadStatus, deleteLead } from '../services/leads'
import { getCollection, addContent, updateContent, deleteContent, uploadFile } from '../services/content'

const STATUS_CONFIG = {
  new:       { label: 'New',       color: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  contacted: { label: 'Contacted', color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30' },
  converted: { label: 'Converted', color: 'bg-[#8BCF1D]/15 text-[#8BCF1D] border-[#8BCF1D]/30' },
  lost:      { label: 'Lost',      color: 'bg-red-500/15 text-red-400 border-red-500/30' },
}

// Seeding Default Contents Config
const defaultPortfolioItems = [
  {
    title: 'TIMUS Luggage Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    video: '/videos/056dff485242441776c90cd1ba524476.mp4',
    metric: '1.5M+ Views',
    caption: 'you five things.',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },
  {
    title: 'USHA B2B Thought Leadership',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    video: '/videos/f08ad582b24cf050cee403954697769d_720w.mp4',
    metric: '1.2M+ Reach',
    caption: 'Wo bhi aapke LOCATION PER',
    aspect: 'aspect-[9/16]',
    icon: 'FileText'
  },
  {
    title: 'Grace Realty Buyer Education',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop',
    video: '/videos/prpoerty.mp4',
    metric: '800K+ Views',
    caption: 'Tourism growth',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },
  {
    title: 'Eunora Local Patient Reels',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
    video: '/videos/2aeb8ab2e973f0366ce0e03e1f153d1a_720w.mp4',
    metric: '400K+ Views',
    caption: 'What Reduces',
    aspect: 'aspect-[9/16]',
    icon: 'Play'
  },
  {
    title: 'Eunora Office Stretch Routine',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop',
    video: '/videos/gym edit 2.mp4',
    metric: 'Educational Short',
    caption: "Relax / it's not",
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    title: 'Grace Realty Micro-Market Guide',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    video: '/videos/property edits.mp4',
    metric: 'Cinematic Vlog',
    caption: 'Nashik me Bahut / bada Development !',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    title: 'Timus Cinematic Travel Film',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',
    video: '/videos/edits 1.mp4',
    metric: 'High-Hook Edit',
    caption: 'Winter Snow',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    title: 'B2B Enterprise Software Showcase',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    video: '/videos/editing.mp4',
    metric: 'SaaS Case Study',
    caption: 'and',
    aspect: 'aspect-[9/16]',
    icon: 'Video'
  },
  {
    title: 'Timus Logo & Ribbon Redesign',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
    video: '/videos/brandingg.mp4',
    metric: 'Visual Identity',
    caption: 'Rebranding Timus',
    aspect: 'aspect-[16/10]',
    icon: 'Award'
  },
  {
    title: 'Eunora Clinical Style Guide',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop',
    video: '/videos/brandingg.mp4',
    metric: 'Corporate Branding',
    caption: 'Style Guides',
    aspect: 'aspect-[4/3]',
    icon: 'Award'
  },
  {
    title: 'Grace Realty Landing Page',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
    video: '/videos/motion graphics.mp4',
    metric: 'UI/UX Design',
    caption: 'Landing Page',
    aspect: 'aspect-[16/9]',
    icon: 'Image'
  },
  {
    title: 'Buildlabs Marketing Graphic Kit',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop',
    video: '/videos/motion graphics.mp4',
    metric: 'Social Feed Kit',
    caption: 'Graphic Kit',
    aspect: 'aspect-[4/3]',
    icon: 'Image'
  }
]

const defaultServices = [
  {
    num: '01',
    title: 'SOCIAL MEDIA MARKETING',
    description: "Your audience is on Instagram, LinkedIn, YouTube and TikTok right now. They're watching someone. It should be you.",
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    video: '/videos/social media marketiing.mp4',
    features: [
      'CONTENT CALENDARS & STRATEGY',
      'SCALABLE CONTENT SYSTEMS',
      'COMMUNITY GROWTH',
      'PLATFORM CAMPAIGNS'
    ]
  },
  {
    num: '02',
    title: 'VIDEO PRODUCTION',
    description: 'Cinematic, hook-focused short-form & long-form video. We craft visual stories that keep viewers hooked from the first second and build deep trust.',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop',
    video: '/videos/video productioon.mp4',
    features: [
      'SCRIPTWRITING & HOOK IDEATION',
      'DIRECTING & SHOOTING GUIDANCE',
      'CINEMATIC VIDEO EDITING',
      'FORMAT OPTIMIZATION'
    ]
  },
  {
    num: '03',
    title: 'BRANDING & DESIGN',
    description: 'Memorable brand guidelines, high-conversion visual design. We establish a cohesive identity that sets you apart and converts visitors into loyal fans.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop',
    video: '/videos/brandingg.mp4',
    features: [
      'BRAND IDENTITY & COLOR SCHEMES',
      'HIGH-CONVERSION THUMBNAILS',
      'EXECUTIVE PITCH DECKS',
      'LANDING PAGE WIREFRAMING'
    ]
  },
  {
    num: '04',
    title: 'WEBSITE',
    description: 'Custom digital products, speed optimization, and search rankings. We build clean, rapid-load websites optimized for maximum business conversions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    video: '/videos/website development.mp4',
    features: [
      'MOBILE-FIRST WEBSITE DEVELOPMENT',
      'CRM & SCHEDULING AUTOMATIONS',
      'LOCALIZED & TECHNICAL SEO',
      'PERFORMANCE & LOADING OPTIMIZATION'
    ]
  },
  {
    num: '05',
    title: 'SOFTWARE',
    description: 'Custom enterprise software solutions, scalable databases, and automated workflows. We build robust systems that streamline operations and drive efficiency.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    video: '/videos/software development.mp4',
    features: [
      'CUSTOM ENTERPRISE SOFTWARE',
      'DATABASE ARCHITECTURE & DESIGN',
      'API INTEGRATIONS & AUTOMATIONS',
      'SCALABLE BACKEND SYSTEMS'
    ]
  }
]

const defaultTestimonials = [
  {
    name: 'SUMIT TIWARI',
    role: 'Founder, Timus, Pune',
    text: 'Buildlabs ne amchi brand ekdam next level la neli! Content baghitla ki trust lagar yeto. Solid team aahe.',
    dotColor: '#ff7a00'
  },
  {
    name: 'SUNAYA MADAN',
    role: 'Chocoyum, Nagpur',
    text: 'Creative touch khup chan hota. Aaplya brand la ek vegalich identity milali. Digital growth saathi best choice!',
    dotColor: '#ff7a00'
  },
  {
    name: 'PRIYA DESHPANDE',
    role: 'Deshpande Foods, Pune',
    text: 'Khup Chan kaam kela! Video content pahun customers khush zhale. Puneri business la ha team must aahe.',
    dotColor: '#ff7a00'
  },
  {
    name: 'RAHUL JAIN',
    role: 'Grace Realty, Mumbai',
    text: 'Professional team hai yaar, inke saath kaam karke maza aaya. Results bhi dikhaye aur brand value bhi badhi. Recommend karunga!',
    dotColor: '#2b7fff'
  },
  {
    name: 'ARJUN MEHTA',
    role: 'ArcoBuild Infra, Delhi',
    text: 'Bhai seedha baat karo, inki content strategy ne humari enquiries double kar di. Delhi mein bhi naam ho gaya!',
    dotColor: '#2b7fff'
  },
  {
    name: 'KARAN MALHOTRA',
    role: 'FitZone Gym, Bangalore',
    text: 'Yaar social media pe itna achha response pehle kabhi nahi mila. Buildlabs ka kaam dekh ke competitors bhi pooch rahe hain!',
    dotColor: '#2b7fff'
  }
]

const AdminDashboard = () => {
  // Tabs: enquiries, portfolio, services, testimonials
  const [activeTab, setActiveTab] = useState('enquiries')
  
  // Data States
  const [leads, setLeads] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [services, setServices] = useState([])
  const [reviews, setReviews] = useState([])
  const [filteredLeads, setFilteredLeads] = useState([])
  
  // Search & Filters
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedLead, setSelectedLead] = useState(null)
  
  // UI States
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)
  const [editItem, setEditItem] = useState(null)
  
  // File Upload State
  const [uploadingField, setUploadingField] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  
  // Form State
  const [formFields, setFormFields] = useState({})
  
  const navigate = useNavigate()
  const [dbSeeded, setDbSeeded] = useState(false)

  const formatDate = (val) => {
    if (!val) return '—'
    const d = val?.toDate ? val.toDate() : new Date(val)
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  const loadTabContent = async (tab = activeTab) => {
    setLoading(true)
    try {
      if (tab === 'enquiries') {
        const all = await getLeads()
        setLeads(all)
      } else if (tab === 'portfolio') {
        const all = await getCollection('portfolio')
        setPortfolio(all)
      } else if (tab === 'services') {
        const all = await getCollection('services', 'num', 'asc')
        setServices(all)
      } else if (tab === 'testimonials') {
        const all = await getCollection('testimonials')
        setReviews(all)
      }
    } catch (err) {
      console.error('Error loading tab content:', err)
    }
    setLoading(false)
  }

  const checkAndSeedDatabase = async () => {
    try {
      const config = await getCollection('system_config')
      const isSeeded = config && config.length > 0 && config[0].seeded
      
      if (!isSeeded) {
        // Seed Portfolio if empty
        const pf = await getCollection('portfolio')
        if (pf.length === 0) {
          for (const item of defaultPortfolioItems) {
            await addContent('portfolio', item)
          }
        }
        
        // Seed Services if empty
        const srv = await getCollection('services')
        if (srv.length === 0) {
          for (const item of defaultServices) {
            await addContent('services', item)
          }
        }

        // Seed Testimonials if empty
        const tst = await getCollection('testimonials')
        if (tst.length === 0) {
          for (const item of defaultTestimonials) {
            await addContent('testimonials', item)
          }
        }

        // Save seed config so we never auto-seed again
        await addContent('system_config', { seeded: true })
      }
    } catch (err) {
      console.error('Error auto-seeding database:', err)
    }
  }

  // 1. One-time Initialization on Mount
  useEffect(() => {
    const user = authService.getCurrentUser()
    if (!authService.isAuthenticated() || !user || user.role !== 'admin') {
      navigate('/admin/login')
      return
    }
    
    const initDashboard = async () => {
      setLoading(true)
      await checkAndSeedDatabase()
      setDbSeeded(true)
      await loadTabContent(activeTab)
      setLoading(false)
    }
    initDashboard()
  }, [navigate])

  // 2. Tab Change Loading (Instant switch)
  useEffect(() => {
    if (!dbSeeded) return // Wait for checkAndSeedDatabase to finish
    
    const changeTab = async () => {
      setLoading(true)
      await loadTabContent(activeTab)
      setLoading(false)
    }
    changeTab()
  }, [activeTab, dbSeeded])

  // Leads Filter Effect
  useEffect(() => {
    let result = [...leads]
    if (statusFilter !== 'all') result = result.filter(l => l.status === statusFilter)
    if (search) {
      const t = search.toLowerCase()
      result = result.filter(l =>
        String(l.name || '').toLowerCase().includes(t) ||
        String(l.email || '').toLowerCase().includes(t) ||
        String(l.phone || '').includes(t) ||
        String(l.company || '').toLowerCase().includes(t)
      )
    }
    setFilteredLeads(result)
  }, [leads, search, statusFilter])

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadTabContent(activeTab)
    setRefreshing(false)
  }

  // Leads Actions
  const handleLeadStatus = async (id, status) => {
    await updateLeadStatus(id, status)
    setLeads(prev => prev.map(l => (l.id || l._id) === id ? { ...l, status } : l))
    if (selectedLead && (selectedLead.id || selectedLead._id) === id) {
      setSelectedLead(prev => ({ ...prev, status }))
    }
  }

  const handleLeadDelete = async (id) => {
    if (!window.confirm('Delete this lead?')) return
    await deleteLead(id)
    setLeads(prev => prev.filter(l => (l.id || l._id) !== id))
    setSelectedLead(null)
  }

  // CMS CRUD Actions
  const handleOpenAdd = () => {
    setEditItem(null)
    if (activeTab === 'portfolio') {
      setFormFields({ title: '', category: 'Social Media', image: '', video: '', metric: '', caption: '', aspect: 'aspect-[9/16]', icon: 'Play' })
    } else if (activeTab === 'services') {
      setFormFields({ num: '', title: '', description: '', image: '', video: '', features: '' })
    } else if (activeTab === 'testimonials') {
      setFormFields({ name: '', role: '', text: '', dotColor: '#ff7a00' })
    }
    setShowFormModal(true)
  }

  const handleOpenEdit = (item) => {
    setEditItem(item)
    if (activeTab === 'portfolio') {
      setFormFields({ ...item })
    } else if (activeTab === 'services') {
      setFormFields({ ...item, features: Array.isArray(item.features) ? item.features.join('\n') : item.features })
    } else if (activeTab === 'testimonials') {
      setFormFields({ ...item })
    }
    setShowFormModal(true)
  }

  const handleCmsDelete = async (itemId) => {
    if (!window.confirm('Delete this item? This action is permanent.')) return
    const colName = activeTab === 'testimonials' ? 'testimonials' : activeTab
    const res = await deleteContent(colName, itemId)
    if (res.success) {
      loadTabContent(activeTab)
    } else {
      alert('Delete failed: ' + res.error)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const colName = activeTab === 'testimonials' ? 'testimonials' : activeTab
    
    // Prepare Data
    let data = { ...formFields }
    if (activeTab === 'services') {
      // Split features textarea into an array
      data.features = formFields.features ? formFields.features.split('\n').map(f => f.trim()).filter(Boolean) : []
    }

    let res
    if (editItem) {
      res = await updateContent(colName, editItem.id, data)
    } else {
      res = await addContent(colName, data)
    }

    if (res.success) {
      setShowFormModal(false)
      loadTabContent(activeTab)
    } else {
      alert('Error saving content: ' + res.error)
    }
  }

  // Upload Logic
  const handleUploadClick = async (e, fieldName) => {
    const file = e.target.files[0]
    if (!file) return
    
    setUploadingField(fieldName)
    setUploadProgress(0)

    const folder = fieldName === 'video' ? 'videos' : 'images'
    const result = await uploadFile(file, folder, (progress) => {
      setUploadProgress(progress)
    })

    if (result.success) {
      setFormFields(prev => ({ ...prev, [fieldName]: result.url }))
    } else {
      alert('Upload failed: ' + result.error)
    }
    setUploadingField(null)
    setUploadProgress(0)
  }

  // Seeding/Import Default Content Logic
  const handleImportDefaults = async () => {
    if (!window.confirm(`Import default items for ${activeTab}? This will load the pre-existing content into the database so you can edit it.`)) return
    setLoading(true)
    try {
      if (activeTab === 'portfolio') {
        for (const item of defaultPortfolioItems) {
          await addContent('portfolio', item)
        }
      } else if (activeTab === 'services') {
        for (const item of defaultServices) {
          await addContent('services', item)
        }
      } else if (activeTab === 'testimonials') {
        for (const item of defaultTestimonials) {
          await addContent('testimonials', item)
        }
      }
      alert('Default content successfully imported to database!')
      loadTabContent(activeTab)
    } catch (err) {
      alert('Import failed: ' + err.message)
    }
    setLoading(false)
  }

  // Sidebar Menu Items Config
  const menuItems = [
    { id: 'enquiries', label: 'Enquiries', icon: Inbox, count: leads.filter(l => l.status === 'new').length },
    { id: 'portfolio', label: 'Portfolio Items', icon: Video },
    { id: 'services', label: 'Services List', icon: Briefcase },
    { id: 'testimonials', label: 'Reviews / Testimonials', icon: Star },
  ]

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
          <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mt-1.5 font-sans">CMS Manager</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSearch(''); setStatusFilter('all'); }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl border transition-all text-left ${
                  active
                    ? 'bg-[#8BCF1D]/10 border-[#8BCF1D]/20 text-[#8BCF1D] font-bold'
                    : 'border-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
                {item.count > 0 && (
                  <span className="ml-auto bg-[#8BCF1D] text-black text-[10px] font-black px-2 py-0.5 rounded-full">{item.count}</span>
                )}
              </button>
            )
          })}
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

      {/* ── Main Panel ── */}
      <main className="flex-1 md:ml-60 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-10 bg-[#0b0b0b]/90 backdrop-blur border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-white font-display capitalize">
              {activeTab === 'enquiries' ? 'Enquiries Manager' : `${activeTab} database`}
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              {activeTab === 'enquiries' && `${leads.length} leads received`}
              {activeTab === 'portfolio' && `${portfolio.length} portfolio items`}
              {activeTab === 'services' && `${services.length} services configured`}
              {activeTab === 'testimonials' && `${reviews.length} reviews live`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {activeTab !== 'enquiries' && (
              <button
                onClick={handleOpenAdd}
                className="flex items-center space-x-2 px-4 py-2 bg-[#8BCF1D] hover:bg-[#9fd624] text-black rounded-xl text-xs font-black uppercase tracking-wider transition-all"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Add Item</span>
              </button>
            )}

            <button
              onClick={handleRefresh}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl border border-neutral-700 text-neutral-300 hover:border-[#8BCF1D]/50 hover:text-[#8BCF1D] transition-all text-xs font-bold ${refreshing ? 'opacity-50' : ''}`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-6 flex-1">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <div className="w-8 h-8 border-2 border-[#8BCF1D] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* ── ENQUIRIES TAB ── */}
              {activeTab === 'enquiries' && (
                <div>
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Total', value: leads.length, icon: Inbox, color: 'text-white', bg: 'bg-neutral-800/60' },
                      { label: 'New', value: leads.filter(l => l.status === 'new').length, icon: Mail, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                      { label: 'Contacted', value: leads.filter(l => l.status === 'contacted').length, icon: Phone, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
                      { label: 'Converted', value: leads.filter(l => l.status === 'converted').length, icon: CheckCircle, color: 'text-[#8BCF1D]', bg: 'bg-[#8BCF1D]/10' },
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
                        className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none"
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

                  {filteredLeads.length === 0 ? (
                    <div className="text-center py-20 bg-neutral-900/20 border border-neutral-800 rounded-2xl">
                      <Inbox className="w-10 h-10 text-neutral-700 mx-auto mb-3" />
                      <p className="text-neutral-500 font-medium">No enquiries found</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredLeads.map((lead) => {
                        const id = lead.id || lead._id
                        const st = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new
                        return (
                          <div key={id} className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-4 sm:p-5 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
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
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3 text-neutral-600" />
                                    {formatDate(lead.createdAt)}
                                  </span>
                                </div>
                              </div>
                              <div className="flex sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                                <select
                                  value={lead.status}
                                  onChange={(e) => handleLeadStatus(id, e.target.value)}
                                  className="text-xs bg-neutral-800 border border-neutral-700 text-white rounded-lg px-2 py-1.5 focus:outline-none"
                                >
                                  <option value="new">New</option>
                                  <option value="contacted">Contacted</option>
                                  <option value="converted">Converted</option>
                                  <option value="lost">Lost</option>
                                </select>
                                <div className="flex items-center gap-1">
                                  <button onClick={() => setSelectedLead(lead)} className="p-2 rounded-lg bg-neutral-800 hover:bg-[#8BCF1D]/10 hover:text-[#8BCF1D] text-neutral-400 transition-all">
                                    <Eye className="w-3.5 h-3.5" />
                                  </button>
                                  <a href={`https://wa.me/${String(lead.phone || '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-neutral-800 hover:bg-green-500/10 hover:text-green-400 text-neutral-400 transition-all">
                                    <MessageSquare className="w-3.5 h-3.5" />
                                  </a>
                                  <button onClick={() => handleLeadDelete(id)} className="p-2 rounded-lg bg-neutral-800 hover:bg-red-500/10 hover:text-red-400 text-neutral-400 transition-all">
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
              )}

              {/* ── PORTFOLIO TAB ── */}
              {activeTab === 'portfolio' && (
                <div>
                  {portfolio.length === 0 && (
                    <div className="text-center py-16 bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl mb-6">
                      <Inbox className="w-10 h-10 text-neutral-750 mx-auto mb-3" />
                      <p className="text-neutral-500 text-sm mb-4">No portfolio items inside the database yet.</p>
                      <button onClick={handleImportDefaults} className="px-5 py-2.5 bg-[#8BCF1D]/10 border border-[#8BCF1D]/30 hover:bg-[#8BCF1D]/20 text-[#8BCF1D] rounded-xl text-xs font-black uppercase tracking-wider transition-all">
                        Import Default Portfolio Items
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map((item) => (
                      <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between">
                        <div className="aspect-video w-full bg-neutral-950 relative">
                          {item.video ? (
                            <video src={item.video} className="w-full h-full object-cover" muted loop playsInline autoPlay />
                          ) : (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          )}
                          <span className="absolute top-2 left-2 bg-[#8BCF1D] text-black text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                            <p className="text-xs text-neutral-400 mb-1">Metric: {item.metric}</p>
                            <p className="text-xs text-neutral-500 italic">Caption: "{item.caption}"</p>
                          </div>
                          <div className="flex gap-2 mt-4 pt-4 border-t border-neutral-800/60">
                            <button onClick={() => handleOpenEdit(item)} className="flex-1 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all">
                              <Edit className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                            <button onClick={() => handleCmsDelete(item.id)} className="py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs transition-all">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── SERVICES TAB ── */}
              {activeTab === 'services' && (
                <div>
                  {services.length === 0 && (
                    <div className="text-center py-16 bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl mb-6">
                      <Inbox className="w-10 h-10 text-neutral-750 mx-auto mb-3" />
                      <p className="text-neutral-500 text-sm mb-4">No services inside the database yet.</p>
                      <button onClick={handleImportDefaults} className="px-5 py-2.5 bg-[#8BCF1D]/10 border border-[#8BCF1D]/30 hover:bg-[#8BCF1D]/20 text-[#8BCF1D] rounded-xl text-xs font-black uppercase tracking-wider transition-all">
                        Import Default Services List
                      </button>
                    </div>
                  )}
                  <div className="space-y-4">
                    {services.map((item) => (
                      <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-start justify-between">
                        <div className="flex-shrink-0 w-28 aspect-video rounded-xl overflow-hidden bg-neutral-950">
                          {item.video ? (
                            <video src={item.video} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                          ) : (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-black text-white text-lg flex items-center gap-2">
                            <span className="text-[#8BCF1D] font-mono text-sm">({item.num})</span>
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-400 mt-2 leading-relaxed max-w-2xl">{item.description}</p>
                          {item.features && item.features.length > 0 && (
                            <div className="flex gap-2 flex-wrap mt-3">
                              {item.features.map((f, fi) => (
                                <span key={fi} className="text-[9px] font-bold uppercase bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded border border-neutral-700">
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 self-stretch md:self-auto justify-end mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-neutral-800">
                          <button onClick={() => handleOpenEdit(item)} className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all">
                            <Edit className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>
                          <button onClick={() => handleCmsDelete(item.id)} className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── REVIEWS/TESTIMONIALS TAB ── */}
              {activeTab === 'testimonials' && (
                <div>
                  {reviews.length === 0 && (
                    <div className="text-center py-16 bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl mb-6">
                      <Inbox className="w-10 h-10 text-neutral-755 mx-auto mb-3" />
                      <p className="text-neutral-500 text-sm mb-4">No reviews inside the database yet.</p>
                      <button onClick={handleImportDefaults} className="px-5 py-2.5 bg-[#8BCF1D]/10 border border-[#8BCF1D]/30 hover:bg-[#8BCF1D]/20 text-[#8BCF1D] rounded-xl text-xs font-black uppercase tracking-wider transition-all">
                        Import Default Client Reviews
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reviews.map((item) => (
                      <div key={item.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between">
                        <div>
                          <p className="text-neutral-300 text-sm leading-relaxed mb-4 italic">"{item.text}"</p>
                          <div className="flex items-center gap-2">
                            <div>
                              <h4 className="font-bold text-white text-xs tracking-wider uppercase">{item.name}</h4>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[10px] text-neutral-500">{item.role}</span>
                                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: item.dotColor || '#C5FF2E' }}></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-5 pt-4 border-t border-neutral-800/60">
                          <button onClick={() => handleOpenEdit(item)} className="flex-1 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all">
                            <Edit className="w-3 h-3" />
                            <span>Edit</span>
                          </button>
                          <button onClick={() => handleCmsDelete(item.id)} className="py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs transition-all">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* ── Lead Detail Modal (Leads Only) ── */}
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
                href={`https://wa.me/${String(selectedLead.phone || '').replace(/\D/g, '')}`}
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
                onClick={() => handleLeadDelete(selectedLead.id || selectedLead._id)}
                className="py-3 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CMS Add / Edit Form Modal ── */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowFormModal(false)}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5 border-b border-neutral-800 pb-3 flex-shrink-0">
              <h2 className="text-lg font-black text-white font-display">
                {editItem ? 'Edit Item' : 'Add New Item'} ({activeTab})
              </h2>
              <button onClick={() => setShowFormModal(false)} className="p-2 rounded-xl text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 overflow-y-auto flex-1 pr-1">
              {/* ── PORTFOLIO FIELDS ── */}
              {activeTab === 'portfolio' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Title</label>
                    <input type="text" required value={formFields.title || ''} onChange={(e) => setFormFields({ ...formFields, title: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. TIMUS Luggage Campaign" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Category</label>
                    <select value={formFields.category || 'Social Media'} onChange={(e) => setFormFields({ ...formFields, category: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none">
                      <option value="Social Media">Social Media</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Design">Design</option>
                      <option value="Branding">Branding</option>
                    </select>
                  </div>
                  
                  {/* File Uploads for Image Cover */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Image Cover File</label>
                    <div className="flex gap-3 items-center">
                      <label className="flex-1 flex items-center justify-between px-3 py-2.5 bg-neutral-950 border border-neutral-700 hover:border-neutral-500 rounded-xl text-xs text-neutral-400 cursor-pointer transition-colors">
                        <span className="truncate">{formFields.image ? 'File Uploaded (Click to change)' : 'Select image file...'}</span>
                        <Upload className="w-3.5 h-3.5 text-neutral-400" />
                        <input type="file" accept="image/*" onChange={(e) => handleUploadClick(e, 'image')} className="hidden" />
                      </label>
                    </div>
                    {uploadingField === 'image' && (
                      <div className="mt-2 text-xs text-[#8BCF1D] flex items-center gap-2">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Uploading Image: {uploadProgress}%</span>
                      </div>
                    )}
                    {formFields.image && (
                      <div className="mt-2 flex items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                        <img src={formFields.image} className="w-12 h-8 object-cover rounded" alt="Thumbnail Preview" />
                        <span className="text-[10px] text-neutral-500 truncate flex-1">{formFields.image}</span>
                      </div>
                    )}
                  </div>

                  {/* File Uploads for Video File */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Video File (Optional)</label>
                    <div className="flex gap-3 items-center">
                      <label className="flex-1 flex items-center justify-between px-3 py-2.5 bg-neutral-950 border border-neutral-700 hover:border-neutral-500 rounded-xl text-xs text-neutral-400 cursor-pointer transition-colors">
                        <span className="truncate">{formFields.video ? 'File Uploaded (Click to change)' : 'Select video file...'}</span>
                        <Upload className="w-3.5 h-3.5 text-neutral-400" />
                        <input type="file" accept="video/*" onChange={(e) => handleUploadClick(e, 'video')} className="hidden" />
                      </label>
                    </div>
                    {uploadingField === 'video' && (
                      <div className="mt-2 text-xs text-[#8BCF1D] flex items-center gap-2">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Uploading Video: {uploadProgress}%</span>
                      </div>
                    )}
                    {formFields.video && (
                      <div className="mt-2 flex items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                        <video src={formFields.video} className="w-12 h-8 object-cover rounded bg-black" muted />
                        <span className="text-[10px] text-neutral-500 truncate flex-1">{formFields.video}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Metric (Views / Performance)</label>
                    <input type="text" required value={formFields.metric || ''} onChange={(e) => setFormFields({ ...formFields, metric: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. 1.5M+ Views" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Caption Overlay</label>
                    <input type="text" value={formFields.caption || ''} onChange={(e) => setFormFields({ ...formFields, caption: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="Text at bottom of card" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Aspect Ratio</label>
                      <select value={formFields.aspect || 'aspect-[9/16]'} onChange={(e) => setFormFields({ ...formFields, aspect: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none">
                        <option value="aspect-[9/16]">Vertical (9/16)</option>
                        <option value="aspect-[16/9]">Landscape (16/9)</option>
                        <option value="aspect-[16/10]">Landscape (16/10)</option>
                        <option value="aspect-[4/3]">Standard (4/3)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Icon Category</label>
                      <select value={formFields.icon || 'Play'} onChange={(e) => setFormFields({ ...formFields, icon: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none">
                        <option value="Play">Play (Reel)</option>
                        <option value="Video">Video Production</option>
                        <option value="FileText">Thought Leadership</option>
                        <option value="Image">Design/Creative</option>
                        <option value="Award">Branding Logo</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* ── SERVICES FIELDS ── */}
              {activeTab === 'services' && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Number</label>
                      <input type="text" required value={formFields.num || ''} onChange={(e) => setFormFields({ ...formFields, num: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. 01" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Title</label>
                      <input type="text" required value={formFields.title || ''} onChange={(e) => setFormFields({ ...formFields, title: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. SOCIAL MEDIA MARKETING" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Description</label>
                    <textarea required rows="3" value={formFields.description || ''} onChange={(e) => setFormFields({ ...formFields, description: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none resize-none" placeholder="Explain the service details..."></textarea>
                  </div>
                  
                  {/* File Uploads for Service Image */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Service Thumbnail Image</label>
                    <div className="flex gap-3 items-center">
                      <label className="flex-1 flex items-center justify-between px-3 py-2.5 bg-neutral-950 border border-neutral-700 hover:border-neutral-500 rounded-xl text-xs text-neutral-400 cursor-pointer transition-colors">
                        <span className="truncate">{formFields.image ? 'File Uploaded (Click to change)' : 'Select image file...'}</span>
                        <Upload className="w-3.5 h-3.5 text-neutral-400" />
                        <input type="file" accept="image/*" onChange={(e) => handleUploadClick(e, 'image')} className="hidden" />
                      </label>
                    </div>
                    {uploadingField === 'image' && (
                      <div className="mt-2 text-xs text-[#8BCF1D] flex items-center gap-2">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Uploading Image: {uploadProgress}%</span>
                      </div>
                    )}
                    {formFields.image && (
                      <div className="mt-2 flex items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                        <img src={formFields.image} className="w-12 h-8 object-cover rounded" alt="Thumbnail Preview" />
                        <span className="text-[10px] text-neutral-500 truncate flex-1">{formFields.image}</span>
                      </div>
                    )}
                  </div>

                  {/* File Uploads for Service Video */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Service Video File</label>
                    <div className="flex gap-3 items-center">
                      <label className="flex-1 flex items-center justify-between px-3 py-2.5 bg-neutral-950 border border-neutral-700 hover:border-neutral-500 rounded-xl text-xs text-neutral-400 cursor-pointer transition-colors">
                        <span className="truncate">{formFields.video ? 'File Uploaded (Click to change)' : 'Select video file...'}</span>
                        <Upload className="w-3.5 h-3.5 text-neutral-400" />
                        <input type="file" accept="video/*" onChange={(e) => handleUploadClick(e, 'video')} className="hidden" />
                      </label>
                    </div>
                    {uploadingField === 'video' && (
                      <div className="mt-2 text-xs text-[#8BCF1D] flex items-center gap-2">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Uploading Video: {uploadProgress}%</span>
                      </div>
                    )}
                    {formFields.video && (
                      <div className="mt-2 flex items-center gap-2 bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                        <video src={formFields.video} className="w-12 h-8 object-cover rounded bg-black" muted />
                        <span className="text-[10px] text-neutral-500 truncate flex-1">{formFields.video}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Bullet Features (One per line)</label>
                    <textarea rows="4" value={formFields.features || ''} onChange={(e) => setFormFields({ ...formFields, features: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none font-mono text-xs" placeholder="e.g.&#10;CONTENT CALENDARS & STRATEGY&#10;COMMUNITY GROWTH"></textarea>
                  </div>
                </>
              )}

              {/* ── TESTIMONIALS FIELDS ── */}
              {activeTab === 'testimonials' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Client Name</label>
                      <input type="text" required value={formFields.name || ''} onChange={(e) => setFormFields({ ...formFields, name: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. SUMIT TIWARI" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Client Role / Company</label>
                      <input type="text" required value={formFields.role || ''} onChange={(e) => setFormFields({ ...formFields, role: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none" placeholder="e.g. Founder, Timus Luggage" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Accent Dot Color (Hex)</label>
                    <div className="flex gap-3 items-center">
                      <input type="color" value={formFields.dotColor || '#ff7a00'} onChange={(e) => setFormFields({ ...formFields, dotColor: e.target.value })} className="w-10 h-10 border border-neutral-700 bg-neutral-950 rounded-xl cursor-pointer" />
                      <input type="text" required value={formFields.dotColor || '#ff7a00'} onChange={(e) => setFormFields({ ...formFields, dotColor: e.target.value })} className="flex-1 px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm font-mono focus:outline-none" placeholder="#ff7a00" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Review Text</label>
                    <textarea required rows="4" value={formFields.text || ''} onChange={(e) => setFormFields({ ...formFields, text: e.target.value })} className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm focus:outline-none resize-none" placeholder="Enter review text here..."></textarea>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4 border-t border-neutral-800 flex-shrink-0">
                <button type="button" onClick={() => setShowFormModal(false)} className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                  Cancel
                </button>
                <button type="submit" disabled={uploadingField !== null} className="flex-1 py-3 bg-[#8BCF1D] hover:bg-[#9fd624] disabled:opacity-50 text-black font-black text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-[1.02]">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
