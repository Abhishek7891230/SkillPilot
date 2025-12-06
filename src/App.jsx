import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesPage } from "./pages/NotesPage";
import { AuthProvider } from "./context/authContext";
import Auth from "./pages/AuthPage";
import { PracticePage } from "./pages/Practicepage";
import { AptitudePracticePage } from "./pages/AptitudePracticePage";
import { Dashboard } from "./pages/Dashboard";
import { CodingPracticePage } from "./pages/CodingPracticePage";
import { MockTestLandingPage } from "./pages/MockTestLandingPage";
import { MockTestConfigPage } from "./pages/MockTestConfigPage";
import { MockTestPage } from "./pages/MocktestPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/aptitude" element={<AptitudePracticePage />} />
          <Route path="/coding" element={<CodingPracticePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mocktest" element={<MockTestLandingPage />} />
          <Route path="/mocktest/config" element={<MockTestConfigPage />} />
          <Route path="/mocktest/start" element={<MockTestPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
