import { MockNewsApiService } from "./mockNewsApi";
import { GNewsApiService } from "./gNewsApi";

const API_KEY = "8fd10cd7ac3747fe98a1e700ca3bdf3a"; // Replace with your NewsAPI key
const BASE_URL = "https://newsapi.org/v2";
const GNEWS_API_KEY = "7b102833dcd78c779e917213802d782e"; // Replace with your GNews API key

// Determine environment
const IS_LOCALHOST =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// Set usage flags
const USE_GNEWS =
  IS_LOCALHOST &&
  GNEWS_API_KEY &&
  GNEWS_API_KEY !== "7b102833dcd78c779e917213802d782e";
const USE_NEWSAPI =
  IS_LOCALHOST && API_KEY && API_KEY !== "8fd10cd7ac3747fe98a1e700ca3bdf3a";
const USE_MOCK_DATA = !IS_LOCALHOST; // Use mock when deployed

export class NewsApiService {
  private static async makeRequest(endpoint: string): Promise<any> {
    if (USE_MOCK_DATA) {
      throw new Error("Using mock data in deployed environment.");
    }

    const response = await fetch(`${BASE_URL}${endpoint}&apiKey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`);
    }

    return response.json();
  }

  static async getTopHeadlines(country: string = "us", pageSize: number = 20) {
    if (USE_GNEWS) {
      return GNewsApiService.getTopHeadlines(country, pageSize);
    }
    if (USE_MOCK_DATA) {
      return MockNewsApiService.getTopHeadlines(country, pageSize);
    }
    return this.makeRequest(
      `/top-headlines?country=${country}&pageSize=${pageSize}`
    );
  }

  static async getNewsByCategory(category: string, pageSize: number = 20) {
    if (USE_GNEWS) {
      return GNewsApiService.getNewsByCategory(category as any, pageSize);
    }
    if (USE_MOCK_DATA) {
      return MockNewsApiService.getNewsByCategory(category as any, pageSize);
    }
    return this.makeRequest(
      `/top-headlines?category=${category}&pageSize=${pageSize}`
    );
  }

  static async searchNews(query: string, pageSize: number = 20) {
    if (USE_GNEWS) {
      return GNewsApiService.searchNews(query, pageSize);
    }
    if (USE_MOCK_DATA) {
      return MockNewsApiService.searchNews(query, pageSize);
    }
    return this.makeRequest(
      `/everything?q=${encodeURIComponent(
        query
      )}&pageSize=${pageSize}&sortBy=relevancy`
    );
  }
}
