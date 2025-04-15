# Event Booking Application

This is a React-based event booking application that allows users to browse, filter, and book events seamlessly. The application provides features like event management, calendar integration, and a responsive user interface.

## Project Overview

The Event Booking Application is designed to simplify the process of discovering and booking events. It includes features such as:

- **Event Listing**: Browse and filter events based on type, date, and search queries.
- **Event Booking**: Book events with a user-friendly form and calendar integration.
- **Event Management**: Add, remove, and reset events using Redux state management.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-Time Updates**: Persist data using `redux-persist` for a seamless user experience.

## Technologies Used

The project is built using the following technologies:

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Redux Persist**: For persisting state across sessions.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: For styling and responsive design.
- **Day.js**: For date manipulation.
- **React Datepicker**: For calendar integration.
- **Framer Motion**: For animations.
- **Vite**: For fast development and build tooling.

## Instructions to Run the Project

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```sh
   git clone <repository-url>
   cd eventbooking

2. **Install Dependencies :** Use npm to install the required dependencies: :
   ```sh
   npm install
3. **Run the Development Server :** Start the development server:
    ```sh
    npm run dev

4. **Open in Browser :** Open your browser and navigate to:
    ```sh
    npm run dev 

## Folder Structure

<pre>
├── public/
│   ├── assets (images, fonts, etc.)
├── src/
│   ├── Components/ (Reusable components)
│   ├── pages/ (Application pages)
│   ├── store/ (Redux store and reducers)
│   ├── utils/ (Utility functions)
│   ├── [App.jsx](http://_vscodecontentref_/1) (Main application component)
│   ├── [main.jsx](http://_vscodecontentref_/2) (Entry point)
│   ├── [index.css](http://_vscodecontentref_/3) (Global styles)
├── [package.json](http://_vscodecontentref_/4) (Project dependencies and scripts)
├── [vite.config.js](http://_vscodecontentref_/5) (Vite configuration)
├── [tailwind.config.js](http://_vscodecontentref_/6) (Tailwind CSS configuration)Structure </pre>
