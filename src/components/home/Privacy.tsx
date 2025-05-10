import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm mb-8 text-gray-400 text-center">Last Updated: May 6, 2025</p>

        <div className="space-y-8 text-gray-200">
          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">1. Information Collection</h2>
            <p>
              We collect information you provide during account registration, gameplay, transactions, and through cookies or analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">2. Use of Data</h2>
            <p>
              Data is used to improve user experience, process payments, ensure fair play, comply with regulations, and communicate important updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">3. Data Sharing</h2>
            <p>
              We do not sell personal data. Data may be shared with payment processors or regulatory authorities when required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">4. Cookies and Analytics</h2>
            <p>
              Cookies help enhance functionality and personalize content. Third-party analytics tools may track anonymized usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">5. Security</h2>
            <p>
              We implement technical and organizational measures to protect your data, but no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">6. Your Rights</h2>
            <p>
              You can request to access, update, or delete your personal data by contacting our support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the platform implies consent to the latest version.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>By using this platform, you acknowledge and agree to this Privacy Policy.</p>
          <div className="mt-6">
            <Link to="/" className="text-orange-400 hover:underline">Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}