import { useEffect } from 'react'
import { Shield, Lock, Eye, Database, Mail, AlertCircle } from 'lucide-react'
import { reinitAnimations } from '../utils/animations'

const Privacy = () => {
  useEffect(() => {
    reinitAnimations()
  }, [])

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Privacy <span className="text-gradient bg-gradient-to-r from-primary-200 to-primary-300 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-primary-100">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                1. Introduction
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                Buildlabs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our website
                and services.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Database className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-bold font-display mb-3 mt-6">2.1 Personal Information</h3>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                We may collect personal information that you provide directly, including:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Billing and payment information</li>
                <li>Project requirements and preferences</li>
                <li>Communication history and correspondence</li>
              </ul>

              <h3 className="text-xl font-bold font-display mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Eye className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                3. How We Use Your Information
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Providing and improving our services</li>
                <li>Processing transactions and managing accounts</li>
                <li>Communicating with you about services and updates</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                We do not sell your personal information. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">5. Data Security</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Encryption of sensitive data</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect
                your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality</li>
                <li>Provide personalized experiences</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect
                website functionality.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">7. Your Rights</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Request limitation of data processing</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                To exercise these rights, contact us at hello@buildlabs.in
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">8. Data Retention</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                We retain your personal information only for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Fulfill the purposes outlined in this policy</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records as required by law</li>
              </ul>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">9. Children's Privacy</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                personal information from children. If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">10. Third-Party Links</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                11. Changes to Privacy Policy
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 ml-4">
                <li>Posting the new policy on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for significant changes</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="scroll-reveal mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">12. International Data Transfers</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of
                residence. We ensure appropriate safeguards are in place to protect your data in accordance
                with this Privacy Policy.
              </p>
            </div>

            <div className="scroll-reveal bg-primary-50 dark:bg-primary-900/10 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center">
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                Contact Us
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="text-dark-600 dark:text-dark-400 space-y-2">
                <li><strong>Email:</strong> hello@buildlabs.in</li>
                <li><strong>Phone:</strong> +91 82375 13033</li>
                <li><strong>Address:</strong> India</li>
              </ul>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mt-4">
                We will respond to your inquiries within 30 days.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

