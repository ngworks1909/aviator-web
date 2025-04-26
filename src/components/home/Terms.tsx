import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
        <p className="text-sm mb-8 text-gray-300 text-center">Last Updated: April 26, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">1. Introduction</h2>
            <p className="mb-3 text-gray-200">
              Welcome to our platform. These Terms and Conditions govern your use of our website, services, and
              products. By accessing or using our platform, you agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-200">
              Please read these Terms carefully before using our services. If you do not agree with any part of these
              Terms, you must not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">2. Definitions</h2>
            <p className="mb-3 text-gray-200">
              "Company", "we", "us", or "our" refers to [Your Company Name], the owner and operator of this platform.
            </p>
            <p className="mb-3 text-gray-200">"Platform" refers to our website, applications, and services.</p>
            <p className="mb-3 text-gray-200">
              "User", "you", or "your" refers to individuals who access or use our platform.
            </p>
            <p className="text-gray-200">
              "Content" refers to any information, text, graphics, photos, or other materials uploaded, downloaded, or
              appearing on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">3. Account Registration</h2>
            <p className="mb-3 text-gray-200">
              To access certain features of our platform, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process.
            </p>
            <p className="mb-3 text-gray-200">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p className="text-gray-200">
              We reserve the right to suspend or terminate your account if any information provided during registration
              is inaccurate, untrue, or incomplete.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">4. User Conduct</h2>
            <p className="mb-3 text-gray-200">You agree not to use our platform to:</p>
            <ul className="list-disc pl-6 mb-3 text-gray-200 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or other harmful software</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Engage in any activity that interferes with or disrupts the functioning of our platform</li>
            </ul>
            <p className="text-gray-200">
              We reserve the right to remove any content that violates these Terms or that we find objectionable for any
              reason.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">5. Intellectual Property</h2>
            <p className="mb-3 text-gray-200">
              All content on our platform, including but not limited to text, graphics, logos, icons, images, audio
              clips, and software, is the property of our company or our content suppliers and is protected by
              international copyright laws.
            </p>
            <p className="text-gray-200">
              You may not modify, reproduce, distribute, or create derivative works based on any content found on our
              platform without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">6. Privacy Policy</h2>
            <p className="mb-3 text-gray-200">
              Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and
              disclose information about you.
            </p>
            <p className="text-gray-200">
              By using our platform, you consent to our collection and use of personal data as outlined in our Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">7. Limitation of Liability</h2>
            <p className="mb-3 text-gray-200">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly.
            </p>
            <p className="text-gray-200">
              Our platform is provided on an "as is" and "as available" basis. We make no warranties, expressed or
              implied, regarding the operation of our platform or the information, content, or materials included on our
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">8. Modifications to Terms</h2>
            <p className="mb-3 text-gray-200">
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
              updating the "Last Updated" date at the top of these Terms.
            </p>
            <p className="text-gray-200">
              Your continued use of our platform following the posting of revised Terms means that you accept and agree
              to the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">9. Governing Law</h2>
            <p className="text-gray-200">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-300">10. Contact Information</h2>
            <p className="text-gray-200">If you have any questions about these Terms, please contact us at:</p>
            <address className="mt-3 not-italic text-gray-300">
              Email: support@yourcompany.com
              <br />
              Phone: (123) 456-7890
              <br />
              Address: 123 Main Street, City, State, ZIP
            </address>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            By using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms
            and Conditions.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-orange-300 hover:text-orange-200 underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
