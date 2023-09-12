import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";
import { ButtonNavBar } from "../../styled/ButtonNavBar/ButtonNavbar";

export const NavBar: React.FC<{}> = () => {

   return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#172a45" }}>
         <AppBar position="sticky" sx={{ backgroundColor: "#172a45", backgroundImage: "none" }}>
            <Toolbar>
               <Container maxWidth="xl" sx={{ my: 2 }}>
                  <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                     <Grid item mr={1}>
                        <ButtonNavBar code="[ 0 ]" tag="Sobre mi" />
                     </Grid>
                     <Grid item mr={1}>
                        <ButtonNavBar code="[ 1 ]" tag="Proyectos" />
                     </Grid>
                     <Grid item mr={1}>
                        <ButtonNavBar code="[ 2 ]" tag="Tecnologías" />
                     </Grid>
                     <Grid item mr={1}>
                        <ButtonNavBar code="[ 3 ]" tag="acerca de" />
                     </Grid>
                  </Grid>
               </Container>
            </Toolbar>
         </AppBar>
      </Box>
   )
}