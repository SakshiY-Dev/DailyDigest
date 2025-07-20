import React from 'react';
import { NewsArticle } from '../types/news';
import ArticleCard from './ArticleCard';

interface NewsGridProps {
  articles: NewsArticle[];
  title: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles, title }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
          <p className="text-gray-500">Try adjusting your search or category selection.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;