import React from "react";

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-5">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Mindie Roadmap
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          We’re constantly evolving and improving Mindie to offer the best
          journaling experience. Here’s a look at what’s coming next.
        </p>

        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Upcoming Features
          </h2>
          <ul className="space-y-6 text-indigo-300">
            <li>
              <h3 className="font-semibold text-white">Multi-Device Sync</h3>
              <p>
                Seamlessly sync your journals across devices for an
                uninterrupted experience.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">
                AI-Powered Writing Prompts
              </h3>
              <p>
                Get personalized journaling prompts powered by AI to help you
                get started with ease.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">
                Voice Memo Integration
              </h3>
              <p>
                Record voice memos and easily integrate them with your journal
                entries.
              </p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Future Ideas
          </h2>
          <ul className="space-y-6 text-indigo-300">
            <li>
              <h3 className="font-semibold text-white">Mood Tracker</h3>
              <p>
                A feature to track and analyze your mood over time, giving you
                better insights.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">Social Sharing</h3>
              <p>
                Share your journals with others on social media, while keeping
                your private entries secure.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">Customizable Themes</h3>
              <p>
                Choose from a variety of themes and create a personalized
                journaling experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
