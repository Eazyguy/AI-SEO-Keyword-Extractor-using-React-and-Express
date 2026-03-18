# AI Keyword Extractor

A web application that uses AI to extract SEO-optimized keywords from text input. The app leverages advanced language models to generate both short-tail and long-tail keywords to help with content optimization and search engine marketing.

## Features

- **Text Input Interface**: Clean, user-friendly interface for entering text content
- **AI-Powered Extraction**: Uses Qwen2.5-7B-Instruct model via HuggingFace API for intelligent keyword generation
- **SEO Optimization**: Generates 5 short-tail and 5 long-tail keywords for better search visibility
- **Real-time Processing**: Fast keyword extraction with loading indicators
- **Responsive Design**: Built with Chakra UI for a modern, responsive experience

## Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Chakra UI** - Component library for React with accessible design
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth interactions

### Backend
- **Node.js** - JavaScript runtime for the server
- **Express.js** - Web framework for API development
- **OpenAI API** - AI model integration via HuggingFace router
- **CORS** - Cross-origin resource sharing support

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-keyword-extractor.git
   cd ai-keyword-extractor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your HuggingFace API key:
   ```
   HF_API_KEY=your_huggingface_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   This will start both the frontend (Vite) and backend (Express) servers concurrently.

## Usage

1. Open your browser and navigate to `http://localhost:5173` (Vite default port)
2. Enter your text content in the textarea
3. Click the "Extract Keywords" button
4. View the generated keywords in the modal popup

## API

### POST /api/extract-keywords

Extracts keywords from the provided text using AI.

**Request Body:**
```json
{
  "text": "Your text content here"
}
```

**Response:**
```json
"short-tail-keyword1, short-tail-keyword2, long-tail-keyword1, long-tail-keyword2..."
```

## Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks
- `npm start` - Start the backend server in production mode

## Project Structure

```
ai-keyword-extractor/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Textinput.jsx
│   │   │   ├── keywordsModal.jsx
│   │   │   └── ui/
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   └── ...
├── server/                # Backend Express server
│   └── app.js            # Server application
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
