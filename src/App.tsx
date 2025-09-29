import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
