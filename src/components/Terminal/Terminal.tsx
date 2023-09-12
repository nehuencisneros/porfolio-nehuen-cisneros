import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import style from "./Terminal.module.css";

export const Terminal: React.FC<{}> = () => {

   return (
      <div>
         <NavBar />
         <div className={style.divContainer}>
            <div className={style.divTerminalContainer}>
               <div className={style.terminal}>
                  <div className={style.pestana}>
                     <h4>Terminal</h4>
                     <h3>X</h3>
                  </div>
               </div>
               <div className={style.cajaTerminal}>
               </div>
            </div>
         </div>
      </div>
   )
}