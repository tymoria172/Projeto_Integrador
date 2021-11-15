import React from "react";
import "./Home.css";
import { Box, Container, Paper, Button, Typography, Grid } from "@material-ui/core";
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home() {
    return (
        <>

            <Box className="image-tophome" display="flex" alignItems="flex-end">
                <h1 className="txtH1">
                </h1>
            </Box>
            <Grid xs={12} className='postagens'>
                <Box marginTop={5} padding={2}>
                    <CarouselComponent />
                </Box>

            </Grid>
            <Box className="cor">
                <Grid container className="container">

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>

                    <Grid item xs={12}>

                        <Box className="image">


                        </Box>
                    </Grid>
                </Grid>

                <Grid container className="container">
                    <Grid item xs={6}>
                        <Box paddingX={2} >
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

                    <Grid item xs={4} >
                        <Box p={2} >
                            <img src="https://cdn.discordapp.com/attachments/889885339131457551/902950841860898876/output-onlinepngtools_2.png" alt="Logo Yporã" min-width='750px' height="450px" />
                        </Box>
                    </Grid>
                </Grid>


            </Box>

        </>
    );

}

export default Home;