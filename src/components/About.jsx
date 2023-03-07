import Caracteristicas from "./Caracteristicas";
import Filtros from "./Filtros";
function About() {
  return (
    <section className="min-h-screen bg-about bg-cover bg-center p-10 flex flex-col items-center justify-start gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <div className="lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1">
        <h1 className="text-center font-fj font-bold text-3xl lg:p-1">
          ¡ENCUENTRA TUS LIBROS FAVORITOS CON NOSOTROS!
        </h1>

        <p className="lg:bg-marronForm lg:bg-opacity-50 lg:p-2 lg:rounded-md text-center font-chakra text-white text-2xl hidden sm:block lg:text-xs ">
          Busca tu libro en base a la categoria que quieras, o busca a tu autor
          favorito, tambien puedes buscar la fecha de pubicacion
        </p>
      </div>
      <div className="hidden lg:bg-marronForm lg:bg-opacity-40 lg:p-5 lg:rounded-sm lg:flex lg:flex-col lg:gap-5 lg:w-1/2 lg:col-start-1 lg:col-end-1 lg:row-span-full lg:justify-self-start font-chakra text-center text-white">
        <Caracteristicas ruta={'src/assets/estante-de-libros.png'}>Toda una biblioteca desde tu computador</Caracteristicas>
        <Caracteristicas ruta={'src/assets/aumentador.png'}>Busca cualquier cosa que necesites y la encontraras en un libro</Caracteristicas>
        <Caracteristicas ruta={'src/assets/libro.png'}>Libros para todos los gustos</Caracteristicas>
      </div>
      <div className="w-full flex flex-col gap-10 font-chakra text-3xl text-center lg:h-full lg:col-start-2 lg:col-end-2 lg:gap-0 lg:w-full lg:flex-row  justify-self-center">
        <Filtros>CATEGORIA</Filtros>
        <Filtros>AUTOR</Filtros>
        <Filtros>FECHA DE PUBLICACIÓN</Filtros>
      </div>
    </section>
  );
}
export default About;
