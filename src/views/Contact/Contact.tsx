import style from "./Contact.module.css"

export const Contact: React.FC<{}> = () => {
   
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
                     <h3>Contacto</h3>
                     <h3>x</h3>
                  </div>
               </div>
               <div className={style.cajaTerminal}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start", paddingInline: "2rem" }}>
                     <h4 className={style.compiled}>Compiled successfully!</h4>
                     <h4 className={style.compiled}>No issues found.</h4>
                     <h5 className={style.corte}>^C</h5>
                     <h4><h4 className={style.commandLine}>Nehuen@Desktop {'> '}</h4>
                     </h4>
                     <h4 className={style.commandLine}>Para empezar escriba o seleccione :</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}