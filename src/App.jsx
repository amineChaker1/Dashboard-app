import "./App.css";
import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
