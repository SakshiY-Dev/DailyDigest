import { useState, useEffect, useCallback } from 'react';
import { NewsArticle, NewsCategory } from '../types/news';
import { NewsApiService } from '../services/newsApi';

export const useNews = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('general');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      let response;
      
      if (searchQuery.trim()) {
        response = await NewsApiService.searchNews(searchQuery);
      } else if (activeCategory === 'general') {
        response = await NewsApiService.getTopHeadlines();
      } else {
        response = await NewsApiService.getNewsByCategory(activeCategory);
      }
      
      if (response.status === 'ok') {
        setArticles(response.articles || []);
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch news articles';
      setError(errorMessage);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleCategoryChange = (category: NewsCategory) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory('general');
    }
  };

  const retryFetch = () => {
    fetchNews();
  };

  return {
    articles,
    loading,
    error,
    activeCategory,
    searchQuery,
    handleCategoryChange,
    handleSearch,
    retryFetch,
  };
};