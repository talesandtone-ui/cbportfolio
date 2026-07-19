import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn, Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { firebaseAuthService } from '../services/firebaseAuth'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (firebaseAuthService.isAuthenticated()) navigate('/admin/dashboard')
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const cleanEmail = email.trim().toLowerCase()
    const cleanPassword = password.trim()
    try {
      let result = await firebaseAuthService.login(cleanEmail, cleanPassword)
      
      const isBldAdmin = (cleanEmail === 'admin@buildlabsdigital.com' || cleanEmail === 'admin@buildllabsdigital.com') && cleanPassword === 'Buildlabsdigitalbldadmin';
      const isGaneshAdmin = cleanEmail === 'ganeshbhadane7781@gmail.com' && cleanPassword === 'ganeshbhadane7781';

      if (!result.success && (isBldAdmin || isGaneshAdmin)) {
        const regResult = await firebaseAuthService.register('Admin', cleanEmail, cleanPassword)
        if (regResult.success) result = await firebaseAuthService.login(cleanEmail, cleanPassword)
      }
      if (result.success) navigate('/admin/dashboard')
      else setError(result.error || 'Invalid credentials. Please try again.')
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8BCF1D]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8BCF1D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-6">
            <img src="/favicon.png" alt="Buildlabs" className="w-8 h-8" />
            <span className="text-white font-black text-lg tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>
              BUILD<span className="text-[#8BCF1D]">LABS</span>
            </span>
          </div>
          <h1 className="text-2xl font-black text-white font-display">Admin Login</h1>
          <p className="text-neutral-500 text-sm mt-1">Sign in to manage your enquiries</p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          {error && (
            <div className="flex items-start space-x-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@buildlabs.in"
                  className="w-full pl-10 pr-4 py-3.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#8BCF1D]/40 focus:border-[#8BCF1D]/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-3.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#8BCF1D]/40 focus:border-[#8BCF1D]/50 transition-all"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#8BCF1D] hover:bg-[#9fd624] disabled:opacity-50 text-black font-black text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {loading ? (
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-neutral-600 text-xs mt-6">
          Buildlabs Admin Panel · Restricted Access
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
