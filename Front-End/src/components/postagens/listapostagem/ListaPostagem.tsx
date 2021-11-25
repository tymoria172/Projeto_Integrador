import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import './ListaPostagem.css';

import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} marginTop="100px" >
            <Card variant="outlined">


              <Grid container>
                <Grid item xs={12} >
                  <Box display="flex" flexDirection="column">
                    <CardActions className='colorcard'>
                      <Box display="flex" flexDirection="column" alignItems="center">

                      <Box>
                          <Typography variant="h5" color="textSecondary" gutterBottom style={{ color: "black" }}>{post.titulo}</Typography>
                        </Box>

                      </Box>
                    </CardActions>

                    <Box display="flex" flexDirection="column">
                      <CardContent>



                        <Box marginTop="2%">
                          <Typography variant="h6" component="p">Texto: </Typography>
                          <Typography variant="body2" component="p">{post.texto}</Typography>
                        </Box>

                        <Box marginTop="2%" className="texto">
                          <Typography variant="h6" component="p">Local: </Typography>
                          <Typography variant="body2" component="p">{post.local}</Typography>
                        </Box>

                        <Box marginTop="2%" className="texto">
                          <Typography variant="h6" component="p">Tema: </Typography>
                          <Typography variant="body2" component="p">{post.tema?.nome}</Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h6">
                    <img src={post.imagem} alt="" />
                  </Typography>

                </Grid>

              </Grid>


              <CardActions className='colorcard'>
                <Box display="flex" justifyContent="center" mb={1.5} paddingLeft="17%">

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;