function Caracteristicas({children, ruta}){
    return(
        <div className="flex flex-col gap-3 items-center">
          <img className="w-36" src={ruta} alt="" />
          <p>{children}</p>
        </div>
    )
}

export default Caracteristicas;