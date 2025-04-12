"use client";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 text-white px-4 py-32 flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl max-w-3xl w-full p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Security & Privacy
        </h1>
        <p className="text-indigo-200 text-center text-lg mb-8">
          We take your privacy seriously and prioritize your data protection.
        </p>
        <div className="space-y-6 text-indigo-200">
          <p>
            All your journal entries are encrypted and stored securely using
            industry-standard protocols.
          </p>
          <p>
            We never share your data with third parties. You’re in complete
            control of your content.
          </p>
          <p>
            Authentication is handled securely via Supabase, and we follow best
            practices to protect your account.
          </p>
          <p>
            Our team actively monitors for vulnerabilities and updates security
            patches regularly.
          </p>
        </div>
      </div>
    </div>
  );
}
