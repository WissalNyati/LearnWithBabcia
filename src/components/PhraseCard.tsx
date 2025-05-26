import React, { useState } from 'react';
import { Phrase } from '../types';
import AudioPlayer from './AudioPlayer';

interface PhraseCardProps {
  phrase: Phrase;
  currentlyPlaying: string | null;
  onPlayPause: (id: string) => void;
  isSeen: boolean;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ 
  phrase, 
  currentlyPlaying, 
  onPlayPause,
  isSeen
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPlaying = currentlyPlaying === phrase.id;
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const handlePlayPause = () => {
    onPlayPause(phrase.id);
  };

  // Get category emoji
  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      'Introduction': '👋',
      'Personal Information': '👤',
      'School': '🏫',
      'Activities': '🎨',
      'School Rules': '📋',
      'School Supplies': '📚',
      'Sports': '⚽',
      'Preferences': '❤️',
      'Study': '📝',
      'Holidays': '✈️',
      'Personal Description': '👀',
      'Family': '👨‍👩‍👧‍👦',
      'Days of the Week': '📅',
      'Months': '📆',
      'Seasons': '🌤️'
    };
    return emojiMap[category] || '📝';
  };

  // Get phrase-specific emoji
  const getPhraseEmoji = (phrase: Phrase) => {
    if (phrase.emoji) return phrase.emoji;
    
    // Default emojis for specific phrases
    if (phrase.french.includes('printemps')) return '🌸';
    if (phrase.french.includes('été')) return '☀️';
    if (phrase.french.includes('automne')) return '🍂';
    if (phrase.french.includes('hiver')) return '❄️';
    if (phrase.french.includes('foot')) return '⚽';
    if (phrase.french.includes('théâtre')) return '🎭';
    if (phrase.french.includes('livre')) return '📚';
    if (phrase.french.includes('sœur')) return '👧';
    if (phrase.french.includes('frère')) return '👦';
    
    return getCategoryEmoji(phrase.category);
  };
  
  return (
    <div 
      className={`
        relative bg-white dark:bg-gray-800 rounded-xl shadow-lg
        transition-all duration-300 transform hover:scale-105 hover:shadow-xl
        ${isFlipped ? 'border-4 border-blue-400 dark:border-blue-500' : 'border-4 border-transparent'} 
        hover:rotate-1
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {['🎉', '✨', '🌟', '🎊', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div 
            className={`
              text-sm font-bold px-3 py-1 rounded-full
              ${isSeen 
                ? 'bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse' 
                : 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 animate-bounce'}
              transform hover:scale-110 transition-transform duration-200
            `}
          >
            {isSeen ? '🌟 Reviewed!' : '✨ New!'}
          </div>
          
          <div 
            className={`
              text-sm font-medium text-gray-600 dark:text-gray-300 
              flex items-center gap-2 bg-gray-100 dark:bg-gray-700 
              px-3 py-1 rounded-full
              transform hover:scale-105 transition-transform duration-200
              ${isHovered ? 'animate-wiggle' : ''}
            `}
          >
            <span className="text-2xl animate-spin-slow">{getCategoryEmoji(phrase.category)}</span>
            {phrase.category}
          </div>
        </div>
        
        <div 
          className="min-h-24 cursor-pointer transform hover:scale-105 transition-transform duration-200" 
          onClick={handleFlip}
        >
          <div className="flex items-center gap-3 mb-3">
            <span 
              className={`
                text-3xl animate-bounce-slow
                transform hover:scale-125 transition-transform duration-200
                ${isHovered ? 'animate-wiggle' : ''}
              `}
            >
              {getPhraseEmoji(phrase)}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {isFlipped ? phrase.french : phrase.english}
            </h3>
          </div>
          
          <p 
            className={`
              text-lg text-gray-600 dark:text-gray-300
              transition-all duration-300 transform
              ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 h-0'}
            `}
          >
            {phrase.english}
          </p>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleFlip}
            className={`
              text-sm font-bold text-blue-600 dark:text-blue-400 
              hover:text-blue-800 dark:hover:text-blue-300 
              transition-all duration-200 bg-blue-100 dark:bg-blue-900 
              px-4 py-2 rounded-full
              hover:bg-blue-200 dark:hover:bg-blue-800 
              transform hover:scale-105
              ${isHovered ? 'animate-wiggle' : ''}
              active:scale-95
            `}
          >
            {isFlipped ? '👈 Hide Translation' : 'Show Translation 👉'}
          </button>
          
          <div className="transform hover:scale-110 transition-transform duration-200">
            <AudioPlayer 
              audioSrc={phrase.audioSrc} 
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
            />
          </div>
        </div>
      </div>
      
      {isPlaying && (
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-b-xl animate-gradient"></div>
      )}

      {/* Interactive corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 transform -translate-x-2 -translate-y-2 opacity-50 hover:opacity-100 transition-opacity duration-200">
        {isHovered ? '🎨' : '✨'}
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 transform translate-x-2 translate-y-2 opacity-50 hover:opacity-100 transition-opacity duration-200">
        {isHovered ? '🎮' : '🎯'}
      </div>
    </div>
  );
};

export default PhraseCard;