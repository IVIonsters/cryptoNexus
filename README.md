# **CryptoNexus**

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [License](#license)

## **Project Overview**

CryptoNexus is a cryptocurrency tracking application that fetches real-time data from CoinGecko API and displays it in an interactive dashboard. This application provides users with up-to-date information on various cryptocurrencies including Bitcoin, Ethereum, and Solana, helping users make informed decisions in the crypto market.

This project serves as a multistep learning journey, initially built with vanilla HTML, CSS, and JavaScript to establish core functionality and understand fundamental concepts. In future iterations, it will be migrated to React to enhance the user interface with component-based architecture, state management, and more dynamic interactions. This evolution reflects a real-world development process where applications grow from simple prototypes to sophisticated web applications.

## **Features**

- **Real-time cryptocurrency data** fetched from CoinGecko API
- **Multiple cryptocurrency support** including Bitcoin, Ethereum, and Solana
- **Detailed cryptocurrency information** including price, market cap, and volume
- **Interactive price history charts** for tracking price movements over 30 days
- **Responsive design** for both mobile and desktop devices
- **Clean, user-friendly interface** for easy navigation
- **Dynamic data display** with DOM manipulation
- **Error handling** with mock data fallback when API is unavailable
- **Smart number formatting** for improved readability of financial data

## **Installation**

```bash
# Clone the repository
git clone https://github.com/yourusername/cryptoNexus.git

# Navigate to the project directory
cd cryptoNexus

# Open index.html in your browser
# Or use a local server like Live Server in VS Code
```

## **Usage**

1. Open the application in your web browser
2. Select a cryptocurrency (Bitcoin, Ethereum, or Solana) from the top buttons
3. View real-time cryptocurrency data including price, market cap, and 24h change
4. Explore the interactive price history chart showing 30-day trends
5. Use mock data fallback when API rate limits are reached

## **Technologies Used**

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) - Core programming language
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) - Structure and content
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) - Styling and responsiveness
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) - Utility-first CSS framework
- ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white) - Interactive data visualization
- ![CoinGecko API](https://img.shields.io/badge/CoinGecko%20API-8DC63F?style=for-the-badge&logo=coingecko&logoColor=white) - Cryptocurrency data source
- ![Fetch API](https://img.shields.io/badge/Fetch%20API-00C7B7?style=for-the-badge&logo=javascript&logoColor=white) - Asynchronous data fetching
- ![ES6 Modules](https://img.shields.io/badge/ES6%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) - JavaScript code organization

## **Project Structure**

```
cryptoNexus/
├── index.html           # Main HTML file with UI structure
├── script.js            # JavaScript with API calls and chart functionality
├── mockData.js          # Mock data for offline development and API fallback
└── README.md            # Project documentation
```

## **Screenshots**

| <img src="./images/Macbook-PRO-16-2021-127.0.0.1.png" width="600"> | <img src="./images/iPhone-16-PRO-MAX-127.0.0.1.png" width="300"> | <img src="./images/screencapture-127-0-0-1-5500-2025-06-13-10_50_10.png" width="600"> |
| :----------------------------------------------------------------: | :--------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
|                      Crypto Nexus on Desktop                       |                      Crypto Nexus on iPhone                      |                                     Crypto Nexus                                      |

## **Future Improvements**

- Add support for more cryptocurrencies
- Implement user authentication for personalized watchlists
- Create portfolio tracking functionality
- Add historical data comparison tools
- Implement price alerts and notifications
- Migrate to React.js for improved component architecture
- Add client-side caching to reduce API calls
- Implement dark/light mode toggle
- Add cryptocurrency search functionality
- Create detailed individual cryptocurrency pages

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Zachary
