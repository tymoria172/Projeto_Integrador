import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let history = useHistory();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
    history.push('login')
  }

  var navbarComponent;
  if(token != ""){
    navbarComponent = <AppBar className="colorAppBar" position='absolute'>
    <Toolbar>
      <Box display="flex" justifyContent="center">
        <img
          src="https://i.imgur.com/BndCf1L.png"
          alt=""
          className="logo"
        />

<Link to="/home" className="text-decorator-none">
          <Button className="colorText">Home</Button>
        </Link>

      <Box className="text-decorator-none" onClick={goLogout}>
        <Button className="colorText">Login</Button>
      </Box>

      <Link to="/sobre" className="text-decorator-none">
        <Button className="colorText">Sobre</Button>
      </Link>

      <Link to='/posts' className='text-decorator-none'>
        <Button className="colorText">Postagens</Button>
      </Link>

      <Link to='/formularioPostagem' className='text-decorator-none'>
        <Button className="colorText">Nova Postagem</Button>
      </Link>

      <Link to='/temas' className='text-decorator-none'>
        <Button className="colorText">Temas</Button>
      </Link>

      <Link to="/formularioTema" className="text-decorator-none">
        <Button className="colorText">Cadastrar temas</Button>
      </Link>

      <Link to="/contato" className="text-decorator-none">
          <Button className="colorText">Contato</Button>
      </Link>
      </Box>


      <Box display="flex" ml="auto" alignItems="center">
      </Box>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;