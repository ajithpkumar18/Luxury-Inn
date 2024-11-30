import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import List from "./pages/list/List";
import Hotel from "./pages/Hotel/hotel";
import setupLocatorUI from "@locator/runtime";
import Login from "./pages/login/Login";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
