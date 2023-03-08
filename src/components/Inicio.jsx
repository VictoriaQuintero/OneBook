import { Link } from "react-router-dom";
import Boton from "./Button";
function Inicio() {
  return (
    <section className="min-h-screen bg-inicio bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="absolute  w-full h-screen bg-letrasNaraOscuro bg-opacity-30 flex flex-col items-center justify-center gap-5 p-10 text-center">
        <h1 className="font-fj bg-gradient-to-r from-neutral-800 to-zinc-700 bg-clip-text text-transparent text-4xl">
          Todos tus libros en un solo lugar
        </h1>
        <p className="text-letrasNaraOscuro font-chakra font-bold text-lg">
          ¡Solo registrate para notificarte cunado tengamos un nuevo libro para
          ti!
        </p>
        <Link to={'/unirme'}>
          <Boton>Leer aquí</Boton>
        </Link>
      </div>
    </section>
  );
}

export default Inicio;
