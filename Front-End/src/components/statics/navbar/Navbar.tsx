import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import useLocalStorage from "react-use-localstorage";
import { Box } from "@mui/material";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert('Usuário deslogado')
    history.push('login')
  }

  return (
    <div>
      <AppBar className="colorAppBar" position='absolute'>
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

            <Link to="/contato" className="text-decorator-none">
              <Button className="colorText">Contato</Button>
            </Link>

          <Link to="/formularioTema" className="text-decorator-none">
            <Button className="colorText">Cadastrar temas</Button>
          </Link>


          <Link to='/posts' className='text-decorator-none'>
            <Button className="colorText">Postagens</Button>
          </Link>

          <Link to='/temas' className='text-decorator-none'>
            <Button className="colorText">Temas</Button>
          </Link>
          </Box>


          <Box display="flex" ml="auto" alignItems="center">
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;