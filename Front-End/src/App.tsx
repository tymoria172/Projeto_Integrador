import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/statics/navbar/Navbar";
import Footer from "./components/statics/footer/Footer";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contato from "./pages/contato/Contato";
import Sobre from "./pages/sobre/Sobre";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <div style={{minHeight: '100vh'}}>
          <Route exact path="/">
            <Login />
          </Route>
          

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/cadastro">
            <CadastroUsuario />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>
          
        </div>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
