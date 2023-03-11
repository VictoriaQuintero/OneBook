import {FaArrowAltCircleRight} from "react-icons/fa"
function Boton({ children }) {
  return(
    <button className="max-w-max p-4 border-marronOscuro transition-all duration-500 before:transition-all before:duration-500 rounded-xl border-x-2 border-t-4 border-b-8 bg-marronForm flex items-center gap-2 font-chakra text-marronOscuro text-xl before:content-[' '] before:bg-black before:w-10 before:h-1 hover:border-b-4 hover:before:w-20">
        {children}
        <FaArrowAltCircleRight/>
    </button>
  );
}

export default Boton;
