import { Box, AppBar, Button, Toolbar, Container, Grid, Stack, Badge } from "@mui/material";
import React from "react";

export const NavBar: React.FC<{}> = () => {

   return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#172a45" }}>
         <AppBar position="sticky" sx={{ backgroundColor: "#172a45", backgroundImage: "none" }}>
            <Toolbar>
               <Container maxWidth="xl" sx={{ my: 2 }}>
                  <Grid container direction="row" justifyContent="space-between" alignItems="center">
                     <Grid item>
                        <Stack spacing={1} direction={"row"}>
                           <Button sx={{ paddingInline: "10px" }} variant="outlined" >Sing In</Button>
                        </Stack>
                     </Grid>
                  </Grid>
               </Container>
            </Toolbar>
         </AppBar>
      </Box>
   )
}