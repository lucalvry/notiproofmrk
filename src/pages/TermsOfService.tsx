import SEOHead from "@/components/SEOHead";
import LegalPageShell, { TocItem } from "@/components/LegalPageShell";
import { Link } from "react-router-dom";

const toc: TocItem[] = [
  { id: "entity", label: "1. About NotiProof & Lucalvry LLC" },
  { id: "acceptance", label: "2. Acceptance of Terms" },
  { id: "definitions", label: "3. Definitions" },
  { id: "service", label: "4. Description of Service" },
  { id: "account", label: "5. Account Registration & Security" },
  { id: "billing", label: "6. Subscription Plans & Billing" },
  { id: "free", label: "7. Free Plan Terms" },
  { id: "cancel", label: "8. Cancellation & Refunds" },
  { id: "aup", label: "9. Acceptable Use Policy" },
  { id: "content", label: "10. User Content & Data Ownership" },
  { id: "ip", label: "11. Intellectual Property" },
  { id: "dmca", label: "12. DMCA & Copyright Complaints" },
  { id: "third-party", label: "13. Third-Party Services" },
  { id: "privacy", label: "14. Privacy & Data Processing" },
  { id: "sla", label: "15. Service Availability & SLA" },
  { id: "liability", label: "16. Limitation of Liability" },
  { id: "indemnification", label: "17. Indemnification" },
  { id: "disputes", label: "18. Dispute Resolution" },
  { id: "law", label: "19. Governing Law" },
  { id: "termination", label: "20. Termination" },
  { id: "force", label: "21. Force Majeure" },
  { id: "severability", label: "22. Severability" },
  { id: "changes", label: "23. Changes to These Terms" },
  { id: "contact", label: "24. Contact" },
];

export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service – NotiProof"
        description="Terms governing the use of NotiProof, a product operated by Lucalvry LLC. Read the conditions for our social proof and testimonial platform."
        canonical="https://notiproof.com/terms-of-service/"
        pageType="TermsOfService"
      />
      <span id="top" />
      <LegalPageShell
        title="Terms of Service"
        lastUpdated="April 6, 2026"
        intro="The legally binding agreement between you and Lucalvry LLC for use of the NotiProof platform."
        toc={toc}
        activePath="/terms-of-service/"
      >
        <h2 id="entity">1. About NotiProof & Lucalvry LLC</h2>
        <p>
          NotiProof is a product operated by <strong>Lucalvry LLC</strong> ("Lucalvry," "we," "our," "us"), a Wyoming limited liability company. References to "NotiProof" in these Terms refer to the product and platform; references to "we," "us," and "our" refer to Lucalvry LLC as the contracting party.
        </p>

        <h2 id="acceptance">2. Acceptance of Terms</h2>
        <p>
          By accessing or using NotiProof's website and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you must not use the Service. These Terms constitute a legally binding agreement between you and Lucalvry LLC.
        </p>

        <h2 id="definitions">3. Definitions</h2>
        <ul>
          <li><strong>"Service"</strong> refers to the NotiProof platform, website, APIs, widgets, and all related services.</li>
          <li><strong>"User," "you," "your"</strong> refers to any individual or entity accessing or using the Service.</li>
          <li><strong>"We," "us," "our"</strong> refers to Lucalvry LLC, the operator of NotiProof.</li>
          <li><strong>"User Content"</strong> refers to any data, text, images, videos, testimonials, or other content you upload or submit to the Service.</li>
          <li><strong>"Subscription Plan"</strong> refers to the pricing tier you select (Free, Starter, Standard, Professional, or Lifetime).</li>
        </ul>

        <h2 id="service">4. Description of Service</h2>
        <p>
          NotiProof provides a social proof and testimonial platform that enables businesses to display real-time activity notifications, collect and showcase testimonials (text, image, and video), aggregate reviews from third-party platforms, build conversion campaigns, and analyze performance with detailed analytics. The Service includes integrations with platforms such as Shopify, WordPress, WooCommerce, Zapier, and more.
        </p>

        <h2 id="account">5. Account Registration & Security</h2>
        <ul>
          <li>You must provide accurate, current, and complete information when creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You must immediately notify us of any unauthorized use of your account.</li>
          <li>You are responsible for all activities that occur under your account.</li>
          <li>We reserve the right to suspend or terminate accounts with inaccurate information.</li>
        </ul>

        <h2 id="billing">6. Subscription Plans & Billing</h2>
        <h3>6.1 Plan Tiers</h3>
        <p>NotiProof offers the following plans:</p>
        <ul>
          <li><strong>Free:</strong> Free forever — no credit card required. Includes limited notifications, 1 website, and core features.</li>
          <li><strong>Starter:</strong> Paid monthly or annually. Expanded limits and features.</li>
          <li><strong>Standard:</strong> Paid monthly or annually. Higher limits, priority support.</li>
          <li><strong>Professional:</strong> Paid monthly or annually. Highest limits, advanced features, dedicated support.</li>
          <li><strong>Lifetime Deal:</strong> One-time payment for permanent access at a fixed feature tier.</li>
        </ul>

        <h3>6.2 Billing</h3>
        <ul>
          <li>Paid plans are billed in advance on a monthly or annual basis.</li>
          <li>Annual plans are charged as a single payment at the start of the billing cycle.</li>
          <li>All prices are in USD unless otherwise stated.</li>
          <li>We may change pricing with 30 days' notice. Existing subscriptions are honored until the end of the current billing period.</li>
        </ul>

        <h3>6.3 No Free Trial on Paid Plans</h3>
        <p>
          Paid plans do not include a free trial period. The Free plan is available indefinitely at no cost, allowing you to evaluate the Service before upgrading.
        </p>

        <h2 id="free">7. Free Plan Terms</h2>
        <p>
          The Free plan is provided at no charge for as long as you wish to use it ("free forever"). We reserve the right to modify the features and limits of the Free plan with 30 days' notice. The Free plan is subject to all other provisions of these Terms.
        </p>

        <h2 id="cancel">8. Cancellation & Refunds</h2>
        <ul>
          <li>You may cancel your paid subscription at any time through your account settings or by contacting support.</li>
          <li>Upon cancellation, your paid features remain active until the end of the current billing period.</li>
          <li>We offer a <strong>30-day money-back guarantee</strong> on first-time paid plan purchases. Refund requests must be submitted within 30 days of the initial payment.</li>
          <li>Refunds for annual plans after the 30-day window are prorated at our discretion.</li>
          <li>Lifetime Deal purchases are non-refundable after 30 days.</li>
          <li>Upon cancellation or downgrade, your account reverts to the Free plan. Your data remains available for export for 30 days after downgrade.</li>
        </ul>

        <h2 id="aup">9. Acceptable Use Policy</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal or unauthorized purpose.</li>
          <li>Display false, fabricated, or misleading notifications, testimonials, or reviews.</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation.</li>
          <li>Interfere with or disrupt the Service, servers, or networks.</li>
          <li>Attempt to gain unauthorized access to any part of the Service.</li>
          <li>Reverse-engineer, decompile, or disassemble any part of the Service.</li>
          <li>Use automated tools (bots, scrapers) to access the Service without permission.</li>
          <li>Transmit malware, viruses, or other harmful code.</li>
          <li>Violate any applicable local, state, national, or international law.</li>
          <li>Harass, abuse, or harm other users or our staff.</li>
          <li>Use the Service to send unsolicited communications (spam).</li>
        </ul>
        <p>Violation of this policy may result in immediate suspension or termination of your account.</p>

        <h2 id="content">10. User Content & Data Ownership</h2>
        <ul>
          <li>You retain full ownership of all User Content you upload to the Service.</li>
          <li>By uploading content, you grant Lucalvry LLC a limited, non-exclusive, worldwide license to host, display, and distribute your content solely for the purpose of operating the Service.</li>
          <li>You are solely responsible for ensuring you have the necessary rights and permissions for all content you upload.</li>
          <li>We may remove content that violates these Terms or applicable laws.</li>
          <li>Upon account deletion, we will delete your User Content within 30 days, except where retention is required by law.</li>
        </ul>

        <h2 id="ip">11. Intellectual Property</h2>
        <ul>
          <li>Lucalvry LLC retains all rights, title, and interest in the Service, including the NotiProof software, branding, logos, documentation, and all related intellectual property.</li>
          <li>These Terms do not grant you any right to use NotiProof's or Lucalvry's trademarks, logos, or branding without prior written consent.</li>
          <li>If you provide feedback or suggestions, you grant us an unrestricted, perpetual license to use them without compensation.</li>
        </ul>

        <h2 id="dmca">12. DMCA & Copyright Complaints</h2>
        <p>
          We respect intellectual property rights. If you believe content on our platform infringes your copyright, please send a DMCA takedown notice to Lucalvry LLC's designated agent at <strong>legal@notiproof.com</strong> including:
        </p>
        <ol>
          <li>A description of the copyrighted work claimed to be infringed.</li>
          <li>The URL or location of the allegedly infringing content.</li>
          <li>Your contact information (name, email, phone).</li>
          <li>A statement that you have a good-faith belief the use is unauthorized.</li>
          <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner.</li>
          <li>Your physical or electronic signature.</li>
        </ol>

        <h2 id="third-party">13. Third-Party Services & Integrations</h2>
        <p>
          The Service integrates with third-party platforms (e.g., Shopify, WordPress, Zapier, Stripe, Google). Your use of third-party services is governed by their respective terms and privacy policies. Lucalvry LLC is not responsible for the availability, accuracy, or practices of third-party services.
        </p>

        <h2 id="privacy">14. Privacy & Data Processing</h2>
        <p>
          Our handling of Personal Data is governed by our <Link to="/privacy-policy/">Privacy Policy</Link> and <Link to="/cookie-policy/">Cookie Policy</Link>. By using the Service, you acknowledge and agree to our data processing practices as described in those policies.
        </p>

        <h2 id="sla">15. Service Availability & SLA</h2>
        <ul>
          <li>We aim for <strong>99.9% uptime</strong> for the Service, excluding scheduled maintenance.</li>
          <li>We will provide reasonable advance notice of planned maintenance when possible.</li>
          <li>We are not liable for downtime caused by factors outside our control, including internet outages, hosting provider issues, or force majeure events.</li>
          <li>Service credits may be available for extended outages on Professional and Business plans — contact support for details.</li>
        </ul>

        <h2 id="liability">16. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
        <ul>
          <li>Lucalvry LLC's total aggregate liability arising from or related to these Terms shall not exceed the amounts you paid for the Service in the <strong>twelve (12) months</strong> preceding the claim.</li>
          <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunities.</li>
          <li>We are not liable for damages resulting from User Content, third-party services, or unauthorized access to your account.</li>
          <li>For Free plan users, our total liability shall not exceed <strong>$50 USD</strong>.</li>
        </ul>

        <h2 id="indemnification">17. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Lucalvry LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
        </p>
        <ul>
          <li>Your use of the Service.</li>
          <li>Your violation of these Terms.</li>
          <li>Your User Content.</li>
          <li>Your violation of any third-party rights.</li>
        </ul>

        <h2 id="disputes">18. Dispute Resolution</h2>
        <ul>
          <li><strong>Informal Resolution:</strong> Before filing any formal dispute, you agree to contact us at <strong>legal@notiproof.com</strong> and attempt to resolve the matter informally for at least 30 days.</li>
          <li><strong>Arbitration:</strong> If informal resolution fails, disputes shall be resolved through binding arbitration administered by a recognized arbitration body, rather than in court.</li>
          <li><strong>Class Action Waiver:</strong> You agree to resolve disputes on an individual basis and waive the right to participate in class actions or class-wide arbitration.</li>
          <li><strong>Small Claims:</strong> Either party may bring claims in small claims court if eligible.</li>
        </ul>

        <h2 id="law">19. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to conflict of law principles. Venue for any permitted court proceedings shall lie in Sheridan County, Wyoming. For users in the European Union, mandatory consumer protection laws of your country of residence shall apply where required.
        </p>

        <h2 id="termination">20. Termination</h2>
        <ul>
          <li>We may suspend or terminate your account immediately if you violate these Terms.</li>
          <li>We may discontinue the Service (or any part of it) with 90 days' notice.</li>
          <li>Upon termination, your right to use the Service ceases immediately.</li>
          <li>Your data will be available for export for 30 days following termination. After that period, we may delete it permanently.</li>
          <li>Provisions that by their nature should survive termination will survive, including Sections 11, 16, 17, 18, and 19.</li>
        </ul>

        <h2 id="force">21. Force Majeure</h2>
        <p>
          Neither party shall be liable for delays or failures in performance resulting from causes beyond reasonable control, including but not limited to natural disasters, war, terrorism, pandemics, government actions, internet or infrastructure failures, and power outages.
        </p>

        <h2 id="severability">22. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.
        </p>

        <h2 id="changes">23. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. For significant changes, we may also notify you via email. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2 id="contact">24. Contact</h2>
        <p>For questions about these Terms, contact us at:</p>
        <ul>
          <li><strong>Legal entity:</strong> Lucalvry LLC (operator of NotiProof)</li>
          <li><strong>Jurisdiction:</strong> Wyoming, United States</li>
          <li><strong>Mailing address (incl. DMCA designated agent):</strong> 30 N Gould St, STE R, Sheridan, WY 82801</li>
          <li><strong>Email:</strong> legal@notiproof.com</li>
          <li><strong>Contact Page:</strong> <Link to="/company/contact/">notiproof.com/company/contact</Link></li>
        </ul>
      </LegalPageShell>
    </>
  );
}
