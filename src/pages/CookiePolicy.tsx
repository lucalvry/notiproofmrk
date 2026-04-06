import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy – NotiProof"
        description="Learn about the cookies and tracking technologies NotiProof uses, their purposes, and how to manage your cookie preferences."
        canonical="https://notiproof.com/cookie-policy/"
      />
      <section className="section-padding">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-extrabold mb-4">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: April 6, 2026</p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by your web browser when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide usage information to the site owner.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              NotiProof uses cookies and similar technologies (such as local storage and pixel tags) to operate the Service, remember your preferences, analyze usage, and improve your experience.
            </p>

            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Essential Cookies (Strictly Necessary)</h3>
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

            <h3>3.2 Analytics Cookies</h3>
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

            <h3>3.3 Marketing Cookies</h3>
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

            <h3>3.4 Functional Cookies</h3>
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

            <h2>4. Managing Your Cookie Preferences</h2>
            <p>You can manage your cookie preferences in the following ways:</p>
            <ul>
              <li><strong>Cookie consent banner:</strong> When you first visit our site, a banner allows you to accept all cookies, reject non-essential cookies, or customize your preferences.</li>
              <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking essential cookies may impair the Service.</li>
              <li><strong>Opt-out links:</strong> For Google Analytics, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>

            <h2>5. Local Storage</h2>
            <p>
              In addition to cookies, we use browser local storage to store certain preferences and settings, such as your cookie consent choice (<code>notiproof-cookie-consent</code>). Local storage data persists until explicitly cleared by you or the application.
            </p>

            <h2>6. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective third party's privacy and cookie policies for more information.
            </p>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
            </p>

            <h2>8. Contact</h2>
            <p>
              If you have questions about our use of cookies, please contact us at <strong>privacy@notiproof.com</strong> or visit our <Link to="/company/contact/">contact page</Link>.
            </p>
            <p>
              For more information about how we handle your data, see our <Link to="/privacy-policy/">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
