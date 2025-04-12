import React from "react";

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Mindie Documentation
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          Get started with Mindie and learn how to integrate, use, and customize
          your journaling experience.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Getting Started
          </h2>
          <p className="text-indigo-300 mb-6">
            To get started with Mindie, create an account and begin journaling
            immediately. Our platform is intuitive and easy to navigate, but
            this guide will walk you through all the basics to help you get the
            most out of it.
          </p>
          <ul className="space-y-4 text-indigo-300">
            <li>
              <a href="#" className="hover:text-white">
                Account Setup
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Creating Your First Journal Entry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Understanding Privacy Settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Syncing Across Devices
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            API Integration
          </h2>
          <p className="text-indigo-300 mb-6">
            Mindie offers a comprehensive API to help you integrate journaling
            capabilities into your own applications. You can use the API to
            store journal entries, manage user accounts, and sync data
            seamlessly.
          </p>
          <ul className="space-y-4 text-indigo-300">
            <li>
              <a href="#" className="hover:text-white">
                API Authentication
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Endpoints for Entry Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Rate Limiting and Best Practices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Webhooks and Real-Time Data Sync
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Advanced Features
          </h2>
          <p className="text-indigo-300 mb-6">
            Mindie also offers advanced features that you can enable to further
            personalize your journaling experience. Whether it's automated
            journaling, mood tracking, or custom templates, our platform is
            flexible and designed to meet your needs.
          </p>
          <ul className="space-y-4 text-indigo-300">
            <li>
              <a href="#" className="hover:text-white">
                Custom Journal Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mood Tracking and Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Multi-Language Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Third-Party Integrations
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-indigo-300 mb-6">
            Need more help? Explore more detailed documentation or contact our
            support team.
          </p>
          <a
            href="mailto:support@mindie.com"
            className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg text-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
