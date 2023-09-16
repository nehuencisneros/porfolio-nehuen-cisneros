import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import style from "./Terminal.module.css";

export const Terminal: React.FC<{}> = () => {

   return (
      <div>
         <div className={style.divContainer}>
            <div className={style.divTerminalContainer}>
               <div className={style.pestanaContainer}>
                  <div className={style.pestana}>
                     <h4>Terminal</h4>
                     <h3>x</h3>
                  </div>
               </div>
               <div className={style.cajaTerminal}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", paddingInline: "2rem" }}>
                     <h6 className={style.name1}>{'> ' } </h6>
                     <h1 className={style.name}>Nehuen Cisneros</h1>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingInline: "2rem" }}>
                     <h5 className={style.compiled}>No issues found.</h5>
                     <h5 className={style.compiled}>Compiled successfully!</h5>
                     <h5 className={style.corte}>^C</h5>
                     <h5 className={style.compiled}>Nehuen@Desktop</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

//Nehuen@DESKTOP-1E1A32P MINGW64 ~/Desktop/proyectos/porfolio-nehuen-cisneros