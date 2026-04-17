import SEOHead from "@/components/SEOHead";
import LegalPageShell, { TocItem } from "@/components/LegalPageShell";
import { Link } from "react-router-dom";

const toc: TocItem[] = [
  { id: "entity", label: "1. About NotiProof & Lucalvry LLC" },
  { id: "what", label: "2. What Are Cookies?" },
  { id: "how", label: "3. How We Use Cookies" },
  { id: "types", label: "4. Types of Cookies We Use" },
  { id: "manage", label: "5. Managing Your Preferences" },
  { id: "local", label: "6. Local Storage" },
  { id: "third-party", label: "7. Third-Party Cookies" },
  { id: "updates", label: "8. Updates to This Policy" },
  { id: "contact", label: "9. Contact" },
];

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy – NotiProof"
        description="Learn about the cookies and tracking technologies that Lucalvry LLC uses for the NotiProof product, their purposes, and how to manage your cookie preferences."
        canonical="https://notiproof.com/cookie-policy/"
        pageType="CollectionPage"
      />
      <span id="top" />
      <LegalPageShell
        title="Cookie Policy"
        lastUpdated="April 6, 2026"
        intro="Cookies and tracking technologies used by Lucalvry LLC to operate the NotiProof platform."
        toc={toc}
        activePath="/cookie-policy/"
      >
        <h2 id="entity">1. About NotiProof & Lucalvry LLC</h2>
        <p>
          NotiProof is a product operated by <strong>Lucalvry LLC</strong> ("Lucalvry," "we," "our," "us"), a Wyoming limited liability company. References to "NotiProof" refer to the product and platform; references to "we" refer to Lucalvry LLC.
        </p>

        <h2 id="what">2. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by your web browser when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide usage information to the site owner.
        </p>

        <h2 id="how">3. How We Use Cookies</h2>
        <p>
          We use cookies and similar technologies (such as local storage and pixel tags) to operate the NotiProof Service, remember your preferences, analyze usage, and improve your experience.
        </p>

        <h2 id="types">4. Types of Cookies We Use</h2>

        <h3>4.1 Essential Cookies (Strictly Necessary)</h3>
        <p>These cookies are required for the Service to function. They cannot be disabled.</p>
        <table>
          <thead>
            <tr><th>Cookie Name</th><th>Purpose</th><th>Duration</th></tr>
          </thead>
          <tbody>
            <tr><td><code>sb-access-token</code></td><td>Authentication session token</td><td>Session</td></tr>
            <tr><td><code>sb-refresh-token</code></td><td>Authentication token refresh</td><td>7 days</td></tr>
            <tr><td><code>notiproof-cookie-consent</code></td><td>Stores your cookie consent preferences</td><td>1 year</td></tr>
          </tbody>
        </table>

        <h3>4.2 Analytics Cookies</h3>
        <p>These cookies help us understand how visitors interact with the Service by collecting anonymous usage data.</p>
        <table>
          <thead>
            <tr><th>Cookie Name</th><th>Purpose</th><th>Duration</th><th>Provider</th></tr>
          </thead>
          <tbody>
            <tr><td><code>_ga</code></td><td>Distinguishes unique users</td><td>2 years</td><td>Google Analytics</td></tr>
            <tr><td><code>_ga_*</code></td><td>Maintains session state</td><td>2 years</td><td>Google Analytics</td></tr>
            <tr><td><code>_gid</code></td><td>Distinguishes unique users (24h)</td><td>24 hours</td><td>Google Analytics</td></tr>
            <tr><td><code>_gat</code></td><td>Throttles request rate</td><td>1 minute</td><td>Google Analytics</td></tr>
          </tbody>
        </table>

        <h3>4.3 Marketing Cookies</h3>
        <p>These cookies are used to deliver relevant advertisements and track campaign effectiveness. They are only set with your consent.</p>
        <table>
          <thead>
            <tr><th>Cookie Name</th><th>Purpose</th><th>Duration</th><th>Provider</th></tr>
          </thead>
          <tbody>
            <tr><td><code>_fbp</code></td><td>Facebook ad targeting</td><td>3 months</td><td>Meta / Facebook</td></tr>
            <tr><td><code>_gcl_au</code></td><td>Google Ads conversion tracking</td><td>3 months</td><td>Google Ads</td></tr>
          </tbody>
        </table>

        <h3>4.4 Functional Cookies</h3>
        <p>These cookies enable enhanced functionality and personalization.</p>
        <table>
          <thead>
            <tr><th>Cookie Name</th><th>Purpose</th><th>Duration</th></tr>
          </thead>
          <tbody>
            <tr><td><code>theme</code></td><td>Remembers your light/dark theme preference</td><td>1 year</td></tr>
            <tr><td><code>locale</code></td><td>Remembers your language preference</td><td>1 year</td></tr>
          </tbody>
        </table>

        <h2 id="manage">5. Managing Your Cookie Preferences</h2>
        <p>You can manage your cookie preferences in the following ways:</p>
        <ul>
          <li><strong>Cookie consent banner:</strong> When you first visit our site, a banner allows you to accept all cookies, reject non-essential cookies, or customize your preferences.</li>
          <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may impair the Service.</li>
          <li><strong>Opt-out links:</strong> For Google Analytics, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
        </ul>

        <h2 id="local">6. Local Storage</h2>
        <p>
          In addition to cookies, we use browser local storage to store certain preferences and settings, such as your cookie consent choice (<code>notiproof-cookie-consent</code>). Local storage data persists until explicitly cleared by you or the application.
        </p>

        <h2 id="third-party">7. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective third party's privacy and cookie policies for more information.
        </p>

        <h2 id="updates">8. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
        </p>

        <h2 id="contact">9. Contact</h2>
        <p>
          If you have questions about our use of cookies, please contact us at <strong>privacy@notiproof.com</strong> or visit our <Link to="/company/contact/">contact page</Link>.
        </p>
        <ul>
          <li><strong>Legal entity:</strong> Lucalvry LLC (operator of NotiProof)</li>
          <li><strong>Jurisdiction:</strong> Wyoming, United States</li>
          <li><strong>Mailing address:</strong> 30 N Gould St, STE R, Sheridan, WY 82801</li>
        </ul>
        <p>
          For more information about how we handle your data, see our <Link to="/privacy-policy/">Privacy Policy</Link>.
        </p>
      </LegalPageShell>
    </>
  );
}
