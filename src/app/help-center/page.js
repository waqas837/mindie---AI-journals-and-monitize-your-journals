const HelpCenterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Help Center
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          Find answers to your questions or contact us for further support.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white">
                How do I create an account?
              </h3>
              <p className="text-indigo-300">
                To create an account, click the "Sign Up" button on the login
                page and enter your email address, a username, and a password.
                You’ll receive a confirmation email to verify your account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                What should I do if I forgot my password?
              </h3>
              <p className="text-indigo-300">
                If you've forgotten your password, click on the "Forgot
                Password" link on the login page. We will send you a link to
                reset your password.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                How do I delete my account?
              </h3>
              <p className="text-indigo-300">
                To delete your account, please contact our support team through
                the form below, and we will assist you in removing your account
                permanently.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                How can I contact customer support?
              </h3>
              <p className="text-indigo-300">
                You can contact our customer support team by filling out the
                contact form below or emailing us at support@mindie.com. We're
                happy to assist you with any issues or questions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-indigo-300 mb-6">
            If you couldn't find an answer in our FAQ, reach out to our team,
            and we'll be happy to assist you further.
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

export default HelpCenterPage;
