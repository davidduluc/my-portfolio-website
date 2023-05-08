import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
