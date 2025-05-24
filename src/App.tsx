import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PhrasesContainer from './components/PhrasesContainer';
import Footer from './components/Footer';
import { phrases, categories } from './data/phrases';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Check for user's preferred color scheme
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);
  
  // Update body class and localStorage when dark mode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        onSearch={handleSearch}
      />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Learn French the Natural Way
            </h1>
            <p className="text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
              Master common French phrases with authentic pronunciation. 
              Listen, practice, and become confident in your French speaking skills.
            </p>
          </div>
        </section>
        
        <PhrasesContainer 
          phrases={phrases} 
          categories={categories}
          searchQuery={searchQuery}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;