import { Link } from "react-router-dom";
function GenericNotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center font-fj">
      <h1 className="font-bold text-4xl">Error 404</h1>
      <p>HOLA! PARECE QUE LA RUTA QUE ESTAS BUSCANDO NO EXISTE :(</p>
      <p className="text-letrasNaraOscuro text-xl">Volver al inicio <strong><Link to={'/'}>AQUI</Link></strong> </p>
    </div>
  );
}

export default GenericNotFound;
