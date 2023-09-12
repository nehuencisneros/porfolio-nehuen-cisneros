import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";
import { NavBar } from "../NavBar/NavBar";

export const Terminal: React.FC<{}> = () => {

   return (
      <div>
         <NavBar />
         <div style={{display: "flex", justifyContent: "center",}}>
            <div style={{
               backgroundColor: "#17202A",
               border: "solid 3px #D32F2F",
               height: "50rem",
               width: "60%",
               marginTop: "2rem",
               borderRadius: "18px"
            }} />
         </div>
      </div>
   )
}