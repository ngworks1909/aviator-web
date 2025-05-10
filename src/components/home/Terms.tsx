import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
        <p className="text-sm mb-8 text-gray-400 text-center">Last Updated: May 6, 2025</p>

        <div className="space-y-8 text-gray-200">
          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Aviator game platform, you agree to be bound by these Terms and Conditions. If you do not agree, you may not access or use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">2. Eligibility</h2>
            <p>
              Users must be at least 18 years of age (or the legal gambling age in their jurisdiction) to access or use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">3. Game Rules</h2>
            <p>
              The Aviator game involves betting on when to cash out before a multiplier crashes. Outcomes are determined by a provably fair algorithm. Users accept all risks associated with the game.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">4. Account and Funds</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account credentials. Winnings and losses are final once confirmed. Withdrawals and deposits must comply with our KYC and anti-fraud policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">5. Responsible Gambling</h2>
            <p>
              Gambling should be for entertainment purposes only. Users are encouraged to set limits and seek help if they suspect problem gambling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">6. Prohibited Use</h2>
            <p>
              Users must not engage in cheating, abuse, collusion, or use of bots/scripts to manipulate outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">7. Modifications</h2>
            <p>
              These Terms may be modified at any time. Continued use of the platform constitutes acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-orange-400 mb-4">8. Contact</h2>
            <p>
              For questions or concerns, please contact our support team through the help section on the platform.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>By playing, you confirm that you have read and agree to these Terms.</p>
          <div className="mt-6">
            <Link to="/" className="text-orange-400 hover:underline">Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}