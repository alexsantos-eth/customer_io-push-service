"use client";
import { createTheme } from "@mui/material/styles";


export const defColors = ["#4259A9", "#4CDADD", "042"];
const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "var(--font-montserrat)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
          fontSize: "1rem",
          padding: "5px 15px",
          variants: [
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                borderColor: "rgba(0,0,0,.05)",
                color: "#828282",
                fontSize: "1rem",
                padding: "10px 15px",
                transition: "color 0.1s ease-in-out",

                "& > .MuiButton-startIcon": {
                  transition: "color 0.1s ease-in-out",
                },

                "&:hover": {
                  borderColor: `${defColors[0]}`,
                  backgroundColor: "#FBFBFB",
                  color: `${defColors[0]}`,

                  "& > .MuiButton-startIcon": {
                    color: `${defColors[0]}`,
                  },
                },
              },
            },
          ],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 5px 10px rgba(0,0,0,0.07)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#292865",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "#292865",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#292865",
          borderRadius: "12px",
        },
      },
    },
  },
  palette: {
    secondary: {
      main: `${defColors[1]}`,
      light: `${defColors[1]}`,
      dark: `${defColors[3] ?? "#547BAE"}`,
    },
    primary: {
      main: `${defColors[0]}`,
      light: `${defColors[0]}`,
      dark: `${defColors[0] ?? "#547BAE"}`,
    },
  },
});

export default theme;
