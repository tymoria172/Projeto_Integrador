import React, { useEffect } from "react";
import "./Contato.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { Grid, Box, Typography, Button, TextField, Stack, Avatar, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore } from "@mui/icons-material";

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
      <Box className="titulo5" alignItems="center" justifyContent="center">
        <Typography variant="h2" gutterBottom color="text.secondary" component="p" align="justify">
          Criadores
        </Typography>
      </Box>

      <Grid container direction="row" justifyContent="center" alignItems="center" className="containercards">
        <Grid alignItems="center" item xs={12}>

          <Box display="flex" justifyContent="center" className="box1">
            <Card sx={{ maxWidth: 345 }} className="card">

              <CardMedia
                component="img"
                height="235"
                image="https://avatars.githubusercontent.com/u/88911837?v=4"
                alt="André Ricardo" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  André Ricardo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contatos:
                </Typography>
                <a href="https://www.linkedin.com/in/andre-ricardo21/" target="_blank">
                  <img src="https://i.imgur.com/2f46ZLx.png" alt="" className="icones" />
                </a>
                <a href="https://github.com/tymoria172" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" className="icones" />
                </a>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                height="235"
                image="https://avatars.githubusercontent.com/u/82542653?v=4"
                alt="allison alberto" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Allison Alberto
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contatos:
                </Typography>
                <a href="https://www.linkedin.com/in/allisonalberto/" target="_blank">
                  <img src="https://i.imgur.com/2f46ZLx.png" alt="" className="icones" />
                </a>
                <a href="https://github.com/AllisonAlberto" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" className="icones" />
                </a>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                height="235"
                image="https://avatars.githubusercontent.com/u/55671400?v=4"
                alt="Vinícius Bacelar" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vinícius Bacelar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contatos:
                </Typography>
                <a href="https://www.linkedin.com/in/viniciusbacelar/" target="_blank">
                  <img src="https://i.imgur.com/2f46ZLx.png" alt="" className="icones" />
                </a>
                <a href="https://github.com/Viniciusovski" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" className="icones" />
                </a>
              </CardContent>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                height="235"
                image="https://avatars.githubusercontent.com/u/88975857?v=4"
                alt="Eduardo Domingos" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Eduardo Domingos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contatos:
                </Typography>
                <a href="https://www.linkedin.com/in/eduardo-domingos-677247220/" target="_blank">
                  <img src="https://i.imgur.com/2f46ZLx.png" alt="" className="icones" />
                </a>
                <a href="https://github.com/pcpdomingos" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="" className="icones" />
                </a>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contato;
