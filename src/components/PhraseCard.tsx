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
  const isPlaying = currentlyPlaying === phrase.id;
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePlayPause = () => {
    onPlayPause(phrase.id);
  };
  
  return (
    <div 
      className={`
        relative bg-white dark:bg-gray-800 rounded-lg shadow-md 
        transition-all duration-300 transform hover:scale-102 hover:shadow-lg
        ${isFlipped ? 'border-blue-500 dark:border-blue-400' : 'border-transparent'} 
        border-2
      `}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div 
            className={`
              text-xs font-medium px-2 py-1 rounded-full
              ${isSeen ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}
            `}
          >
            {isSeen ? 'Reviewed' : 'New'}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 italic">
            {phrase.category}
          </div>
        </div>
        
        <div 
          className="min-h-24 cursor-pointer" 
          onClick={handleFlip}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {isFlipped ? phrase.french : phrase.english}
          </h3>
          
          <p 
            className={`
              text-md text-gray-600 dark:text-gray-300
              transition-opacity duration-300
              ${isFlipped ? 'opacity-100' : 'opacity-0 h-0'}
            `}
          >
            {phrase.english}
          </p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleFlip}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            {isFlipped ? 'Hide Translation' : 'Show Translation'}
          </button>
          
          <AudioPlayer 
            audioSrc={phrase.audioSrc} 
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />
        </div>
      </div>
      
      {isPlaying && (
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-red-500 rounded-b-lg"></div>
      )}
    </div>
  );
};

export default PhraseCard;