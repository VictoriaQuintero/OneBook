import { useState } from "react";
import Swal from "sweetalert2";
import Boton from "./Button";
function Landing() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  function envioData(e) {
      e.preventDefault();
    if (nombre.trim().length < 3 || !isNaN(nombre)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          "Agregue un Nombre Valido (sin espacios en blanco y sin numeros)",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "I am in love with someone.",
          userId: 5,
        }),
      }).then((res) => {
        if (res.ok == true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario Agregado!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  }

  return (
    <div className="min-h-screen bg-marronClaro p-5 flex sm:flex-col sm:gap-5 lg:gap-10 xl:flex-row xl:p-0 xl:gap-5">
      <img
        className="hidden sm:block sm:w-full sm:h-1/2 xl:w-1/2 xl:h-screen object-cover"
        src="\src\assets\autor.jpg"
        alt="..."
      />
      <div className="flex flex-col items-center justify-center gap-10 sm:h-1/2 xl:p-5 xl:gap-20 2xl:py-10">
        <h1 className="font-fj text-marronForm text-center text-3xl lg:text-4xl xl:text-2xl 2xl:text-4xl">
          ¿Quieres estar enterado de cada libro que se agrega a nuestra
          biblioteca?
        </h1>
        <p className="font-chakra text-negroClaro text-justify lg:text-3xl xl:text-2xl">
          Suscribete y enterate te enviaremos un correo cada vez que se agregue
          un nuevo libro, ¡Queremos que no te pierdas de nada!
        </p>
        <form
          className="bg-marronForm px-5 py-16 rounded-lg w-full flex flex-col items-center gap-5 lg:px-14 lg:py-20 xl:p-5 xl:w-full xl:flex-row xl:flex-wrap xl:justify-between 2xl:gap-2"
          onSubmit={envioData}
        >
          <input
            value={nombre}
            className="w-full font-chakra  p-3 rounded-sm self-start border-negroClaro border-2 sm:w-1/2 lg:text-2xl lg:p-5 xl:p-2 xl:text-lg"
            type="text"
            placeholder="Nombre"
            name=""
            id=""
            required
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <input
            value={correo}
            className="w-full font-chakra p-3 rounded-sm border-negroClaro border-2 lg:text-2xl lg:p-5 xl:p-2 xl:text-lg xl:w-48 2xl:w-1/2"
            type="email"
            placeholder="Correo electronico"
            name=""
            id=""
            required
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
          />
          <Boton>Unirme</Boton>
        </form>
      </div>
    </div>
  );
}

export default Landing;
