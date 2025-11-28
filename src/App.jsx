import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesPage } from "./pages/NotesPage";
import { AuthProvider } from "./context/authContext";
import Auth from "./pages/AuthPage";
import { PracticePage } from "./pages/Practicepage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/practice" element={<PracticePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
