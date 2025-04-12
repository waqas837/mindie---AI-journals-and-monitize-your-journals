"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { ArrowRight, Star, Shield, Cloud, PenTool, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        router.push("/dashboard");
      }
    };
    getSession();
  }, [router]);

  return (
    <main className="bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 min-h-screen text-white pt-10">
      {/* Hero Section - Enhanced with more elegant gradient */}
      <section className="flex items-center justify-center min-h-screen px-6 py-12 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-600 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>

        <div className="text-center max-w-3xl relative z-10">
          <div className="mb-4 inline-block">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-1 rounded-full text-sm font-medium">
              The Journal of the Future
            </span>
          </div>
          <h1 className="text-6xl font-extrabold leading-tight tracking-wide mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300">
            Unlock Your Creativity with Mindie
          </h1>
          <p className="text-xl leading-relaxed mb-10 text-indigo-100">
            Dive into a world where your thoughts, ideas, and experiences are
            just a click away. Built with cutting-edge technology to keep your
            work organized, secure, and synced across all your devices.
          </p>
          <div className="flex justify-center gap-8">
            {!user && (
              <>
                <a
                  href="/login"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-transparent border-2 border-purple-400 text-white py-4 px-8 rounded-xl text-lg font-medium transition duration-300 ease-in-out transform hover:bg-purple-500 hover:border-purple-500 hover:scale-105 shadow-lg flex items-center"
                >
                  Sign Up <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with better styling */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-purple-950">
        <div className="max-w-6xl mx-auto text-center text-white px-6">
          <span className="bg-purple-800 text-purple-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
            Premium Features
          </span>
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
            Why Choose Mindie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 border border-purple-700/30">
              <div className="bg-purple-700/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                Cloud-Synced Notes
              </h3>
              <p className="text-indigo-200">
                Access your journal anytime, anywhere. All your thoughts
                securely stored in the cloud with real-time synchronization.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 border border-purple-700/30">
              <div className="bg-purple-700/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                User-Centric Interface
              </h3>
              <p className="text-indigo-200">
                Designed with simplicity and efficiency in mind. A smooth user
                experience with intuitive controls and elegant design.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 border border-purple-700/30">
              <div className="bg-purple-700/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">
                Privacy First
              </h3>
              <p className="text-indigo-200">
                Your thoughts are yours. We take security seriously with
                end-to-end encryption ensuring your privacy is never
                compromised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New section */}
      <section className="py-20 bg-gradient-to-b from-purple-950 to-indigo-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-900 text-blue-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
              User Stories
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1st Testimonial */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-indigo-800/30">
              <div className="flex items-center mb-4 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-indigo-100 mb-6">
                "Mindie has completely transformed the way I organize my
                thoughts. The interface is elegant and the cloud sync is
                flawless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="/1.jpg"
                    alt="Alexandr Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Alexandr Chen</h4>
                  <p className="text-indigo-300 text-sm">Creative Writer</p>
                </div>
              </div>
            </div>

            {/* 2nd Testimonial */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-indigo-800/30">
              <div className="flex items-center mb-4 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-indigo-100 mb-6">
                "The privacy features are what sold me. I can write freely
                knowing my personal thoughts are secure and protected."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="/2.jpg"
                    alt="Marcus Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Marcus Johnson</h4>
                  <p className="text-indigo-300 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* 3rd Testimonial */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl backdrop-blur-sm border border-indigo-800/30">
              <div className="flex items-center mb-4 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-indigo-100 mb-6">
                "I've tried many journaling apps, but Mindie stands out with its
                beautiful design and intuitive functionality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src="/3.jpg"
                    alt="Sophia Reynolds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sophia Reynolds</h4>
                  <p className="text-indigo-300 text-sm">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - New section */}
      <section className="py-24 bg-gradient-to-b from-indigo-950 to-blue-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-indigo-800 text-indigo-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
              By The Numbers
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-blue-200">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <p className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                50K+
              </p>
              <p className="text-blue-200">Active Users</p>
            </div>
            <div className="text-center p-6">
              <p className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                2M+
              </p>
              <p className="text-blue-200">Journal Entries</p>
            </div>
            <div className="text-center p-6">
              <p className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                99.9%
              </p>
              <p className="text-blue-200">Uptime</p>
            </div>
            <div className="text-center p-6">
              <p className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                4.9/5
              </p>
              <p className="text-blue-200">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase - New detailed section */}
      <section className="py-24 bg-gradient-to-br from-blue-950 to-indigo-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-800 text-blue-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
              Powerful Tools
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
              Supercharge Your Journaling
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Mindie comes packed with features designed to enhance your writing
              experience and help you capture your thoughts effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-800/30 flex items-start">
              <div className="bg-blue-700/30 w-12 h-12 rounded-lg flex items-center justify-center mr-6 shrink-0">
                <PenTool className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Rich Text Editing
                </h3>
                <p className="text-blue-200">
                  Express yourself with formatting options including headings,
                  lists, quotes, and more. Add images and attachments to capture
                  the full context of your thoughts.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-800/30 flex items-start">
              <div className="bg-blue-700/30 w-12 h-12 rounded-lg flex items-center justify-center mr-6 shrink-0">
                <Users className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Collaboration Options
                </h3>
                <p className="text-blue-200">
                  Share specific journals with friends or colleagues when
                  needed. Control privacy settings for each journal with
                  granular permissions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-800/30 flex items-start">
              <div className="bg-blue-700/30 w-12 h-12 rounded-lg flex items-center justify-center mr-6 shrink-0">
                <Cloud className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Offline Access
                </h3>
                <p className="text-blue-200">
                  Keep writing even without internet connection. Your changes
                  will automatically sync once you're back online.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-2xl border border-blue-800/30 flex items-start">
              <div className="bg-blue-700/30 w-12 h-12 rounded-lg flex items-center justify-center mr-6 shrink-0">
                <Shield className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Advanced Security
                </h3>
                <p className="text-blue-200">
                  Two-factor authentication, biometric login, and end-to-end
                  encryption keep your personal thoughts and reflections
                  completely private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-950 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-700 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200">
            Ready to Start Your Journaling Journey?
          </h2>
          <p className="text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
            Join thousands of others who trust Mindie to organize their ideas,
            memories, and experiences. Start for free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-8 rounded-xl text-lg font-medium shadow-lg hover:from-purple-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              Get Started For Free <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 border-indigo-400 text-white py-4 px-8 rounded-xl text-lg font-medium transition duration-300 ease-in-out transform hover:bg-indigo-900/30 hover:scale-105 flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
          <p className="mt-8 text-indigo-300 text-sm">
            No credit card required. Free forever with premium options
            available.
          </p>
        </div>
      </section>
    </main>
  );
}
