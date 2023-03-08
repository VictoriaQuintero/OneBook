function Filtros({ children }) {
  let background = "";
  switch (children) {
    case "CATEGORIA":
      background = "bg-categoria";
      break;

    case "AUTOR":
      background = "bg-autor";
      break;

    case "FECHA DE PUBLICACIÓN":
      background = "bg-fecha";

    default:
      break;
  }
  return (
    <p
      className={
        background +
        " bg-cover bg-center py-10 border-black border-4 transition-all duration-500 s:py-16 md:py-24 lg:p-0 lg:h-full  lg:flex-1 lg:overflow-hidden lg:flex lg:items-center lg:justify-center lg:hover:flex-[3] xl:hover:flex-[7]"
      }
    >
      <div className="bg-marronForm bg-opacity-50 w-full h-full">
        <span className="lg:w-full lg:h-full flex items-center justify-center lg:p-2 text-center transition-all duration-500 lg:-rotate-90 lg:hover:rotate-0">
          {children}
        </span>
      </div>
    </p>
  );
}

export default Filtros;
