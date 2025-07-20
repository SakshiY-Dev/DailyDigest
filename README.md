

# DailyDigest 📰

**DailyDigest** is a modern, responsive news website built with **React**, **TypeScript**, and **Tailwind CSS**, delivering real-time news updates from trusted APIs.

## 🚀 Features

* Real-time news fetching
* News by category (Business, Sports, Tech, etc.)
* Search functionality
* Responsive design for all devices
* Article details like date, author, and source

## 🔧 Setup

### 1. Clone the Repository


git clone https://github.com/SakshiY-Dev/DailyDigest.git
cd DailyDigest


### 2. Install Dependencies


npm install


### 3. Configure API Key

Open `src/services/newsApi.ts` and replace the dummy keys with your real API key from [GNews.io](https://gnews.io) or [NewsAPI.org](https://newsapi.org).


const GNEWS_API_KEY = 'your-api-key-here';


### 4. Run the App

npm run dev


### 5. Build for Production


npm run build


## 🧰 Tech Stack

* React + TypeScript
* Tailwind CSS
* Vite
* GNews API / NewsAPI
* Lucide Icons

## 📦 Deployment

Build the app:


npm run build

Then deploy the `dist/` folder using platforms like:

* Netlify
* Vercel
* GitHub Pages


