import React from "react";
import style from "./Terminal.module.css";
import { SelectButton } from "../../styled/Selects/Select";
import { Link } from "react-router-dom";

export const Terminal: React.FC<{}> = () => {

   return (
      <div>
         <div className={style.divContainer}>
            <div className={style.divTerminalContainer}>
               <div className={style.pestanaContainer}>
                  <div className={style.pestana}>
                     <h3>Terminal</h3>
                     <h3>x</h3>
                  </div>
               </div>
               <div className={style.cajaTerminal}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", paddingInline: "2rem" }}>
                     <h6 className={style.name1}>{'> '} </h6>
                     &nbsp;
                     <h1 className={style.name}>Nehuen Cisneros</h1>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start", paddingInline: "2rem" }}>
                     <h4 className={style.compiled}>Compiled successfully!</h4>
                     <h4 className={style.compiled}>No issues found.</h4>
                     <h5 className={style.corte}>^C</h5>
                     <h4><h4 className={style.commandLine}>Nehuen@Desktop {'> '}</h4>Soy un meticuloso y responsable desarrollador IT, que a fines de 2021 comenzó su camino estudiando informática.
                        Enfrentarme a un problema y tener la capacidad para resolverlo, es el porqué de haberme volcado a esta rama de la tecnología, y
                        la posibilidad de crear una app o una web, son el motor de que haya elegido la carrera de FullStack Developer en Henry.
                        Cuento con la paciencia y la dedicación adecuada para encarar y superar los desafíos que este rubro propone, y gracias a
                        haberme desempeñado más de 10 años en tareas relacionadas con la atención al cliente, colaboradores y proveedores,
                        relacionarme con otros e integrarme en grupos no me representa una dificultad. Desde ya, agradezco el tiempo tomado para leer esta minibio.
                        <Link to={"/about"} style={{ textDecoration: "none" }}><SelectButton name={"Saber más sobre mi"} number={null} /></Link></h4>
                     <h4 className={style.commandLine}>Para empezar escriba o seleccione :</h4>
                     <div className={style.selects}>
                        <Link to={"/about"} style={{ textDecoration: "none" }}>
                           <SelectButton name={"sobre mi"} number={" 0 "} />
                        </Link>
                        <Link to={"/projects"} style={{ textDecoration: "none" }}>
                           <SelectButton name={"proyectos"} number={" 1 "} />
                        </Link>
                        <Link to={"/techs"} style={{ textDecoration: "none" }}>
                           <SelectButton name={"skills"} number={" 2 "} />
                        </Link>
                        <Link to={"/contact"} style={{ textDecoration: "none" }}>
                           <SelectButton name={"contacto"} number={" 3 "} />
                        </Link>
                     </div>
                     <h4 className={style.compiled}>{'> '} <input className={style.inputcito}></input></h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

//Nehuen@DESKTOP-1E1A32P MINGW64 ~/Desktop/proyectos/porfolio-nehuen-cisneros