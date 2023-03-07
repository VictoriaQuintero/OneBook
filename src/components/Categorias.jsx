import Card from "./Cards";
function Categorias() {
  return (
    <div className="min-h-screen p-10 flex flex-col gap-10">
      <p className="w-full font-fj text-letrasNaraOscuro text-xl text-center font-bold">
        Explora todas las categorias que tenemos para ti
      </p>
      <div className="flex flex-wrap justify-evenly gap-5">
        <Card>CIENCIAS</Card>
        <Card>ROMANCE</Card>
        <Card>FANTASIA</Card>
        <Card>TERROR</Card>
        <Card>DRAMA</Card>
        <Card>ANIMADOS</Card>
      </div>
    </div>
  );
}

export default Categorias;
