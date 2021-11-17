import React, { useEffect } from "react";
import "./Home.css";
import { Box, Container, Paper, Button, Typography, Grid } from '@mui/material';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function Home() {
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
            <Grid container className="container">
                <Grid item xs={6} md={7}>
                    <Box paddingX={1} >

                        <Typography
                            className="titulo"
                            variant="h2"
                            component="h2" >
                            Bem vindes a rede social Yporã!
                        </Typography>
                        <Typography variant="h6" component="h6" align="center" className='font'>
                            A Yporã é uma rede social voltada a ODS 6 da ONU. Aqui é um espaço aberto para compartilharmos dicas sobre o consumo consciente da água, fazer denúncias sobre problemas de água potável e saneamento e fazer avisos sobre enchentes ou falta d’água.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Box p={1} >
                        <img src="https://cdn.discordapp.com/attachments/889885339131457551/902950841860898876/output-onlinepngtools_2.png" alt="Logo Yporã" min-width='750px' height="450px" />
                    </Box>
                </Grid>
            </Grid>
            <Grid xs={12} className='postagens'>
                <Box marginTop={5} padding={2}>
                    <CarouselComponent />
                </Box>
            </Grid>
            <Grid xs={12}>
                <TabPostagem />
            </Grid>
        </>
    );
}

export default Home;