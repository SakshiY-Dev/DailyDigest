import { NewsResponse, NewsCategory } from '../types/news';

// Mock news data for demonstration
const mockArticles = [
  {
    title: "Breaking: Major Technology Breakthrough Announced",
    description: "Scientists have made a significant discovery that could revolutionize the tech industry. This breakthrough promises to change how we interact with technology in our daily lives.",
    url: "https://example.com/tech-breakthrough",
    urlToImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date().toISOString(),
    source: { name: "Tech Today" },
    author: "Sarah Johnson"
  },
  {
    title: "Global Markets Show Strong Recovery",
    description: "Financial markets worldwide are experiencing unprecedented growth as investors show renewed confidence in the global economy.",
    url: "https://example.com/market-recovery",
    urlToImage: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    source: { name: "Financial Times" },
    author: "Michael Chen"
  },
  {
    title: "Revolutionary Health Treatment Shows Promise",
    description: "Medical researchers have developed a new treatment that shows remarkable results in clinical trials, offering hope for millions of patients.",
    url: "https://example.com/health-breakthrough",
    urlToImage: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    source: { name: "Health Weekly" },
    author: "Dr. Emily Rodriguez"
  },
  {
    title: "Sports Championship Delivers Thrilling Finale",
    description: "The championship game ended in spectacular fashion with a last-minute victory that will be remembered for years to come.",
    url: "https://example.com/sports-championship",
    urlToImage: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    source: { name: "Sports Central" },
    author: "Alex Thompson"
  },
  {
    title: "Entertainment Industry Embraces New Trends",
    description: "The entertainment world is rapidly adapting to changing consumer preferences with innovative content and delivery methods.",
    url: "https://example.com/entertainment-trends",
    urlToImage: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    source: { name: "Entertainment Weekly" },
    author: "Jessica Park"
  },
  {
    title: "Scientific Discovery Opens New Possibilities",
    description: "Researchers have made a groundbreaking discovery that could lead to new applications in multiple scientific fields.",
    url: "https://example.com/science-discovery",
    urlToImage: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    source: { name: "Science Daily" },
    author: "Dr. Robert Kim"
  }
];

const categoryArticles: Record<NewsCategory, typeof mockArticles> = {
  general: mockArticles,
  business: [
    {
      title: "Startup Raises $100M in Series B Funding",
      description: "A promising tech startup has secured significant funding to expand its operations globally and develop new products.",
      url: "https://example.com/startup-funding",
      urlToImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Business Insider" },
      author: "Mark Williams"
    },
    {
      title: "Major Corporation Announces Merger",
      description: "Two industry giants have announced a strategic merger that will reshape the competitive landscape.",
      url: "https://example.com/corporate-merger",
      urlToImage: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      source: { name: "Forbes" },
      author: "Lisa Chen"
    }
  ],
  technology: [
    {
      title: "AI Revolution Transforms Industries",
      description: "Artificial intelligence is rapidly changing how businesses operate across multiple sectors, from healthcare to finance.",
      url: "https://example.com/ai-revolution",
      urlToImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "TechCrunch" },
      author: "David Park"
    },
    {
      title: "New Smartphone Features Unveiled",
      description: "The latest smartphone technology promises enhanced performance and revolutionary features for users.",
      url: "https://example.com/smartphone-features",
      urlToImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      source: { name: "Wired" },
      author: "Amanda Lee"
    }
  ],
  health: [
    {
      title: "Breakthrough in Cancer Research",
      description: "Scientists have developed a new approach to cancer treatment that shows remarkable success in early trials.",
      url: "https://example.com/cancer-research",
      urlToImage: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Medical News" },
      author: "Dr. Sarah Wilson"
    }
  ],
  sports: [
    {
      title: "Olympic Records Broken in Swimming",
      description: "Multiple world records were shattered during the swimming competitions, showcasing incredible athletic achievement.",
      url: "https://example.com/olympic-records",
      urlToImage: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "ESPN" },
      author: "Tom Rodriguez"
    }
  ],
  entertainment: [
    {
      title: "Blockbuster Movie Breaks Box Office Records",
      description: "The latest superhero film has shattered opening weekend records, delighting audiences worldwide.",
      url: "https://example.com/blockbuster-movie",
      urlToImage: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "Variety" },
      author: "Jennifer Davis"
    }
  ],
  science: [
    {
      title: "Space Mission Discovers New Exoplanet",
      description: "Astronomers have identified a potentially habitable exoplanet that could harbor life as we know it.",
      url: "https://example.com/exoplanet-discovery",
      urlToImage: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
      publishedAt: new Date().toISOString(),
      source: { name: "NASA News" },
      author: "Dr. Michael Chang"
    }
  ]
};

export class MockNewsApiService {
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async getTopHeadlines(country: string = 'us', pageSize: number = 20): Promise<NewsResponse> {
    await this.delay(800); // Simulate API delay
    
    return {
      status: 'ok',
      totalResults: mockArticles.length,
      articles: mockArticles.slice(0, pageSize)
    };
  }

  static async getNewsByCategory(category: NewsCategory, pageSize: number = 20): Promise<NewsResponse> {
    await this.delay(800);
    
    const articles = categoryArticles[category] || mockArticles;
    
    return {
      status: 'ok',
      totalResults: articles.length,
      articles: articles.slice(0, pageSize)
    };
  }

  static async searchNews(query: string, pageSize: number = 20): Promise<NewsResponse> {
    await this.delay(1000);
    
    // Filter articles based on search query
    const filteredArticles = mockArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      status: 'ok',
      totalResults: filteredArticles.length,
      articles: filteredArticles.slice(0, pageSize)
    };
  }
}