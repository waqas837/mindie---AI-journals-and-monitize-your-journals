const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4 pt-14">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Terms of Service
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          Please review our terms of service to understand the rules and
          guidelines that govern your use of Mindie.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            1. Acceptance of Terms
          </h2>
          <p className="text-indigo-300 mb-6">
            By using Mindie, you agree to be bound by these Terms of Service and
            our Privacy Policy. If you do not agree to these terms, you should
            not use the platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            2. User Accounts
          </h2>
          <p className="text-indigo-300 mb-6">
            To access certain features of Mindie, you must create an account.
            You agree to provide accurate, current, and complete information
            during registration and to update it as necessary.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            3. Use of the Platform
          </h2>
          <p className="text-indigo-300 mb-6">
            You agree to use Mindie in compliance with all applicable laws and
            not to engage in any prohibited activities, including but not
            limited to:
          </p>
          <ul className="list-disc list-inside text-indigo-300 mb-6">
            <li>Harassing or abusing others</li>
            <li>Uploading malicious content or malware</li>
            <li>Spamming or distributing unsolicited messages</li>
            <li>Engaging in illegal or fraudulent activity</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            4. Privacy and Security
          </h2>
          <p className="text-indigo-300 mb-6">
            We value your privacy and take appropriate measures to protect your
            personal information. Please refer to our Privacy Policy for
            detailed information on how we handle your data.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            5. Termination of Account
          </h2>
          <p className="text-indigo-300 mb-6">
            We reserve the right to suspend or terminate your account if you
            violate these Terms of Service or engage in activities harmful to
            the platform or other users.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            6. Limitation of Liability
          </h2>
          <p className="text-indigo-300 mb-6">
            To the fullest extent permitted by law, Mindie shall not be liable
            for any direct, indirect, incidental, or consequential damages
            arising from your use of the platform, including but not limited to
            data loss or interruptions to service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            7. Modifications to Terms
          </h2>
          <p className="text-indigo-300 mb-6">
            We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and your continued use of the platform
            constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            8. Governing Law
          </h2>
          <p className="text-indigo-300 mb-6">
            These Terms of Service are governed by and construed in accordance
            with the laws of the jurisdiction in which our company operates,
            without regard to its conflict of law principles.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-indigo-300 mb-6">
            If you have any questions regarding these terms, feel free to
            contact our support team.
          </p>
          <a
            href="/contact"
            className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg text-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
