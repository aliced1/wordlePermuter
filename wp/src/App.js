import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { indigo, amber, red, grey } from '@mui/material/colors'


export const theme = createTheme({
  palette: {
    primary: red,
    secondary: amber,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;