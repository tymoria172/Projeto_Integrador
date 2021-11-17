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
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
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

          <Route path='/temas'>
            <ListaTema />
          </Route>

          <Route path='/posts'>
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>

          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>

          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

        </div>
      </Switch>

      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
