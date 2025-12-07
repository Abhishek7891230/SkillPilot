# CodeFlex - Integrated Coding & Aptitude Practice Platform

A comprehensive learning platform for mastering coding interviews and aptitude tests. Practice DSA problems with real-time code execution, take mock tests, track progress, and build interview confidence.

**Live:** https://skillpilot76.netlify.app

---

## Features

**Multi-Language Code Practice**

- Write and execute code in Python, Java, C++, JavaScript, and TypeScript
- Integrated Monaco Editor with syntax highlighting and auto-completion
- Real-time test case evaluation with detailed feedback

**Comprehensive Question Bank**

- 100+ DSA problems across multiple difficulty levels
- 500+ aptitude questions covering logical reasoning, quantitative, and verbal skills
- Category-based filtering (Arrays, Strings, Math, Design patterns, etc.)

**Mock Tests & Analytics**

- Customizable mock tests with time tracking
- Performance dashboard with streak tracking and score analytics
- Best score tracking and difficulty-wise progress visualization

**User Progress Tracking**

- Firebase authentication with secure session management
- Solved problems tracking with Firestore persistence
- Daily activity heatmap and learning streaks
- Personalized performance insights

---

## Tech Stack

**Frontend:**

- React 19 + Vite
- Monaco Editor for code editing
- Firebase Auth & Firestore for data persistence
- Custom CSS with responsive design

**Backend:**

- Express.js server
- Piston API for multi-language code execution
- Retry logic and error handling for judge system
- CORS configured for secure cross-origin requests

**Deployment:**

- Frontend: Netlify
- Backend: Railway

---

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abhishek7891230/SkillPilot.git
   cd SkillPilot/CodeFlex
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Firebase credentials:

   ```
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_PROJECT_ID=your_firebase_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   VITE_API_URL=http://localhost:3000
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open http://localhost:5173

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

---

## Backend Setup

See [`backend/README.md`](./backend/README.md) for backend deployment and configuration.

Quick start:

```bash
cd backend
npm install
node server.js
```

---

## Project Structure

```
CodeFlex/
├── src/
│   ├── pages/          # Page components (Home, Practice, Dashboard, etc.)
│   ├── components/     # Reusable components (Navbar, Footer, etc.)
│   ├── styles/         # CSS files for each component
│   ├── data/           # Hardcoded questions (DSA & Aptitude)
│   ├── context/        # React Context for auth state
│   ├── firebase/       # Firebase config & auth setup
│   ├── utils/          # Utility functions
│   └── main.jsx
├── backend/            # Express server
├── public/             # Static assets
├── netlify.toml        # Netlify deployment config
├── vite.config.js      # Vite build config
└── package.json
```

---

## Key Pages

- **Home** (`/`) - Platform overview with features and CTAs
- **Practice** (`/practice`) - Choose between coding, aptitude, or mock tests
- **Coding Practice** (`/coding`) - Solve DSA problems with multi-language support
- **Aptitude Practice** (`/aptitude`) - Multiple-choice aptitude questions
- **Mock Tests** (`/mocktest/*`) - Timed assessments with performance tracking
- **Dashboard** (`/dashboard`) - View stats, streaks, and progress analytics
- **Notes** (`/notes`) - Learning resources and concepts

---

## Authentication

- Firebase Authentication with email/password
- Secure session persistence
- Protected routes for authenticated users
- Quick logout with session cleanup

---

## Performance Tracking

The dashboard tracks:

- **Solved Problems** - Total problems solved by difficulty
- **Mock Test Scores** - Best score, average score, tests taken
- **Daily Activity** - Heatmap showing coding streaks
- **Category-wise Progress** - Performance across different topics
- **Language Preferences** - Tracks preferred programming language

---

## API Integration

Frontend communicates with:

1. **Firebase APIs** - User auth & data persistence
2. **Railway Backend** - Code execution endpoint (`/judge`)
3. **Piston API** (via backend) - Multi-language code execution

---

## Known Limitations & Future Improvements

### Current:

- Questions are hardcoded (should be database-driven)
- No TypeScript support in codebase
- Single backend instance (no horizontal scaling)

### Roadmap:

- [ ] Add TypeScript throughout
- [ ] Implement unit tests (Jest + React Testing)
- [ ] Move hardcoded data to MongoDB/PostgreSQL
- [ ] Add AI-powered code review using OpenAI API
- [ ] Implement spaced repetition algorithm
- [ ] Add collaborative coding/discussion features
- [ ] Multi-region deployment

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Contact & Support

- GitHub: https://github.com/Abhishek7891230
- Issues: https://github.com/Abhishek7891230/SkillPilot/issues
- LinkedIn: https://www.linkedin.com/in/abhishek-poojary777
