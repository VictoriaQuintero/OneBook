import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { Outlet } from "react-router-dom";
function Footer() {
  return (
    <div>
      <Outlet />
      <div className="bg-negroClaro flex flex-col items-center gap-1 p-5">
        <h1 className="text-letrasNaraOscuro font-fj text-3xl">OneBook</h1>
        <p className="text-backNaranja font-chakra text-xs -mt-2 mb-3">
          Siguenos en nuestras redes
        </p>
        <div className="flex gap-10 text-white">
          <a href="/unirme">
            <FaFacebookSquare />
          </a>
          <a href="/unirme">
            <FaInstagramSquare />
          </a>
          <a href="/unirme">
            <FaTwitterSquare />
          </a>
          <a href="/unirme">
            <FaPinterestSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
