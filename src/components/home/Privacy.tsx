import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm mb-8 text-gray-300 text-center">Last Updated: April 26, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">1. Introduction</h2>
            <p className="mb-3 text-gray-200">
              Welcome to [Your Company Name]'s Privacy Policy. Your privacy is important to us, and we are committed to
              protecting the personal information you share with us.
            </p>
            <p className="text-gray-200">
              This Privacy Policy explains how we collect, use, and protect your data when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">2. Information We Collect</h2>
            <p className="mb-3 text-gray-200">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-200 space-y-2">
              <li>Personal Information (e.g., name, email address, phone number)</li>
              <li>Account Information (e.g., username, password)</li>
              <li>Payment Information (e.g., billing address, payment details)</li>
              <li>Usage Data (e.g., pages visited, time spent on our platform)</li>
              <li>Device Information (e.g., IP address, browser type, operating system)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">3. How We Use Your Information</h2>
            <p className="mb-3 text-gray-200">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-200 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve, personalize, and expand our platform</li>
              <li>Process transactions and send related information</li>
              <li>Communicate with you, including for customer service and promotional purposes</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">4. Sharing Your Information</h2>
            <p className="mb-3 text-gray-200">
              We do not sell or rent your personal information to third parties. However, we may share your information
              with:
            </p>
            <ul className="list-disc pl-6 mb-3 text-gray-200 space-y-2">
              <li>Service providers who assist in operating our platform</li>
              <li>Law enforcement agencies, if required by law</li>
              <li>Business partners, but only with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">5. Data Security</h2>
            <p className="mb-3 text-gray-200">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, disclosure, alteration, and destruction.
            </p>
            <p className="text-gray-200">
              However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">6. Your Rights</h2>
            <p className="mb-3 text-gray-200">
              You have the right to access, update, or delete your personal information. You may also opt-out of
              receiving promotional communications at any time.
            </p>
            <p className="text-gray-200">
              To exercise any of these rights, please contact us at the details provided below.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">7. Cookies and Tracking Technologies</h2>
            <p className="mb-3 text-gray-200">
              We use cookies and similar technologies to enhance your experience on our platform. Cookies help us
              understand user behavior, improve functionality, and personalize your experience.
            </p>
            <p className="text-gray-200">
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">8. Changes to This Privacy Policy</h2>
            <p className="mb-3 text-gray-200">
              We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Last
              Updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-gray-200">
              Your continued use of our platform after changes means you accept the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">9. Contact Us</h2>
            <p className="text-gray-200">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <address className="mt-3 not-italic text-gray-300">
              Email: privacy@yourcompany.com
              <br />
              Phone: (123) 456-7890
              <br />
              Address: 123 Main Street, City, State, ZIP
            </address>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            By using our platform, you consent to our Privacy Policy and agree to its terms.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-orange-300 hover:text-orange-200 underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
