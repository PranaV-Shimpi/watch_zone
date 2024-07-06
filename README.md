# Watch_Zone

Welcome to Watch_Zone, an advanced YouTube clone project designed to replicate the core functionalities of YouTube, while also adding unique features and enhancements. This document provides comprehensive instructions on setting up, using, and contributing to the Watch_Zone application.

- Project Demo: [https://youtube-watch-zone.netlify.app/](https://youtube-watch-zone.netlify.app/)
- Source Code: [https://github.com/PranaV-Shimpi/watch_zone](https://github.com/PranaV-Shimpi/watch_zone)

## Images:
![image](https://github.com/PranaV-Shimpi/watch_zone/assets/40532644/8ace19d7-f2b6-4c56-92e7-9c79bd5b56fa)

![image](https://github.com/PranaV-Shimpi/watch_zone/assets/40532644/141e77d5-03f3-4613-bf2b-04e81d26e074)

![image](https://github.com/PranaV-Shimpi/watch_zone/assets/40532644/478533cd-d9d3-43b1-98ea-bfdf538d035c)


## Features:
- Video Search: Robust search functionality to find videos by keywords.
- Video Categories: Intuitive browsing by various predefined categories.
- Latest Trends: Dynamic display of trending videos, updated in real-time.
- Live Chat: Real-time chat feature for viewer interaction during video playback.
- Comments: Integration of original YouTube video comments for an authentic experience.
- Related Videos: Intelligent recommendations of related videos based on user interaction and video metadata.



## Usage:
- Searching for Videos
Enter keywords in the search bar located at the top of the page.
Results will be displayed dynamically based on the search query.

- Browsing Video Categories
Select a category from the navigation menu to browse videos within that category.
The page will update to show videos relevant to the selected category.

- Viewing Latest Trends
The homepage features a section dedicated to trending videos.
This section is updated in real-time to reflect the latest trends.

- Live Chat
Access the live chat feature during video playback.
Enter your message in the chat box and press Enter to send.

- Comments
Scroll down to view the comments section beneath the video player.
Comments are fetched from the original YouTube video, providing a familiar user experience.

- Related Videos
Related videos are displayed in a section below the comments.
Click on any related video to start playing it.

## Installation:

To set up the Watch_Zone application, follow these steps:

1. Clone the repository:
   
```
git clone https://github.com/PranaV-Shimpi/watch_zone.git
```

2. Navigate to the project directory:
   
```
cd watch_zone

```

3. Install dependencies:
   
```
npm install
```

4.Start the development server:

```
npm start
```

Your application should now be running on http://localhost:3000.

## Configuration:

Before starting the application, ensure you have configured the necessary environment variables:


Create a .env file in the root directory and add the following variables:
Obtain a YouTube API key from the Google Developer Console.
```
REACT_APP_API_KEY=your_youtube_api_key
REACT_APP_API_URL=https://www.googleapis.com/youtube/v3
```

## Contributing:

We welcome contributions to enhance Watch_Zone! To contribute, please follow these guidelines:

1. Fork the repository.
Create a new branch for your feature or bugfix:

```
git checkout -b feature/your-feature-name
```

2. Make your changes and ensure your code is properly tested.

3. Commit your changes:
```
git commit -m "Add feature: your feature name"
```

4. Push to the branch:
```
git push origin feature/your-feature-name
```
 
5. Open a pull request and provide a detailed description of your changes.

## Future Scope:

- User Profile Settings
Implement user profile settings to allow users to manage their personal information, preferences, and account settings.
- Responsiveness
Enhance the application's responsiveness to ensure optimal user experience across different devices and screen sizes.

## Deployment

The project is hosted using Netlify.

---

<div align="center">

### Made with ❤️ by Pranav Shimpi

</div>
