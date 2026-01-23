# React Portfolio

This is a personal portfolio project built with React, Vite, and Tailwind CSS. The portfolio showcases my skills, projects, and provides a way for visitors to contact me.

## Project Structure

The project is organized as follows:

```
react-portfolio
├── src
│   ├── main.jsx               # Entry point of the React application
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global CSS styles and Tailwind imports
│   ├── components             # Contains all reusable components
│   │   ├── layout             # Layout components (Header, Footer, Navigation)
│   │   ├── sections           # Sections of the portfolio (Hero, About, Projects, Skills, Contact)
│   │   └── ui                 # UI components (Button, Card, SectionTitle)
│   ├── assets                 # Images and icons used in the portfolio
│   └── data                   # Data files for projects and skills
├── public                     # Static files served directly
├── index.html                 # Main HTML template
├── package.json               # npm configuration file
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view your portfolio.

## Features

- Responsive design using Tailwind CSS
- Dynamic sections for showcasing projects and skills
- Contact form for inquiries

## Usage

Feel free to modify the components and styles to personalize your portfolio. Add your projects and skills in the respective data files located in `src/data/`.

## License

This project is open-source and available under the [MIT License](LICENSE).