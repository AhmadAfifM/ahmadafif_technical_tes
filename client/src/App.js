import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeDataLokasi from "./pages/HomeDataLokasi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeDataLokasi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
