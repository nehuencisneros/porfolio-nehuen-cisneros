import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";
import { ButtonNavBar } from "../../styled/ButtonNavBar/ButtonNavbar";
import { Link } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {

   return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#172a45" }}>
         <AppBar position="sticky" sx={{ backgroundColor: "#172a45", backgroundImage: "none" }}>
            <Toolbar>
               <Container maxWidth="xl" sx={{ my: 2 }}>
                  <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                     <Grid item >
                        <Link to={"/about"} style={{ textDecoration: "none" }}>
                           <ButtonNavBar code="[ 0 ]" tag="Sobre mi" />
                        </Link>
                     </Grid>
                     <Grid item >
                        <Link to={"/projects"} style={{ textDecoration: "none" }}>
                           <ButtonNavBar code="[ 1 ]" tag="Proyectos" />
                        </Link>
                     </Grid>
                     <Grid item >
                        <Link to={"/techs"} style={{ textDecoration: "none" }}>
                           <ButtonNavBar code="[ 2 ]" tag="Skills" />
                        </Link>
                     </Grid>
                     <Grid item >
                        <Link to={"/contact"} style={{ textDecoration: "none" }}>
                           <ButtonNavBar code="[ 3 ]" tag="Contacto" />
                        </Link>
                     </Grid>
                  </Grid>
               </Container>
            </Toolbar>
         </AppBar>
      </Box>
   )
}