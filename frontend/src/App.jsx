import "./App.css";
import { Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
function App() {
  return (
    <GeistProvider>
      {/*<CssBaseline /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </GeistProvider>
  );
}

export default App;
