import React, { useState } from 'react';

interface CategoryNavProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  onSelectCategory,
  selectedCategory 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Desktop category navigation with snap scrolling and hidden scrollbar */}
          <div className="hidden md:flex relative w-full">
            {/* Edge fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10" />
            <div
              className="flex space-x-2 overflow-x-auto pb-2 w-full scrollbar-hide snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200 transform hover:scale-105 snap-center
                    ${selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  <span className="text-xl animate-bounce-slow">{getCategoryEmoji(category)}</span>
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile category navigation */}
        {isExpanded && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onSelectCategory(category);
                    setIsExpanded(false);
                  }}
                  className={`
                    w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  <span className="text-xl">{getCategoryEmoji(category)}</span>
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Hide scrollbar utility */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CategoryNav; 