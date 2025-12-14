import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="text-xl font-bold text-purple-400">TierzeroAi</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
         <Link to="/chat" className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full font-medium inline-block">
             Chat Now  ✨
            </Link>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-20 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your <span className="text-blue-400">AI College</span><br />
            Senior is Here
          </h1>
          <p className="text-gray-400 mt-6 max-w-xl">
            Navigate college like a pro from day one. Get personalized strategies,
            career advice, and real-world wisdom from an AI that actually gets it.
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/chat" className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-full font-medium inline-block">
              Start Chatting ✨
            </Link>
            <button className="border border-white/20 px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex gap-10 mt-10 text-sm text-gray-300">
            <div><span className="text-white font-bold">120+</span><br />Students Helped</div>
            <div><span className="text-white font-bold">24/7</span><br />Available</div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
            alt="AI visual"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Us?</h2>
        <p className="text-gray-400 text-center mt-2">Everything you need to know about college life</p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white/5 p-6 rounded-2xl">
            <div className="text-blue-400 text-2xl mb-4">🤖</div>
            <h3 className="font-semibold text-lg">Smart AI Mentor</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Instant advice powered by AI trained on real college experiences.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl">
            <div className="text-purple-400 text-2xl mb-4">📈</div>
            <h3 className="font-semibold text-lg">Career Strategies</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Build the right skills, make connections, and land dream roles.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl">
            <div className="text-green-400 text-2xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg">Instant Answers</h3>
            <p className="text-gray-400 mt-2 text-sm">
              No waiting. Real-time responses to all your college questions.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Powered by Innovation</h2>
        <p className="text-gray-400 text-center mt-2">Cutting-edge technology meets real-world experience</p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <img
            className="rounded-2xl"
            src="https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="AI Technology"
          />
          <img
            className="rounded-2xl"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Future Ready"
          />
          <img
            className="rounded-2xl"
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="Smart Learning"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24 bg-gradient-to-r from-purple-900/40 to-blue-900/40 text-center">
        <h2 className="text-4xl font-bold">Ready to Level Up Your College Game?</h2>
        <p className="text-gray-300 mt-4">
          Join thousands of students already crushing it with TierzeroAi
        </p>
         <Link to="/chat" className="bg-gradient-to-r from-purple-500 to-blue-500 gap-5 px-6 py-3 rounded-full font-medium inline-block">
              Start NOW ✨
            </Link>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/10 text-center text-sm text-gray-400">
        <div className="font-semibold text-purple-400 mb-2">TierzeroAi</div>
        <p>Built with care by Manas Jain , Malhar Joshi and Mehak Chugh</p>
        <p className="mt-1">© 2025 TierzeroAi. All rights reserved.</p>
      </footer>
    </div>
  );
}
