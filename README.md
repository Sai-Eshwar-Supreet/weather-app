# weather-app

A modular weather application built with **vanilla JavaScript** and bundled using **Webpack**.

## Live Demo

[View on GitHub Pages](https://sai-eshwar-supreet.github.io/weather-app/)

## Features

- Location-based weather search
- Weather data fetched from Visual Crossing
- Condition-based GIFs fetched from Giphy
- Loading indicator during network requests
- Modular architecture with explicit state and controllers

## Architecture

- API requests isolated in a web request layer
- Raw API responses processed into minimal data objects
- Centralized state object
- Controller layer coordinates data flow and rendering
- DOM updates handled by a dedicated renderer module

## Tech Stack

- JavaScript
- Webpack
- HTML
- CSS

## Usage

### Setup

```bash
git clone https://github.com/Sai-Eshwar-Supreet/weather-app.git
cd weather-app
npm install
```

### Development

```bash
npm run dev
```

Open: http://localhost:8080

### Production Build

```bash
npm run build
```

### Deployment

```bash
npm run deploy
```

Deploys the /dist folder to GitHub Pages via subtree.

## Acknowledgements

- This project was completed as part of **[The Odin Project – JavaScript Course](https://www.theodinproject.com/)**
