<<<<<<< HEAD
# DailyDigest - Modern News Website

A beautiful, responsive news website built with React, TypeScript, and Tailwind CSS that fetches real-time news from NewsAPI.

## Features

- 📰 Real-time news from NewsAPI
- 🔍 Advanced search functionality
- 📱 Fully responsive design
- 🏷️ News categories (Business, Entertainment, Health, Science, Sports, Technology)
- ⚡ Fast loading with error handling
- 🎨 Modern, professional design
- 📅 Article metadata (date, source, author)

## Setup Instructions

### For Development with Real News Data

#### Option 1: GNews API (Works in Production)

1. **Get a GNews API Key**
   - Visit [GNews.io](https://gnews.io/)
   - Sign up for a free account (60,000 requests/month)
   - Get your API key from the dashboard

2. **Configure the GNews API Key**
   - Open `src/services/newsApi.ts`
   - Replace `'YOUR_GNEWS_API_KEY'` with your actual GNews API key:
   ```typescript
   const GNEWS_API_KEY = 'your-actual-gnews-api-key-here';
   ```

#### Option 2: NewsAPI (Development Only)

1. **Get a NewsAPI Key**
   - Visit [NewsAPI.org](https://newsapi.org/)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Configure the API Key**
   - Open `src/services/newsApi.ts`
   - Replace `'YOUR_NEWS_API_KEY'` with your actual API key:
   ```typescript
   const API_KEY = 'your-actual-api-key-here';
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

### For Production Deployment

**Current Status**: 
- **GNews API**: Works in production (recommended)
- **NewsAPI**: Only works in development due to CORS restrictions
- **Mock Data**: Used as fallback when no API is configured

**For Real News in Production**, you have these options:

1. **GNews API** (Easiest - Works Now):
   - Get free API key from GNews.io
   - 60,000 requests/month free tier
   - No CORS restrictions

2. **Backend Proxy**:
   - Create a backend API that fetches from NewsAPI
   - Your frontend calls your backend instead of NewsAPI directly
   - This avoids CORS issues

3. **Other News APIs**:
   - Use APIs that support CORS like:
     - Currents API
     - News Data API


## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and search
│   ├── CategoryNav.tsx # Category navigation
│   ├── NewsGrid.tsx    # News articles grid
│   ├── ArticleCard.tsx # Individual article card
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── hooks/
│   └── useNews.ts      # Custom hook for news logic
├── services/
│   └── newsApi.ts      # NewsAPI integration
├── types/
│   └── news.ts         # TypeScript interfaces
└── App.tsx             # Main application component
```

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **NewsAPI** for news data
- **Vite** for build tooling

## API Limitations

- NewsAPI free tier allows 1000 requests per day
- Some features may be limited on localhost
- For production deployment, consider upgrading to a paid plan

## Deployment Ready

This application is fully configured for deployment to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

Just run `npm run build` and deploy the `dist` folder.
=======
# DailyDigest
Daily Digest is a real-time news app that keeps you updated with the latest headlines from trusted sources. With a clean UI and seamless navigation, it delivers news across various categories like tech, business, sports, and entertainment. Powered by APIs, it ensures fresh and accurate updates anytime, anywhere. Stay informed, stay ahead! 🚀
>>>>>>> dd04a47dd9172fd2d70349d82c2c524b75db661b
