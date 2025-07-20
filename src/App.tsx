import React from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import NewsGrid from './components/NewsGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { useNews } from './hooks/useNews';

function App() {
  const {
    articles,
    loading,
    error,
    activeCategory,
    searchQuery,
    handleCategoryChange,
    handleSearch,
    retryFetch,
  } = useNews();

  const getPageTitle = () => {
    if (searchQuery.trim()) {
      return `Search results for "${searchQuery}"`;
    }
    
    const categoryTitles = {
      general: 'Top Headlines',
      business: 'Business News',
      entertainment: 'Entertainment News',
      health: 'Health News',
      science: 'Science News',
      sports: 'Sports News',
      technology: 'Technology News',
    };
    
    return categoryTitles[activeCategory] || 'Latest News';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <main>
        {loading && <LoadingSpinner />}
        
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={retryFetch}
          />
        )}
        
        {!loading && !error && (
          <NewsGrid 
            articles={articles} 
            title={getPageTitle()}
          />
        )}
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded"></div>
            </div>
            <h3 className="text-xl font-bold">DailyDigest</h3>
          </div>
          <p className="text-gray-400 mb-2">Your trusted source for daily news updates</p>
          <p className="text-sm text-gray-500">
            © 2025 DailyDigest. Powered by NewsAPI.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;