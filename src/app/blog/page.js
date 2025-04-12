"use client";
import { useState } from "react";
import { Search, Clock, User, Calendar } from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Tutorials",
    "Productivity",
    "Creativity",
    "Updates",
    "Case Studies",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "7 Ways to Build a Consistent Journaling Habit",
      excerpt:
        "Discover proven techniques to make journaling a daily habit that sticks, even when life gets busy.",
      category: "Productivity",
      readTime: "5 min read",
      author: "Emma Rodriguez",
      date: "Apr 8, 2025",
      image: "/api/placeholder/800/500",
    },
    {
      id: 2,
      title: "Introducing Dark Mode and Custom Themes",
      excerpt:
        "We're excited to announce our latest update featuring dark mode and custom theme options for your journals.",
      category: "Updates",
      readTime: "3 min read",
      author: "David Chen",
      date: "Apr 2, 2025",
      image: "/api/placeholder/800/500",
    },
    {
      id: 3,
      title: "Using Journaling for Creative Writing Projects",
      excerpt:
        "Learn how to transform your daily journal entries into creative writing prompts and projects.",
      category: "Creativity",
      readTime: "7 min read",
      author: "Sarah Johnson",
      date: "Mar 25, 2025",
      image: "/api/placeholder/800/500",
    },
    {
      id: 4,
      title: "How to Use Mindie's Advanced Search Features",
      excerpt:
        "Master the powerful search capabilities to quickly find past entries and insights.",
      category: "Tutorials",
      readTime: "6 min read",
      author: "Michael King",
      date: "Mar 18, 2025",
      image: "/api/placeholder/800/500",
    },
    {
      id: 5,
      title: "How Writer Jane Smith Used Mindie to Complete Her Novel",
      excerpt:
        "A deep dive into how professional writer Jane Smith organized her novel writing process using Mindie.",
      category: "Case Studies",
      readTime: "8 min read",
      author: "Alex Thompson",
      date: "Mar 12, 2025",
      image: "/api/placeholder/800/500",
    },
    {
      id: 6,
      title: "Privacy-First Journaling: How We Protect Your Data",
      excerpt:
        "A behind-the-scenes look at the security measures we take to ensure your journal entries remain private.",
      category: "Updates",
      readTime: "4 min read",
      author: "Rachel Lee",
      date: "Mar 5, 2025",
      image: "/api/placeholder/800/500",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-indigo-800 text-indigo-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
            Our Blog
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300">
            Insights, Tips, and Updates
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            Explore articles on journaling, productivity, and creativity to
            enhance your writing journey.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-5 pl-12 bg-indigo-900/50 border border-indigo-700/50 rounded-full text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-indigo-400" />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    : "bg-indigo-900/30 text-indigo-200 hover:bg-indigo-800/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl overflow-hidden border border-indigo-800/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-indigo-300 text-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    <a
                      href={`#`}
                      className="hover:text-purple-300 transition-colors duration-300"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-indigo-200 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-700 mr-2 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-300" />
                      </div>
                      <span className="text-sm text-indigo-200">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center text-indigo-300 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br ">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-indigo-200 mb-8">
            Get the latest articles, tips, and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-3 px-4 bg-indigo-900/50 border border-indigo-700/50 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-white hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-xs text-indigo-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer would go here */}
    </main>
  );
}
