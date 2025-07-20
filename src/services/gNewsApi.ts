import { NewsResponse, NewsCategory } from "../types/news";

const API_KEY = ""; //Your gnews_API key
const BASE_URL = "https://gnews.io/api/v4";

// GNews supports CORS, so it works in production
export class GNewsApiService {
  private static async makeRequest(endpoint: string): Promise<any> {
    if (!API_KEY || API_KEY === "Your gnews_API key") {
      throw new Error("GNews API key not configured");
    }

    const response = await fetch(`${BASE_URL}${endpoint}&apikey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }

    return response.json();
  }

  static async getTopHeadlines(
    country: string = "us",
    max: number = 20
  ): Promise<NewsResponse> {
    try {
      const data = await this.makeRequest(
        `/top-headlines?country=${country}&max=${max}`
      );

      return {
        status: "ok",
        totalResults: data.totalArticles,
        articles: data.articles.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.image,
          publishedAt: article.publishedAt,
          source: { name: article.source.name },
          author: article.source.name,
        })),
      };
    } catch (error) {
      throw new Error("Failed to fetch top headlines");
    }
  }

  static async getNewsByCategory(
    category: NewsCategory,
    max: number = 20
  ): Promise<NewsResponse> {
    try {
      const data = await this.makeRequest(
        `/top-headlines?category=${category}&max=${max}`
      );

      return {
        status: "ok",
        totalResults: data.totalArticles,
        articles: data.articles.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.image,
          publishedAt: article.publishedAt,
          source: { name: article.source.name },
          author: article.source.name,
        })),
      };
    } catch (error) {
      throw new Error(`Failed to fetch ${category} news`);
    }
  }

  static async searchNews(
    query: string,
    max: number = 20
  ): Promise<NewsResponse> {
    try {
      const data = await this.makeRequest(
        `/search?q=${encodeURIComponent(query)}&max=${max}`
      );

      return {
        status: "ok",
        totalResults: data.totalArticles,
        articles: data.articles.map((article: any) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.image,
          publishedAt: article.publishedAt,
          source: { name: article.source.name },
          author: article.source.name,
        })),
      };
    } catch (error) {
      throw new Error("Failed to search news");
    }
  }
}
