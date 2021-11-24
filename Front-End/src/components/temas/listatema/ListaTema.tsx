import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
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


  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      {
        temas.map(tema => (
          <Box m={2} marginTop="100px">
            <Card variant="outlined"  >


              <Grid container >
                <Grid item xs={12} >
                  <Box display="flex" flexDirection="column">

                    <CardActions className='colorcard'>
                      <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h5" color="textSecondary" gutterBottom style={{ color: "black" }}>
                          {tema.nome}
                        </Typography>
                      </Box>
                    </CardActions>

                    <CardActions className='tamanho'>
                      <Typography variant="h5" component="h2">
                        {tema.descricao}
                      </Typography>
                    </CardActions>

                  </Box>


                  <CardActions className='colorcard'>

                    <Box display="flex" justifyContent="center" mb={1.5} >

                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color='primary'>
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color='secondary'>
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>

                  </CardActions>


                </Grid>
              </Grid>
            </Card>
          </Box>
        ))

      }
    </>
  );
}


export default ListaTema;