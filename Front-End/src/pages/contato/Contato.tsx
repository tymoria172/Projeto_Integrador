import React, { useEffect } from "react";
import "./Contato.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function Contato() {
  let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          history.push("/login")
  
      }
  }, [token])

  return (
    <>
    <Box className="image-tophome" display="flex" alignItems="flex-end">
    </Box>
    <Grid container direction="column" alignContent="center">
      <Box className="contato">
        <form >
          <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className="titulo"> Contate-nos </Typography>
          <TextField label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
          <TextField label='Email' variant='outlined' name='usuario' margin='normal' fullWidth />
          <TextField label='Mensagem' variant='outlined' name='senha' margin='normal' fullWidth />
          
          <Box marginTop={2} textAlign='center'>
            <Button type='submit' variant='contained' color='primary'>
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Grid>
    </>
);
}

export default Contato;
