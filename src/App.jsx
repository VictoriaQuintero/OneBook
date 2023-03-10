import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Inicio from "./components/Inicio";
import About from "./components/About";
import Categorias from "./components/Categorias";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import GenericNotFound from "./components/GenericNotFound";
function App() {
  return (
    <div className="App min-h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Footer />}>
            <Route index element={<Inicio />} />
            <Route path="/about" element={<About />} />
            <Route path="/categorias" element={<Categorias />}></Route>
            <Route path="/unirme" element={<Landing />} />
          </Route>
        </Route>
        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
