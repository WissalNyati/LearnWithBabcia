import React, { useState, useEffect } from 'react';
import { Phrase, Category } from '../types';
import PhraseCard from './PhraseCard';

interface PhrasesContainerProps {
  phrases: Phrase[];
  categories: Category[];
  searchQuery: string;
}

const PhrasesContainer: React.FC<PhrasesContainerProps> = ({ 
  phrases, 
  searchQuery 
}) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [seenPhrases, setSeenPhrases] = useState<Set<string>>(new Set());
  
  // Filter phrases based on search query only
  const filteredPhrases = phrases.filter(phrase => {
    return searchQuery === '' || 
      phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) || 
      phrase.french.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Handle play/pause for phrases
  const handlePlayPause = (id: string) => {
    if (currentlyPlaying === id) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(id);
      // Mark phrase as seen when played
      if (!seenPhrases.has(id)) {
        const updatedSeen = new Set(seenPhrases);
        updatedSeen.add(id);
        setSeenPhrases(updatedSeen);
        // Save to localStorage
        localStorage.setItem('seenPhrases', JSON.stringify([...updatedSeen]));
      }
    }
  };

  // Load seen phrases from localStorage on initial render
  useEffect(() => {
    const savedSeen = localStorage.getItem('seenPhrases');
    if (savedSeen) {
      try {
        const parsed = JSON.parse(savedSeen);
        setSeenPhrases(new Set(parsed));
      } catch (e) {
        console.error('Error parsing seen phrases from localStorage', e);
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {filteredPhrases.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            No phrases found matching your search
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Try adjusting your search terms
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhrases.map(phrase => (
            <PhraseCard
              key={phrase.id}
              phrase={phrase}
              currentlyPlaying={currentlyPlaying}
              onPlayPause={handlePlayPause}
              isSeen={seenPhrases.has(phrase.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhrasesContainer;