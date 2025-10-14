import React, { useState, useEffect } from "react";
import {
  Heart,
  Sparkles,
  MessageCircle,
  Share2,
  BookOpen,
  Calendar,
  User,
  Tag,
  Search,
  Filter,
  Sun,
  Moon,
  TrendingUp,
  ArrowLeft,
  ChevronRight,
  Star,
  BookmarkPlus,
  Clock,
  Bookmark,
  X,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Small Acts of Kindness",
    excerpt:
      "Discover how the tiniest gestures can create ripples of love that transform lives and communities.",
    content:
      "In a world that often feels rushed and disconnected, small acts of kindness serve as gentle reminders of our shared humanity. A warm smile, a helping hand, or a few words of encouragement can light up someone's entire day. These moments may seem insignificant, but they carry immense power. When we choose kindness, we not only uplift others but also enrich our own lives with meaning and connection.",
    category: "Kindness",
    author: "Sarah Heart",
    date: "2025-10-10",
    readTime: "3 min read",
    likes: 234,
    comments: 45,
    image: "gradient-pink",
    tags: ["kindness", "compassion", "community"],
    featured: false,
  },
  {
    id: 2,
    title: "You Are Stronger Than You Think",
    excerpt:
      "A reminder that within you lies an incredible reservoir of strength, resilience, and courage waiting to be discovered.",
    content:
      "Life's challenges often make us question our capabilities, but history has shown us time and again that humans possess remarkable resilience. You've already overcome so much to get where you are today. Every obstacle you've faced has added to your strength. Remember: diamonds are created under pressure, and you're becoming more brilliant with each challenge you overcome.",
    category: "Encouragement",
    author: "Marcus Hope",
    date: "2025-10-12",
    readTime: "4 min read",
    likes: 456,
    comments: 78,
    image: "gradient-blue",
    tags: ["strength", "resilience", "motivation"],
    featured: true,
  },
  {
    id: 3,
    title: "Love Yourself First",
    excerpt:
      "Self-love isn't selfish—it's the foundation upon which all other forms of love are built.",
    content:
      "The relationship you have with yourself sets the tone for every other relationship in your life. Self-love means accepting yourself completely, celebrating your uniqueness, and treating yourself with the same compassion you'd offer a dear friend. It's about recognizing your worth isn't dependent on external validation. When you truly love yourself, you radiate that love outward, creating a positive impact on everyone around you.",
    category: "Self-Love",
    author: "Luna Grace",
    date: "2025-10-13",
    readTime: "5 min read",
    likes: 567,
    comments: 92,
    image: "gradient-purple",
    tags: ["self-love", "wellness", "growth"],
    featured: true,
  },
  {
    id: 4,
    title: "The Beauty of New Beginnings",
    excerpt:
      "Every sunrise brings a fresh start, a new chapter, and unlimited possibilities for growth and transformation.",
    content:
      "There's something magical about new beginnings. They offer us a clean slate, a chance to rewrite our story, and an opportunity to become the person we've always dreamed of being. Don't let past failures define your future. Each day is a gift, a new page in your life's book. Embrace change with open arms, trust in your journey, and remember that it's never too late to start again.",
    category: "Hope",
    author: "David Bright",
    date: "2025-10-14",
    readTime: "4 min read",
    likes: 389,
    comments: 56,
    image: "gradient-orange",
    tags: ["hope", "new-beginnings", "transformation"],
    featured: false,
  },
  {
    id: 5,
    title: "The Gift of Gratitude",
    excerpt:
      "Cultivating gratitude transforms ordinary days into celebrations and routine jobs into joyful experiences.",
    content:
      "Gratitude is like a superpower that instantly shifts our perspective from what we lack to what we have. When we practice gratitude daily, we train our minds to notice beauty, appreciate blessings, and find joy in simple moments. Start small—be grateful for your breath, for sunshine, for the people who love you. Watch how this simple practice transforms your entire outlook on life and attracts more abundance.",
    category: "Gratitude",
    author: "Emma Joy",
    date: "2025-10-08",
    readTime: "3 min read",
    likes: 412,
    comments: 67,
    image: "gradient-green",
    tags: ["gratitude", "mindfulness", "happiness"],
    featured: false,
  },
  {
    id: 6,
    title: "Your Journey Is Unique",
    excerpt:
      "Stop comparing your chapter 1 to someone else's chapter 20. Your story is beautifully your own.",
    content:
      "In the age of social media, it's easy to fall into the comparison trap. But remember, everyone's journey is different, and that's what makes it beautiful. Your timeline is perfect for you. Your struggles are shaping you into who you're meant to become. Celebrate others' successes without diminishing your own progress. Trust your path, honor your pace, and know that you're exactly where you need to be.",
    category: "Inspiration",
    author: "Alex Rivers",
    date: "2025-10-09",
    readTime: "4 min read",
    likes: 523,
    comments: 89,
    image: "gradient-teal",
    tags: ["inspiration", "self-acceptance", "journey"],
    featured: true,
  },
];

export default function EnhancedBlog({ onBack }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];
  const featuredPosts = blogPosts.filter((post) => post.featured);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const getGradientClass = (gradient) => {
    const gradients = {
      "gradient-pink": "from-pink-400 via-rose-500 to-red-600",
      "gradient-blue": "from-blue-400 via-cyan-500 to-indigo-600",
      "gradient-purple": "from-purple-400 via-pink-500 to-rose-600",
      "gradient-orange": "from-orange-400 via-amber-500 to-yellow-600",
      "gradient-green": "from-emerald-400 via-green-500 to-teal-600",
      "gradient-teal": "from-teal-400 via-cyan-500 to-blue-600",
    };
    return gradients[gradient] || gradients["gradient-pink"];
  };

  const toggleLike = (postId, e) => {
    e.stopPropagation();
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleBookmark = (postId, e) => {
    e.stopPropagation();
    setBookmarkedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.4s ease-out; }
        .animate-heartBeat { animation: heartBeat 0.3s ease-in-out; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      `}</style>

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? "bg-slate-900" : "bg-gray-50"
        }`}
      >
        {/* Floating Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle bg-pink-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrollY > 50
              ? isDarkMode
                ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10"
                : "bg-white/95 backdrop-blur-xl shadow-lg"
              : ""
          } border-b ${isDarkMode ? "border-white/10" : "border-gray-200"}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {onBack && (
                  <button
                    onClick={onBack}
                    className={`p-2 rounded-xl transition-all hover:scale-110 ${
                      isDarkMode
                        ? "hover:bg-slate-800/50 text-cyan-400"
                        : "hover:bg-gray-100 text-blue-600"
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 blur-lg rounded-full ${
                        isDarkMode ? "bg-cyan-400/30" : "bg-blue-600/30"
                      }`}
                    />
                    <Heart
                      className={`relative w-10 h-10 ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      } animate-pulse`}
                      fill="currentColor"
                    />
                    <Sparkles className="w-4 h-4 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <div>
                    <h1
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Love & Light
                    </h1>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Words of encouragement & hope
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  isDarkMode
                    ? "bg-slate-800/50 hover:bg-slate-700/50"
                    : "bg-white hover:bg-gray-100"
                } shadow-lg`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 animate-fadeIn">
              <div
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
                } backdrop-blur-sm`}
              >
                <Star
                  className={`w-4 h-4 ${
                    isDarkMode ? "text-cyan-400" : "text-blue-600"
                  }`}
                  fill="currentColor"
                />
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-cyan-300" : "text-blue-700"
                  }`}
                >
                  Your daily dose of positivity awaits
                </span>
              </div>

              <div className="space-y-4">
                <h2
                  className={`text-5xl md:text-7xl font-bold leading-tight ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Spread Love,
                  <br />
                  <span
                    className={`bg-gradient-to-r ${
                      isDarkMode
                        ? "from-cyan-400 via-blue-500 to-purple-600"
                        : "from-blue-500 via-purple-500 to-pink-600"
                    } bg-clip-text text-transparent`}
                  >
                    Share Encouragement
                  </span>
                </h2>

                <p
                  className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  Inspiring stories, uplifting messages, and words of wisdom to
                  brighten your day and warm your heart ✨
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mt-10">
                <div className="relative group">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30"
                        : "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    }`}
                  />
                  <div className="relative">
                    <Search
                      className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 ${
                        isDarkMode ? "text-cyan-400" : "text-blue-500"
                      }`}
                    />
                    <input
                      type="text"
                      placeholder="Search for inspiration..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-14 pr-5 py-5 rounded-2xl border-2 focus:outline-none transition-all ${
                        isDarkMode
                          ? "bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-slate-800/70"
                          : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500/50"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                {[
                  { label: "Articles", value: blogPosts.length },
                  { label: "Categories", value: categories.length - 1 },
                  { label: "Readers", value: "12K+" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl ${
                      isDarkMode
                        ? "bg-slate-800/30 border border-slate-700/30"
                        : "bg-white/50 border border-gray-200/50"
                    } backdrop-blur-sm animate-scaleIn`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="relative px-6 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3
                  className={`text-2xl font-bold flex items-center gap-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Star
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                  />
                  Featured Posts
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                      isDarkMode
                        ? "bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50"
                        : "bg-white border border-gray-200 hover:border-blue-500/50"
                    } backdrop-blur-sm animate-slideIn`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
                          post.image
                        )} opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-20 h-20 text-white/40 group-hover:scale-125 transition-transform duration-500" />
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h4
                        className={`text-lg font-bold line-clamp-2 ${
                          isDarkMode
                            ? "text-white group-hover:text-cyan-400"
                            : "text-gray-900 group-hover:text-blue-600"
                        } transition-colors`}
                      >
                        {post.title}
                      </h4>
                      <p
                        className={`text-sm line-clamp-2 ${
                          isDarkMode ? "text-slate-400" : "text-gray-600"
                        }`}
                      >
                        {post.excerpt}
                      </p>
                      <div
                        className={`flex items-center justify-between pt-3 border-t ${
                          isDarkMode ? "border-slate-700" : "border-gray-200"
                        }`}
                      >
                        <span
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {post.readTime}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                            isDarkMode ? "text-cyan-400" : "text-blue-600"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="relative px-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                  isDarkMode
                    ? "bg-slate-800/50 border border-slate-700/50"
                    : "bg-white border border-gray-200"
                } backdrop-blur-sm`}
              >
                <Filter className="w-4 h-4" />
                <span
                  className={isDarkMode ? "text-slate-300" : "text-gray-600"}
                >
                  Filter
                </span>
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl transition-all hover:scale-105 whitespace-nowrap font-medium ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${
                          isDarkMode
                            ? "from-cyan-400 via-blue-500 to-indigo-600"
                            : "from-blue-500 via-purple-500 to-pink-600"
                        } text-white shadow-lg shadow-blue-500/30`
                      : `${
                          isDarkMode
                            ? "bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:bg-slate-800/50"
                            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                        } backdrop-blur-sm`
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div
              className={`mt-4 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="relative px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isDarkMode
                      ? "bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
                      : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-2xl"
                  } backdrop-blur-sm animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(
                        post.image
                      )} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-20 h-20 text-white/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    {post.likes > 400 && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/95 backdrop-blur-sm rounded-full shadow-lg">
                          <TrendingUp className="w-3 h-3 text-white" />
                          <span className="text-xs font-bold text-white">
                            Trending
                          </span>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={(e) => toggleBookmark(post.id, e)}
                      className={`absolute bottom-4 right-4 p-2 rounded-full transition-all backdrop-blur-sm ${
                        bookmarkedPosts.has(post.id)
                          ? "bg-yellow-400/95 scale-110"
                          : "bg-white/80 hover:bg-white/95 hover:scale-110"
                      }`}
                    >
                      {bookmarkedPosts.has(post.id) ? (
                        <Bookmark
                          className="w-4 h-4 text-gray-900"
                          fill="currentColor"
                        />
                      ) : (
                        <BookmarkPlus className="w-4 h-4 text-gray-900" />
                      )}
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3
                      className={`text-xl font-bold line-clamp-2 cursor-pointer transition-colors ${
                        isDarkMode
                          ? "text-white group-hover:text-cyan-400"
                          : "text-gray-900 group-hover:text-blue-600"
                      }`}
                      onClick={() => setSelectedPost(post)}
                    >
                      {post.title}
                    </h3>

                    <p
                      className={`line-clamp-3 text-sm ${
                        isDarkMode ? "text-slate-300" : "text-gray-600"
                      }`}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-white/10 text-gray-400"
                              : "bg-black/10 text-gray-600"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`flex items-center justify-between pt-4 border-t ${
                        isDarkMode ? "border-white/10" : "border-black/10"
                      }`}
                    >
                      <div className="flex items-center gap-4 text-sm">
                        <button
                          onClick={(e) => toggleLike(post.id, e)}
                          className={`flex items-center gap-1 transition-all hover:scale-110 ${
                            likedPosts.has(post.id) ? "animate-heartBeat" : ""
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              likedPosts.has(post.id)
                                ? "text-red-500"
                                : isDarkMode
                                ? "text-cyan-400"
                                : "text-blue-600"
                            }`}
                            fill={
                              likedPosts.has(post.id) ? "currentColor" : "none"
                            }
                          />
                          <span
                            className={
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }
                          >
                            {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                          </span>
                        </button>
                        <div className="flex items-center gap-1">
                          <MessageCircle
                            className={`w-4 h-4 ${
                              isDarkMode ? "text-cyan-400" : "text-blue-600"
                            }`}
                          />
                          <span
                            className={
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }
                          >
                            {post.comments}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock
                          className={`w-3 h-3 ${
                            isDarkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <BookOpen
                  className={`w-16 h-16 mx-auto mb-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  No articles found
                </h3>
                <p className={isDarkMode ? "text-slate-300" : "text-gray-600"}>
                  Try adjusting your search or filter to find what you're
                  looking for
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`relative border-t backdrop-blur-sm py-12 ${
            isDarkMode ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart
                    className={`w-8 h-8 ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                    fill="currentColor"
                  />
                  <span
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Love & Light
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Spreading positivity and encouragement, one story at a time.
                </p>
              </div>

              <div className="space-y-3">
                <h4
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories
                    .filter((c) => c !== "All")
                    .map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`text-sm px-3 py-1 rounded-lg transition-all hover:scale-105 ${
                          isDarkMode
                            ? "bg-slate-800/50 text-gray-400 hover:text-cyan-400"
                            : "bg-gray-100 text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Stats
                </h4>
                <div className="space-y-2 text-sm">
                  <div
                    className={`flex items-center justify-between ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span>Total Articles</span>
                    <span className="font-bold">{blogPosts.length}</span>
                  </div>
                  <div
                    className={`flex items-center justify-between ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span>Liked Posts</span>
                    <span className="font-bold">{likedPosts.size}</span>
                  </div>
                  <div
                    className={`flex items-center justify-between ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span>Bookmarked</span>
                    <span className="font-bold">{bookmarkedPosts.size}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`pt-8 border-t text-center space-y-4 ${
                isDarkMode ? "border-white/10" : "border-black/10"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Made with
                </span>
                <Heart
                  className="w-4 h-4 text-red-400 animate-pulse"
                  fill="currentColor"
                />
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  for spreading positivity
                </span>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                © 2025 Love & Light Blog. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Post Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${
                isDarkMode
                  ? "bg-slate-800/95 border-slate-700/50"
                  : "bg-white border-gray-200"
              } backdrop-blur-xl scrollbar-hide animate-scaleIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b backdrop-blur-xl ${
                  isDarkMode
                    ? "bg-slate-800/95 border-slate-700/50"
                    : "bg-white/95 border-gray-200"
                }`}
              >
                <span
                  className={`text-lg font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Article
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className={`p-2 rounded-xl transition-all hover:scale-110 hover:rotate-90 ${
                    isDarkMode
                      ? "hover:bg-slate-700/50 text-gray-400"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div
                className={`h-48 bg-gradient-to-br ${getGradientClass(
                  selectedPost.image
                )} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-white/20 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${
                          2 + Math.random() * 2
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random()}s`,
                      }}
                    />
                  ))}
                </div>
                <BookOpen className="w-24 h-24 text-white/60 relative z-10" />
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r ${
                      isDarkMode
                        ? "from-cyan-400 via-blue-500 to-indigo-600"
                        : "from-blue-500 via-purple-500 to-pink-600"
                    } text-white shadow-lg`}
                  >
                    {selectedPost.category}
                  </span>
                  {selectedPost.likes > 400 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-full bg-orange-500 text-white">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                <h2
                  className={`text-3xl md:text-4xl font-bold leading-tight ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {selectedPost.title}
                </h2>

                <div
                  className={`flex flex-wrap items-center gap-4 text-sm pb-6 border-b ${
                    isDarkMode
                      ? "text-gray-400 border-slate-700"
                      : "text-gray-500 border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  <p>{selectedPost.content}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedPost.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg ${
                        isDarkMode
                          ? "bg-slate-700/50 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center gap-4 pt-6 border-t ${
                    isDarkMode ? "border-slate-700" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={(e) => toggleLike(selectedPost.id, e)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg ${
                      likedPosts.has(selectedPost.id)
                        ? "bg-red-500 text-white"
                        : `bg-gradient-to-r ${
                            isDarkMode
                              ? "from-cyan-400 via-blue-500 to-indigo-600"
                              : "from-blue-500 via-purple-500 to-pink-600"
                          } text-white`
                    }`}
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={
                        likedPosts.has(selectedPost.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                    <span className="font-medium">
                      {selectedPost.likes +
                        (likedPosts.has(selectedPost.id) ? 1 : 0)}
                    </span>
                  </button>

                  <button
                    onClick={(e) => toggleBookmark(selectedPost.id, e)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 ${
                      bookmarkedPosts.has(selectedPost.id)
                        ? "bg-yellow-400 text-gray-900"
                        : isDarkMode
                        ? "bg-slate-700/50 border border-slate-600/50 text-white hover:bg-slate-700"
                        : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
                    } shadow-lg`}
                  >
                    {bookmarkedPosts.has(selectedPost.id) ? (
                      <Bookmark className="w-5 h-5" fill="currentColor" />
                    ) : (
                      <BookmarkPlus className="w-5 h-5" />
                    )}
                    <span className="font-medium">
                      {bookmarkedPosts.has(selectedPost.id) ? "Saved" : "Save"}
                    </span>
                  </button>

                  <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 ${
                      isDarkMode
                        ? "bg-slate-700/50 border border-slate-600/50 text-white hover:bg-slate-700"
                        : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
                    } shadow-lg`}
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
