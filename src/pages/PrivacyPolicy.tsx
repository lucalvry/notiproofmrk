import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy – NotiProof"
        description="NotiProof's privacy policy. Learn how we collect, use, store, and protect your personal information under GDPR, CCPA, and other data protection laws."
        canonical="https://notiproof.com/privacy-policy/"
      />
      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: April 6, 2026</p>

            <h2>1. Introduction & Data Controller</h2>
            <p>
              NotiProof ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>notiproof.com</strong> and use our services (collectively, the "Service").
            </p>
            <p>
              <strong>Data Controller:</strong> NotiProof<br />
              <strong>Email:</strong> privacy@notiproof.com<br />
              <strong>Data Protection Officer (DPO):</strong> privacy@notiproof.com
            </p>
            <p>
              By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use the Service.
            </p>

            <h2>2. Definitions</h2>
            <ul>
              <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
              <li><strong>Processing:</strong> Any operation performed on Personal Data, including collection, storage, use, and deletion.</li>
              <li><strong>Data Subject:</strong> The individual whose Personal Data is being processed (i.e., you).</li>
              <li><strong>Sub-processor:</strong> A third-party service provider that processes Personal Data on our behalf.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device by your web browser.</li>
            </ul>

            <h2>3. Information We Collect</h2>
            <h3>3.1 Information You Provide Directly</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password, company name, and website URL when you create an account.</li>
              <li><strong>Billing Information:</strong> Payment card details and billing address (processed securely by Stripe; we do not store full card numbers).</li>
              <li><strong>Support Communications:</strong> Messages, emails, and attachments you send to our support team.</li>
              <li><strong>User Content:</strong> Testimonials, reviews, images, and videos you upload to the platform.</li>
            </ul>

            <h3>3.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, features used, notification performance metrics, click-through rates, and session duration.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and device identifiers.</li>
              <li><strong>Log Data:</strong> IP address, access times, referring URLs, and error logs.</li>
              <li><strong>Cookie Data:</strong> Information collected through cookies and similar technologies (see our <Link to="/cookie-policy/">Cookie Policy</Link>).</li>
            </ul>

            <h3>3.3 Information from Third Parties</h3>
            <ul>
              <li><strong>Review Platforms:</strong> When you connect review aggregation, we may collect review data from Google, Yelp, Trustpilot, and similar platforms.</li>
              <li><strong>Integration Partners:</strong> Data received through integrations such as Shopify, WordPress, and Zapier as configured by you.</li>
            </ul>

            <h2>4. How We Collect Information</h2>
            <p>We collect information through the following methods:</p>
            <ul>
              <li><strong>Directly from you</strong> when you register, subscribe, submit content, or contact us.</li>
              <li><strong>Automatically</strong> through cookies, log files, and analytics tools when you use the Service.</li>
              <li><strong>From third parties</strong> such as payment processors, review platforms, and integration partners you authorize.</li>
            </ul>

            <h2>5. Legal Bases for Processing (GDPR Article 6)</h2>
            <p>We process your Personal Data under the following legal bases:</p>
            <ul>
              <li><strong>Contract Performance (Art. 6(1)(b)):</strong> Processing necessary to provide the Service you subscribed to, manage your account, and fulfill our contractual obligations.</li>
              <li><strong>Consent (Art. 6(1)(a)):</strong> Where you have given explicit consent, such as for marketing communications or non-essential cookies. You may withdraw consent at any time.</li>
              <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> Processing necessary for our legitimate interests, such as improving the Service, fraud prevention, and security, provided these interests are not overridden by your rights.</li>
              <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> Processing necessary to comply with applicable laws, such as tax reporting and responding to legal requests.</li>
            </ul>

            <h2>6. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ol>
              <li>Providing, maintaining, and improving the Service.</li>
              <li>Processing payments and managing subscriptions.</li>
              <li>Sending transactional communications (account confirmations, billing receipts, service alerts).</li>
              <li>Sending marketing communications (only with your consent; you can opt out at any time).</li>
              <li>Providing customer support and responding to inquiries.</li>
              <li>Analyzing usage patterns to improve user experience and develop new features.</li>
              <li>Generating aggregated, anonymized analytics and benchmarks.</li>
              <li>Detecting, preventing, and addressing fraud, abuse, and security issues.</li>
              <li>Complying with legal obligations and enforcing our Terms of Service.</li>
              <li>Personalizing your experience and delivering relevant content.</li>
              <li>Conducting A/B testing to optimize the Service.</li>
              <li>Managing integrations and third-party connections you authorize.</li>
            </ol>

            <h2>7. Data Sharing & Third Parties</h2>
            <p>We do <strong>not</strong> sell your Personal Data. We share data only in the following circumstances:</p>

            <h3>7.1 Sub-processors</h3>
            <table>
              <thead>
                <tr><th>Sub-processor</th><th>Purpose</th><th>Location</th></tr>
              </thead>
              <tbody>
                <tr><td>Stripe</td><td>Payment processing</td><td>United States</td></tr>
                <tr><td>Supabase</td><td>Database & authentication</td><td>United States / EU</td></tr>
                <tr><td>Vercel</td><td>Website hosting & CDN</td><td>Global (edge network)</td></tr>
                <tr><td>Google Analytics</td><td>Website analytics (if enabled)</td><td>United States</td></tr>
              </tbody>
            </table>

            <h3>7.2 Other Disclosures</h3>
            <ul>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or governmental request.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing with a specific third party.</li>
            </ul>

            <h2>8. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside the European Economic Area (EEA), including the United States. When we transfer data internationally, we rely on:
            </p>
            <ul>
              <li><strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission.</li>
              <li><strong>Adequacy decisions</strong> where applicable.</li>
              <li><strong>Sub-processor agreements</strong> that include appropriate data protection safeguards.</li>
            </ul>

            <h2>9. Data Retention</h2>
            <p>We retain your Personal Data only as long as necessary for the purposes outlined in this policy:</p>
            <ul>
              <li><strong>Account data:</strong> Retained while your account is active and for 30 days after deletion to allow recovery.</li>
              <li><strong>Billing records:</strong> Retained for 7 years as required by tax and accounting laws.</li>
              <li><strong>Usage logs:</strong> Retained for up to 24 months, then anonymized or deleted.</li>
              <li><strong>Support communications:</strong> Retained for up to 3 years after resolution.</li>
              <li><strong>Marketing consent records:</strong> Retained for as long as consent is valid, plus 3 years for compliance documentation.</li>
            </ul>

            <h2>10. Cookies & Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to operate and improve the Service. For a detailed breakdown of the cookies we use, their purposes, and how to manage your preferences, please see our <Link to="/cookie-policy/">Cookie Policy</Link>.
            </p>
            <p>
              You can manage your cookie preferences at any time through the cookie consent banner or your browser settings.
            </p>

            <h2>11. Your Rights Under GDPR</h2>
            <p>If you are located in the European Economic Area (EEA) or United Kingdom, you have the following rights:</p>
            <ul>
              <li><strong>Right of Access (Art. 15):</strong> Request a copy of the Personal Data we hold about you.</li>
              <li><strong>Right to Rectification (Art. 16):</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your Personal Data ("right to be forgotten").</li>
              <li><strong>Right to Restriction (Art. 18):</strong> Request restriction of processing in certain circumstances.</li>
              <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interests or for direct marketing purposes.</li>
              <li><strong>Right Regarding Automated Decision-Making (Art. 22):</strong> Not be subject to decisions based solely on automated processing that produce legal or similarly significant effects. NotiProof does not currently engage in solely automated decision-making.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <strong>privacy@notiproof.com</strong>. We will respond within 30 days. You also have the right to lodge a complaint with your local data protection authority.
            </p>

            <h2>12. Your Rights Under CCPA</h2>
            <p>If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with the following rights:</p>
            <ul>
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of Personal Data we have collected.</li>
              <li><strong>Right to Delete:</strong> Request deletion of your Personal Data, subject to certain exceptions.</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the "sale" of Personal Data. <em>NotiProof does not sell Personal Data.</em></li>
              <li><strong>Right to Non-Discrimination:</strong> You will not receive discriminatory treatment for exercising your CCPA rights.</li>
            </ul>
            <p>
              To exercise these rights, email <strong>privacy@notiproof.com</strong> or visit our <Link to="/company/contact/">contact page</Link>.
            </p>

            <h2>13. Children's Privacy</h2>
            <p>
              The Service is not directed to individuals under the age of 16. We do not knowingly collect Personal Data from children. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly. If you believe a child has provided us with Personal Data, please contact us at <strong>privacy@notiproof.com</strong>.
            </p>

            <h2>14. Security Measures</h2>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul>
              <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256).</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Role-based access controls and principle of least privilege.</li>
              <li>Secure password hashing (bcrypt).</li>
              <li>Regular backups with encrypted storage.</li>
              <li>SOC 2 Type II compliance practices.</li>
            </ul>
            <p>
              While we strive to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>15. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date. For significant changes, we may also send an email notification. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>

            <h2>16. Contact & Data Protection Officer</h2>
            <p>For privacy-related inquiries, data access requests, or complaints, contact us at:</p>
            <ul>
              <li><strong>Email:</strong> privacy@notiproof.com</li>
              <li><strong>DPO Email:</strong> privacy@notiproof.com</li>
              <li><strong>Contact Page:</strong> <Link to="/company/contact/">notiproof.com/company/contact</Link></li>
            </ul>
            <p>
              If you are in the EEA and are not satisfied with our response, you have the right to lodge a complaint with your local supervisory authority (Data Protection Authority).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
