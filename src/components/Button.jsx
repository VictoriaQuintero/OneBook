function Boton({ children }) {
  return(
    <button className="max-w-max p-4 border-marronOscuro rounded-xl border-x-2 border-t-4 border-b-8 bg-marronForm flex items-center gap-2 font-chakra text-marronOscuro text-xl before:content-[' '] before:bg-black before:w-14 before:h-1 hover:border-b-4 hover:before:w-20">
        {children}
    </button>
  );
}

export default Boton;
