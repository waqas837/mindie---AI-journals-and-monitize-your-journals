"use client";

export default function LearnMorePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-950 px-4 pt-20">
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Learn More About MindJournal
        </h1>
        <p className="text-center text-indigo-200 text-sm mb-6">
          Discover how our platform helps you grow through mindful reflection.
        </p>

        <div className="space-y-4 text-white text-sm leading-relaxed">
          <p>
            <strong className="text-purple-300">MindJournal</strong> is more
            than just a journal — it’s your personal space to grow, reflect, and
            track your mental clarity over time.
          </p>

          <p>
            Built with simplicity and privacy in mind, it allows you to write
            freely without distractions, while offering tools to help you stay
            consistent.
          </p>

          <p>
            Whether you're looking to build self-awareness, form new habits, or
            just process your thoughts, MindJournal provides a calming and
            secure space to do so.
          </p>

          <p>
            We're committed to making journaling accessible and meaningful for
            everyone. Your data is encrypted and only accessible by you.
          </p>

          <p>
            Ready to start your journey?{" "}
            <a
              href="/signup"
              className="text-purple-400 underline hover:text-purple-300"
            >
              Create your account
            </a>{" "}
            or{" "}
            <a
              href="/contact"
              className="text-purple-400 underline hover:text-purple-300"
            >
              contact us
            </a>{" "}
            to learn more.
          </p>
        </div>
      </div>
    </div>
  );
}
