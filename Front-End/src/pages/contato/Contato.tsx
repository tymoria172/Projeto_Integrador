import { Grid, Box } from '@mui/material';
import React, { useEffect } from "react";
import "./Contato.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

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
    <Grid container direction="column" alignContent="center">
      <Box className="contato">
        <Box>
          <h1>Nome:</h1>
          <p> email: </p>
          <input type="Mensagem" />
          <p>conteudo:</p>
          <input type="Mensagem" />
          <h2>Mensagem:</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            impedit, expedita quia maiores quod nam dolor ab beatae id,
            voluptatum veniam. Minus sit a ex pariatur. Odio nesciunt fugiat
            dolorem!
          </p>
          <Box>
            <input type="Mensagem" />
            <button>envio</button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Contato;
