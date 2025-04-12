"use client";
import { CheckCircle, Rocket, PenTool, Shield, Zap, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Features() {
  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className=" text-slate-200 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
            Powerful Features
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-purple-200 to-slate-300">
            Designed to Supercharge Your Journaling Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Whether you're a casual note-taker or a professional writer, our
            features are built to support your flow and grow with your goals.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: PenTool,
              title: "Intuitive Writing Tools",
              desc: "A clean, distraction-free editor with rich formatting, markdown, and themes tailored for comfort.",
            },
            {
              icon: Rocket,
              title: "Fast & Reliable Sync",
              desc: "Real-time sync across all your devices. Never lose a thought, even if you're offline.",
            },
            {
              icon: Shield,
              title: "Privacy-First Approach",
              desc: "End-to-end encryption keeps your journal safe. Your words belong to you — always.",
            },
            {
              icon: Zap,
              title: "Smart Prompts & Insights",
              desc: "AI-powered suggestions and mood tracking to help you reflect deeper and write consistently.",
            },
            {
              icon: Users,
              title: "Collaboration Ready",
              desc: "Invite trusted peers to co-author journals or comment on entries. Ideal for teams or group therapy.",
            },
            {
              icon: CheckCircle,
              title: "Seamless Export & Backup",
              desc: "Easily export your journals to PDF, DOCX, or JSON. Daily backups ensure nothing is ever lost.",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/40 hover:shadow-xl transition duration-300"
            >
              <f.icon className="w-8 h-8 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Section or App Screenshot Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Designed for Focus, Built for Depth
            </h2>
            <p className="text-slate-300 mb-6">
              We’ve combined elegance and performance to create a journaling
              experience that just feels right — every time you sit down to
              write.
            </p>
            <ul className="space-y-4 text-slate-300">
              <li>✔️ Clean, minimal interface</li>
              <li>✔️ Keyboard-first navigation</li>
              <li>✔️ Custom themes & font choices</li>
            </ul>
          </div>
          <div className="  h-64 md:h-96 rounded-xl shadow-2xl flex items-center justify-center text-slate-500 text-xl font-medium">
            {/* Replace with screenshot later */}
            <img
              src="/dashboard.jpeg"
              alt="Sophia Reynolds"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Everything you need. Nothing you don’t.
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to write your story? Start journaling today — it’s free.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  );
}
