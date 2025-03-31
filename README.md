# MovieDB React Application

A modern React application for browsing movies, managing favorites, and discovering new films using The Movie Database (TMDB) API.

## Features

- Browse popular movies
- Search functionality
- Add/remove favorites
- Responsive design
- Loading placeholders
- Movie details view
- Redux state management

## Tech Stack

- React 19
- Redux Toolkit
- React Router v7
- Bootstrap 5
- Axios
- Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-d3
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:
```env
VITE_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── about/
│   ├── dashboard/
│   ├── favorites/
│   ├── home/
│   ├── layout/
│   └── navbar/
├── redux/
│   ├── slices/
│   └── store.js
└── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## State Management

The application uses Redux Toolkit for state management with the following slices:
- Movies: Manages movie list and loading states
- Favorites: Handles user's favorite movies
- Search: Manages search functionality

## API Integration

The application integrates with TMDB API for fetching movie data:
- Popular movies
- Movie details
- Search results

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
