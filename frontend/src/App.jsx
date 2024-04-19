import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./LandingPage";

function App() {

  return (
    <div>
      {/* <AppBar /> */}
      <BrowserRouter>
        <Routes><Route path="/" element={<LandingPage />} /></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
