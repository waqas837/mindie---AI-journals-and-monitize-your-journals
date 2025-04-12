const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4 pt-14 pb-7">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Cookie Policy
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          We use cookies to enhance your experience. This Cookie Policy explains
          how we use them.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            What Are Cookies?
          </h2>
          <p className="text-indigo-300 mb-6">
            Cookies are small text files stored on your device when you visit a
            website. They help the website remember your preferences and provide
            a more personalized experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-6">
            Why Do We Use Cookies?
          </h2>
          <p className="text-indigo-300 mb-6">
            We use cookies to improve your experience on our site, such as
            remembering your preferences and analyzing how you use our website.
            This helps us provide better content and services to our users.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-6">
            Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Essential Cookies
              </h3>
              <p className="text-indigo-300">
                These cookies are necessary for the website to function. They
                include features like keeping you logged in and enabling the use
                of secure areas of the website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Performance Cookies
              </h3>
              <p className="text-indigo-300">
                These cookies collect information about how you use the website
                (e.g., pages visited, links clicked) to help us improve the
                site's performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Functionality Cookies
              </h3>
              <p className="text-indigo-300">
                These cookies remember your preferences and allow us to
                customize your experience, such as language settings and
                personalization options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Targeting Cookies
              </h3>
              <p className="text-indigo-300">
                These cookies are used to deliver personalized advertisements
                based on your browsing history or actions. We may share this
                information with third-party advertisers.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-6">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-indigo-300 mb-6">
            You can control or disable cookies through your browser settings.
            However, please note that some features of our website may not
            function properly if you disable cookies.
          </p>

          <h2 className="text-2xl font-semibold text-white mb-6">
            Changes to This Cookie Policy
          </h2>
          <p className="text-indigo-300 mb-6">
            We may update our Cookie Policy from time to time. Any changes will
            be posted on this page with an updated revision date. Please review
            this policy periodically to stay informed.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/terms"
            className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg text-lg"
          >
            Learn More About Our Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
