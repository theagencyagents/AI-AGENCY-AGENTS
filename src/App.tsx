import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DirectoriesPage from "./components/pages/DirectoriesPage";
import ToolsPage from "./components/pages/ToolsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ChatbotPage from "./components/pages/ChatbotPage";
import ArtImagePage from "./components/pages/ArtImagePage";
import ContentSeoPage from "./components/pages/ContentSeoPage";
import VideoPage from "./components/pages/VideoPage";
import MusicAudioPage from "./components/pages/MusicAudioPage";
import ProductivityPage from "./components/pages/ProductivityPage";
import MeetingPage from "./components/pages/MeetingPage";
import SearchPage from "./components/pages/SearchPage";
import ResearchPage from "./components/pages/ResearchPage";
import WritingPage from "./components/pages/WritingPage";
import MarketingPage from "./components/pages/MarketingPage";
import PresentationPage from "./components/pages/PresentationPage";
import CodePage from "./components/pages/CodePage";
import EducationPage from "./components/pages/EducationPage";
import DesignPage from "./components/pages/DesignPage";
import FinancePage from "./components/pages/FinancePage";
import HealthPage from "./components/pages/HealthPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directories" element={<DirectoriesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/chatbots" element={<ChatbotPage />} />
          <Route path="/art-image" element={<ArtImagePage />} />
          <Route path="/content-seo" element={<ContentSeoPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/music-audio" element={<MusicAudioPage />} />
          <Route path="/productivity" element={<ProductivityPage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
