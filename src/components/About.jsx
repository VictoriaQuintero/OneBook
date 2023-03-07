function About() {
  return (
    <section className="min-h-screen bg-marronClaro p-10 flex flex-col items-center justify-start gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-2">
      <div className="lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1">
        <h1 className="text-center font-fj text-3xl">
          ¡ENCUENTRA TUS LIBROS FAVORITOS CON NOSOTROS!
        </h1>

        <p className="text-center font-chakra text-white text-2xl hidden sm:block ">
          Busca tu libro en base a la categoria que quieras, o busca a tu autor
          favorito, tambien puedes buscar la fecha de pubicacion
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:w-1/2 lg:col-start-1 lg:col-end-1 lg:row-span-full lg:justify-self-center font-chakra text-center text-letrasHead">
        <div className="flex flex-col gap-3 items-center">
          <img className="w-36" src="src\assets\estante-de-libros.png" alt="" />
          <p>Toda una biblioteca desde tu computador</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img className="w-36" src="src\assets\aumentador.png" alt="" />
          <p>Busca cualquier cosa que necesites y la encontraras en un libro</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img className="w-36" src="src\assets\libro.png" alt="" />
          <p>Libros para todos los gustos</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 font-chakra text-3xl text-center lg:col-start-2 lg:col-end-2 lg:gap-0 lg:w-auto lg:flex-row  lg:self-start">
        <div className="bg-categoria bg-cover bg-center py-10 border-negroClaro border-2 s:py-16 md:py-24 pl:h-full lg:overflow-hidden lg:flex-1 lg:flex lg:items-center lg:justify-center lg:hover:flex-auto transition-all duration-1000">
          <p className="lg:-rotate-90 lg:hover:rotate-0 transition-all duration-1000">CATEGORIA</p>
        </div>
        <div className="bg-autor bg-cover py-10 border-negroClaro border-2 s:py-16 md:py-24 pl:h-full lg:overflow-hidden lg:flex-1 lg:flex lg:items-center lg:justify-center lg:hover:flex-auto transition-all duration-1000">
          <p className="lg:-rotate-90 lg:hover:rotate-0 transition-all duration-1000">AUTOR</p>
        </div>
        <div className="bg-fecha bg-cover py-10 border-negroClaro border-2 s:py-16 md:py-24 pl:h-full lg:overflow-hidden lg:flex-1 lg:flex lg:items-center lg:justify-center lg:hover:flex-auto transition-all duration-1000">
          <p className="lg:-rotate-90 lg:hover:rotate-0 transition-all duration-1000">FECHA DE PUBLICACIÓN</p>
        </div>
      </div>
    </section>
  );
}

export default About;
