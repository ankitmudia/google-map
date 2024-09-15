# Getting Started with Create React App


![Google Map Image](./public/GoogleMapExample.PNG?raw=true "Google Map")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

# ReactJS Google Maps Project

## Overview

This ReactJS project integrates Google Maps with custom markers and clustering functionality. The `App` component renders a `GoogleMap` with custom `MarkerPin` and `Donut` components for displaying markers and clusters respectively. The map's default center and zoom level are set based on data from a local JSON file (`Data.json`).

## Features

- **Google Maps Integration**: Utilizes the Google Maps API to render maps in the application.
- **Custom Markers**: Displays markers on the map using the `MarkerPin` component.
- **Clustering**: Groups nearby markers into clusters using the `Donut` component to enhance map readability.
- **Dynamic Data**: Loads map data from a local JSON file (`Data.json`).

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ankitmudia/google-map.git
   cd 

2. **Checkout to branch**
   
   ```bash
   checkout to branch - master

3. **Starting the Application**
   ```bash
   npm install
   npm start

4. **Google Map will run in development mode**

   ```bash
   To view Map completely provide API key in GoogleMap Component in bootstrapURLKeys parameter.