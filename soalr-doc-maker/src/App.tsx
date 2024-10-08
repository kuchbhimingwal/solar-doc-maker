import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ppa from "./pages/Ppa";
import Layout from "./Layout";
import Home from "./pages/Home";
import Authority from "./pages/Authority";
import Model from "./pages/Model"
import Commision from "./pages/Commision";
import Joininspection from "./pages/Joininspection";
import AllDocs from "./pages/AllDocs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ppa" element={<Ppa />} />
          <Route path="authority" element={<Authority />} />
          <Route path="model" element={<Model />} />
          <Route path="commision" element={<Commision />} />
          <Route path="joininspection" element={<Joininspection />} />
          <Route path="alldocs" element={<AllDocs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App