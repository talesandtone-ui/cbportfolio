import { useEffect } from 'react'
import { FileText, Shield, Lock, AlertCircle } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const Terms = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Terms of <span className="text-gradient bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-primary-100">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                1. Agreement to Terms
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                By accessing and using Buildlabs' services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                2. Services Description
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Buildlabs provides digital marketing services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Video editing and production</li>
                <li>Website design and development</li>
                <li>Digital marketing and advertising</li>
                <li>Social media management</li>
                <li>Brand identity and graphic design</li>
                <li>Performance marketing and analytics</li>
                <li>Content creation and strategy</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                3. Client Responsibilities
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Timely payment of invoices as per agreed terms</li>
                <li>Providing necessary materials and approvals in a timely manner</li>
                <li>Ensuring they have rights to any content or materials provided</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">4. Payment Terms</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Payment is due as per the agreed schedule (monthly, project-based, etc.)</li>
                <li>Late payments may incur additional charges</li>
                <li>Services may be suspended for non-payment</li>
                <li>All prices are in INR unless otherwise specified</li>
                <li>Refunds are subject to our refund policy outlined in service agreements</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">5. Intellectual Property</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Final deliverables become the property of the client upon full payment</li>
                <li>Buildlabs retains the right to use work for portfolio and marketing purposes</li>
                <li>Client grants Buildlabs license to use client's brand assets for project execution</li>
                <li>Any pre-existing intellectual property remains with its original owner</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">6. Revisions and Changes</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Revision policies vary by service package:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Number of revision rounds is specified in service agreements</li>
                <li>Additional revisions may incur extra charges</li>
                <li>Major scope changes may require a new agreement or addendum</li>
                <li>Client feedback should be provided within agreed timeframes</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                7. Limitation of Liability
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Buildlabs shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Delays caused by third-party services or client actions</li>
                <li>Issues arising from client-provided materials or information</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                Our total liability shall not exceed the total amount paid by the client for the specific service.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">8. Confidentiality</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Business strategies and proprietary information</li>
                <li>Financial information and pricing</li>
                <li>Client data and customer information</li>
                <li>Any information marked as confidential</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">9. Termination</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Either party may terminate services:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>With written notice as specified in service agreements</li>
                <li>Immediately for material breach of terms</li>
                <li>Upon completion of agreed services</li>
                <li>Outstanding payments remain due upon termination</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">10. Governing Law</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                These Terms of Service are governed by the laws of India. Any disputes shall be subject to
                the exclusive jurisdiction of the courts in India.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">11. Changes to Terms</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                Buildlabs reserves the right to modify these terms at any time. Clients will be notified of
                significant changes. Continued use of services after changes constitutes acceptance of new terms.
              </p>
            </div>

            <div className="scroll-reveal bg-primary-50 dark:bg-primary-900/10 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl font-bold font-display mb-4">Contact Us</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul className="text-dark-600 dark:text-dark-400 space-y-2">
                <li><strong>Email:</strong> hello@buildlabs.in</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Address:</strong> India</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

