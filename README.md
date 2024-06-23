Podcast Project - README

# Project Overview #
This project builds a single-page web application (SPA) for browsing and listening to podcasts. It uses React for the user interface and interacts with a provided API (https://podcast-api.netlify.app) to fetch podcast data.

# Functionality #
This project implements core functionalities like:

Deployment: Deployed to Netlify with a custom favicon and meta tags().
User Interface: Displays show names, sorting options, audio playback functionality, season views, preview images, genre titles, and more.
Data Fetching: Fetches podcast data through API calls using fetch.
State Management: Manages application state using React's useState and useEffect hooks.
User Interaction: Enables users to:
Mark episodes as favorites (not implemented yet).
Sort and filter podcasts.
Persist data (not implemented yet).
Control audio player visibility and playback.

# Challenges #

Favorite Management: Implement functionality to mark episodes as favorites and display them in a separate section. Local storage is a common approach to persist user data within the browser.
Persistent Data: Couldn't Explore options like local storage or a backend database to allow users to save their preferences and favorites across sessions.
Advanced Sorting/Filtering: Consider implementing additional filters based on genres or other criteria.
Responsiveness: Ensure the UI adapts seamlessly to different screen sizes.

# Getting Started
Prerequisites:
Clone the Repository
Node.js and npm installed on your system.
 # Install Dependencies:
- cd podcast-project
npm install
