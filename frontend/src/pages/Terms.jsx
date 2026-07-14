import { useEffect } from 'react'
import { FileText } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'
import useSEO from '../hooks/useSEO'

const Terms = () => {
  useSEO({
    title: 'Terms of Service',
    description: 'Terms and Conditions for using Buildlabs Digital services.',
    noIndex: true
  })

  useEffect(() => { reinitAnimations() }, [])

  const updated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

  const sections = [
    {
      title: "Services",
      content: "Buildlabs Digital provides social media marketing, video production, branding & design, website development, and software development services. Exact scope of work is defined in a separate project agreement or proposal before any work begins."
    },
    {
      title: "Payments",
      content: "All projects require a minimum 50% advance payment before work starts. The remaining balance is due upon project completion or as per the payment schedule agreed in writing. We accept UPI, bank transfer, and other mutually agreed methods."
    },
    {
      title: "Revisions & Approvals",
      content: "Each project includes a defined number of revision rounds as stated in the proposal. Additional revisions beyond the agreed scope will be billed separately. Client approval at each milestone is required to proceed."
    },
    {
      title: "Timelines",
      content: "Project timelines are estimated based on scope agreed at the start. Delays caused by late feedback or content delivery from the client may affect the delivery date. We will communicate any timeline changes proactively."
    },
    {
      title: "Intellectual Property",
      content: "All final deliverables (designs, videos, code) become the client's property upon full payment. Work-in-progress files, templates, and internal tools remain Buildlabs' property. We reserve the right to showcase completed work in our portfolio unless the client requests otherwise in writing."
    },
    {
      title: "Confidentiality",
      content: "We treat all client information, business details, and project specifics as confidential. We do not share client data, strategies, or business plans with third parties without explicit written consent."
    },
    {
      title: "Cancellations & Refunds",
      content: "If a project is cancelled after work has started, the advance paid is non-refundable. If Buildlabs fails to deliver agreed work, we will either complete it or provide a fair refund for undelivered work — assessed case by case."
    },
    {
      title: "Limitation of Liability",
      content: "Buildlabs is not liable for indirect losses such as lost profits or business opportunities arising from our services. Our maximum liability in any case is limited to the amount paid for the specific service in question."
    },
    {
      title: "Governing Law",
      content: "These terms are governed by the laws of India. Any disputes will be handled under the jurisdiction of courts in Pune, Maharashtra."
    },
  ]

  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-green-radial pt-28 pb-14 md:pt-36 md:pb-18 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8BCF1D]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-white mb-3">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neutral-600 text-sm leading-relaxed mb-10 border-l-4 border-[#8BCF1D] pl-4">
            By engaging Buildlabs Digital for any service, you agree to these terms. We've written them clearly — no legal jargon. Please read before we begin working together.
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
              Questions about these terms? Reach us at{' '}
              <a href="mailto:buildlabsdigital@gmail.com" className="text-[#5a9a0f] font-semibold hover:underline">
                buildlabsdigital@gmail.com
              </a>
              {' '}or call{' '}
              <a href="tel:+918237513033" className="text-[#5a9a0f] font-semibold hover:underline">
                +91 82375 13033
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
