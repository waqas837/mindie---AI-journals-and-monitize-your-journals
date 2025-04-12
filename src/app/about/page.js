"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-950 px-4 pt-20">
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl text-white">
        <h1 className="text-4xl font-bold text-center mb-4">About MindWave</h1>
        <p className="text-indigo-200 text-center text-lg mb-8">
          A minimal space to clear your thoughts, one journal entry at a time.
        </p>

        <div className="space-y-4 text-indigo-100 text-base leading-relaxed">
          <p>
            MindWave is a modern journaling app designed to help you stay in
            tune with your mind. Whether you're reflecting on your day, tracking
            habits, or just letting thoughts flow, we've created a calming and
            private space just for you.
          </p>

          <p>
            Built with ❤️ using Next.js, Supabase, and Tailwind CSS — every part
            of this app is made with simplicity and mental clarity in mind.
          </p>

          <p>
            Your data is secure, your space is yours, and your words are never
            judged. We're here to support mindful living through minimal,
            elegant tech.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-indigo-300">
          &copy; {new Date().getFullYear()} MindWave. All rights reserved.
        </div>
      </div>
    </div>
  );
}
