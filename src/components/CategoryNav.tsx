import React from 'react';
import { NewsCategory } from '../types/news';
import { TrendingUp, Building2, Music, Heart, Microscope, Trophy, Laptop } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}

const categories: { key: NewsCategory; label: string; icon: React.ReactNode }[] = [
  { key: 'general', label: 'Top Stories', icon: <TrendingUp className="w-5 h-5" /> },
  { key: 'business', label: 'Business', icon: <Building2 className="w-5 h-5" /> },
  { key: 'entertainment', label: 'Entertainment', icon: <Music className="w-5 h-5" /> },
  { key: 'health', label: 'Health', icon: <Heart className="w-5 h-5" /> },
  { key: 'science', label: 'Science', icon: <Microscope className="w-5 h-5" /> },
  { key: 'sports', label: 'Sports', icon: <Trophy className="w-5 h-5" /> },
  { key: 'technology', label: 'Technology', icon: <Laptop className="w-5 h-5" /> },
];

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-50 to-teal-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-white hover:shadow-md hover:text-blue-600'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;