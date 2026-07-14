import { useEffect } from 'react'
import { Shield } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const Privacy = () => {
  useSEO({
    title: 'Privacy Policy',
    description: 'Privacy Policy details for Buildlabs Digital.',
    noIndex: true
  })

  useEffect(() => { reinitAnimations() }, [])

  const updated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

  const sections = [
    {
      title: "Information We Collect",
      content: "When you fill our contact form, we collect your name, email, phone number, company name, and the message you send. We also collect basic analytics data (pages visited, device type) through standard web tools."
    },
    {
      title: "How We Use Your Information",
      content: "We use your details only to respond to your enquiry, send project proposals, and communicate about services you've asked about. We do not sell, rent, or share your personal information with any third party for marketing purposes."
    },
    {
      title: "Data Storage",
      content: "Your contact form data is stored securely on Firebase (Google Cloud). We take reasonable measures to protect your data from unauthorized access. We retain enquiry data for up to 2 years for business records."
    },
    {
      title: "Cookies",
      content: "Our website uses minimal cookies for analytics (Google Analytics) to understand how visitors use our site. No personal data is stored in cookies. You can disable cookies from your browser settings anytime."
    },
    {
      title: "Third-Party Services",
      content: "We use Google Analytics, Firebase, and EmailJS to operate our website. These services have their own privacy policies. We are not responsible for their data practices."
    },
    {
      title: "Your Rights",
      content: "You can request to view, update, or delete your personal data anytime by emailing us at buildlabsdigital@gmail.com. We will respond within 7 business days."
    },
    {
      title: "Contact Us",
      content: "For any privacy-related questions, reach us at buildlabsdigital@gmail.com or call +91 82375 13033. We're happy to address your concerns."
    },
  ]

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-green-radial pt-28 pb-14 md:pt-36 md:pb-18 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8BCF1D]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-white mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neutral-600 text-sm leading-relaxed mb-10 border-l-4 border-[#8BCF1D] pl-4">
            Buildlabs Digital is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights over it. We keep it simple and honest.
          </p>

          <div className="space-y-8">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-neutral-100 pb-8 last:border-0 last:pb-0">
                <h2 className="text-base font-black text-black uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span className="text-[#8BCF1D] font-mono text-xs">0{i + 1}</span>
                  {s.title}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-center">
            <p className="text-xs text-neutral-500">
              By using <strong className="text-black">buildlabs.in</strong>, you agree to this Privacy Policy.
              <br />Questions? Email us at{' '}
              <a href="mailto:buildlabsdigital@gmail.com" className="text-[#5a9a0f] font-semibold hover:underline">
                buildlabsdigital@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
