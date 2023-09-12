import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette{
    BG = "#172a45",
    FONT_GLOBAL = 'Chakra Petch',
    ERROR_MAIN ="#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.2)",
    SUCCESS_MAIN = "#66BB6A",
    BG_SUCCESS_MAIN = "RGBA(102,187,106,0.2)",
    TERMINAL = "#00FF7F"
}


const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.TERMINAL,
        }
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
        h1:{
            fontSize: '1.6rem', // Default font size
            '@media (min-width:520px)': {
                fontSize: '2.2rem', // Adjust font size for medium screens
            },
            '@media (min-width:720px)': {
                fontSize: '3.15rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '4.4rem', // Adjust font size for medium screens
            },
            '@media (min-width:1280px)': {
              fontSize: '6rem', // Adjust font size for large screens
            },
        },
        h2:{
            fontSize: '1rem', // Default font size
            '@media (min-width:600px)': {
              fontSize: '2rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '4rem', // Adjust font size for large screens
            },
        },        
        h4:{
            fontSize: '0.6rem', // Default font size
            '@media (min-width:400px)': {
                fontSize: '0.8rem', // Adjust font size for medium screens
            },
            '@media (min-width:600px)': {
                fontSize: '1.1rem', // Adjust font size for medium screens
            },
            '@media (min-width:800px)': {
                fontSize: '1.35rem', // Adjust font size for large screens
            },
            '@media (min-width:1000px)': {
                fontSize: '1.7rem', // Adjust font size for large screens
            },
            '@media (min-width:1280px)': {
              fontSize: '2.15rem', // Adjust font size for large screens
            },
        },
        h5:{
            fontSize: '0.5rem', // Default font size
            '@media (min-width:400px)': {
                fontSize: '0.7rem', // Adjust font size for medium screens
            },
            '@media (min-width:600px)': {
                fontSize: '1rem', // Adjust font size for medium screens
            },
            '@media (min-width:800px)': {
                fontSize: '1.3rem', // Adjust font size for large screens
            },
            '@media (min-width:1000px)': {
                fontSize: '1.65rem', // Adjust font size for large screens
            },
            '@media (min-width:1280px)': {
              fontSize: '2rem', // Adjust font size for large screens
            },
        },
        h6:{
            fontSize: '0.4rem', // Default font size
            '@media (min-width:520px)': {
                fontSize: '0.60rem', // Adjust font size for medium screens
            },
            '@media (min-width:720px)': {
                fontSize: '0.9.rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
                fontSize: '1.2rem', // Adjust font size for large screens
            },
            '@media (min-width:1280px)': {
              fontSize: '1.5rem', // Adjust font size for large screens
            },
        },
        button:{
            fontSize: '0.8rem',
            // Default font size
            '@media (min-width:400px)': {
                fontSize: '0.8rem', // Adjust font size for medium screens
            },
            '@media (min-width:600px)': {
              fontSize: '1.1rem', // Adjust font size for medium screens
            },
            '@media (min-width:960px)': {
              fontSize: '1.5rem', // Adjust font size for large screens
            },
        },
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                    minWidth:"50px",
                    paddingBlock:0.5
                }
            },
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.5em",
                    fontSize: "2em"
                }
            },
            styleOverrides:{
                standardError:{
                    border: "1px solid" + themePalette.ERROR_MAIN,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess:{
                    border: "1px solid" + themePalette.SUCCESS_MAIN,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
    <ThemeProvider theme={theme}> 
        <CssBaseline/>
        {children}
    </ThemeProvider>
    )
};