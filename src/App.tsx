import React from 'react';
import { Heart, Book, Coffee, MessageCircle, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-serif font-bold text-gray-900">Learn with Babcia</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
              <a href="#learn" className="text-gray-700 hover:text-red-600 transition-colors">Start Learning</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Learn Polish with a Friendly Online Grandmother
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the warmth of learning Polish from Babcia, just like sitting in her cozy kitchen with a cup of tea and fresh pierogi.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all">
              Start Learning Today
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">About Our Program</h2>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
                <p className="text-gray-600">Learn at your own pace with caring guidance</p>
              </div>
              <div className="flex flex-col items-center">
                <Book className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
                <p className="text-gray-600">Experience Polish traditions and customs</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Practice conversation in a friendly environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">"Learning with Babcia feels like being part of a Polish family. Her patience and stories make every lesson special."</p>
              <p className="font-semibold text-gray-900">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-gray-700 mb-4">"I've tried many language apps, but nothing compares to the authentic experience of learning from Babcia. It's like having a Polish grandmother!"</p>
              <p className="font-semibold text-gray-900">- Michael Chen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="contact" className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Join Our Polish Family</h2>
            <p className="text-red-100 mb-8">Get started with your first lesson and receive a free Polish recipe book!</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <button
                  type="submit"
                  className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
                >
                  Join Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Learn with Babcia</h3>
              <p className="text-gray-400">Making Polish language learning warm and personal.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                <Mail className="inline h-5 w-5 mr-2" />
                babcia@learnwithbabcia.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Learn with Babcia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;