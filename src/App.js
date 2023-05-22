import React from "react";
import "./style/app.css"
import { BrowserRouter} from "react-router-dom";
import Navbar from "./commponents/UI/Navbar/Navbar";
import AppRouter from "./commponents/AppRouter";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>

    </BrowserRouter>

  );
}

export default App;
