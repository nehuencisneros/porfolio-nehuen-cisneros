import { Link } from "react-router-dom"
import { SelectButton } from "../../styled/Selects/Select"
import style from "./About.module.css"

export const About: React.FC<{}> = () => {
   
   return (
      <div>
         <div className={style.divContainer}>
            <div className={style.divTerminalContainer}>
               <div className={style.pestanaContainer}>
                  <div className={style.pestana}>
                     <h3>Terminal</h3>
                     <h3>x</h3>
                  </div>
                  <div className={style.pestana2}>
                     <h3>Sobre mi</h3>
                     <h3>x</h3>
                  </div>
               </div>
               <div className={style.cajaTerminal}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start", paddingInline: "2rem" }}>
                     <h4 className={style.compiled}>Compiled successfully!</h4>
                     <h4 className={style.compiled}>No issues found.</h4>
                     <h5 className={style.corte}>^C</h5>
                     <h4><h4 className={style.commandLine}>Nehuen@Desktop {'> '}</h4>Soy desarrollador web Full Stack con casi 10 
                     años en trabajos relacionados con la atención a terceros (clientes, colaboradores y proveedores), lo que me 
                     permitió perfeccionar habilidades tales como definir prioridades, trabajar coordinadamente, acoplarme rápido 
                     a equipos y a ser resolutivo a la hora de comprender y detectar necesidades. Trabajo con TypeScript y JavaScript 
                     en proyectos con el Stack PERN y MERN, con fuerte manejo del Backend y de la funcionalidad y fluidez de los 
                     componentes. Mis herramientas de cabecera son GitHub, Trello y Excalidraw, y, en proyectos grupales, las 
                     metodologías agiles Scrum y JIRA.</h4>
                     <h4 className={style.commandLine}>Para empezar escriba o seleccione :</h4>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}