"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {
      // Sign up user using Supabase Auth
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setError(authError.message); // Set error if auth fails
        setLoading(false);
        return;
      }

      const { user } = data; // Correctly extract user from data

      console.log("user>>>", user);

      if (user) {
        const { id, email_confirmed_at } = user;

        // If the email is not confirmed yet
        if (!email_confirmed_at) {
          alert("Please check your email to confirm your account!");
          router.push("/login");
          return;
        }

        // Insert username and user_id into the 'users' table
        const { error: userError } = await supabase
          .from("users")
          .insert([{ username, email, user_id: id }]);

        if (userError) {
          setError(userError.message); // Set error if insertion fails
        } else {
          alert("Signup successful! Check your email to confirm.");
          router.push("/login");
        }
      } else {
        setError("User object is undefined!");
      }
    } catch (error) {
      setError(error.message); // Catch any unexpected errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-950 px-4 pb-14">
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Create Your Account
        </h2>
        <p className="text-center text-indigo-200 text-sm mb-6">
          Start journaling your thoughts today ✨
        </p>

        {/* Display Error */}
        {error && (
          <div className="bg-red-500 text-white text-center py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-indigo-200">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-indigo-200">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-indigo-200">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-indigo-200">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-medium rounded-lg transition ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-indigo-300 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
