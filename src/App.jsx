import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import AllCharacters from "./pages/AllCharacters/AllCharacters"
import Species from "./pages/Species/Species"
import NotFound from "./pages/NotFound/NotFound"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllCharacters />} />
          <Route path="/species/:type" element={<Species />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
