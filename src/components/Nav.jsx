import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const [clase, setClase] = useState("-left-full");
  function cambio() {
    if (clase == "-left-full") {
      setClase("left-0");
    } else {
      setClase("-left-full");
    }
  }
  return (
    <div>
      <header className="bg-marronForm flex items-center justify-between px-10 py-2">
        <Link to={'/'}>
          <p className="font-fj text-2xl p-5 animate-pulse">O|N|E|B|O|O|K</p>
        </Link>
        <nav className="">
          <ul
            className={
              clase +
              " absolute top-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-marronClaro font-fj text-letrasHead text-2xl transition-all duration-1000 sm:static sm:flex-row sm:h-auto sm:bg-transparent sm:transition-none z-10"
            }
          >
            <FaTimes
              className="absolute top-16 right-10 cursor-pointer text-4xl sm:hidden"
              onClick={cambio}
            />
            <Link to={"/about"}>
              <li 
              onClick={cambio}
              className="p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg">
                Sobre Nosotros
              </li>
            </Link>
            <Link to={"/categorias"}>
              <li 
              onClick={cambio}
              className="p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg">
                Categorias
              </li>
            </Link>
            <Link to={"/unirme"}>
              <li
              onClick={cambio}
              className="p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg">
                Quiero unirme
              </li>
            </Link>
          </ul>
          <FaBars
            className="text-4xl text-letrasHead cursor-pointer sm:hidden"
            onClick={cambio}
          />
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Nav;
