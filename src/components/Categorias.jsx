import TypeWriterEffect from 'react-typewriter-effect';
import Card from "./Cards";
function Categorias() {
  return (
    <div className="min-h-screen p-10 flex flex-col gap-10">

      <p className="font-fj text-letrasNaraOscuro text-xl flex items-center justify-center text-center font-bold after:content-[''] after:bg-amber-900 after:w-1/2 after:h-1 after:ml-2 before:content-[''] before:bg-amber-900 before:mr-4 before:w-1/2 before:h-1">
      <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            text="Explora todas las categorias que tenemos para ti"
            typeSpeed={100}
          />
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
