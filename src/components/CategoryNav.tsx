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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>

          {/* Desktop category navigation */}
          <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 transform hover:scale-105
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

          {/* Quick jump dropdown */}
          <div className="hidden md:block">
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Quick Jump to Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {getCategoryEmoji(category)} {category}
                </option>
              ))}
            </select>
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
    </div>
  );
};

export default CategoryNav; 