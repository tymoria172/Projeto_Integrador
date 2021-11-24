import { Grid, Typography, Box, Avatar, Stack } from "@mui/material";
import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <div>
      <Box className="image-tophome" display="flex" alignItems="flex-end">
      </Box>
      <Box className="image-top" display="flex" alignItems="flex-end">
      </Box>
      <Grid
        container
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="caixa"
        margin-right={3}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h2"
              align="left"
              className="titulo">
              Apoiando a comunidade e a inovação
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} className="about" display="flex" alignItems="center">
          <Typography
            variant="h6"
            gutterBottom
            color="textPrimary"
            component="p"
            align="left"
          >
            O Yporã foi uma rede social com proposito de informar e denunciar problemas regionais relacionados a água potável e saneamento básico. Com Os Objetivos de Desenvolvimento Sustentável (ODS), a plataforma tem o intuito de ser uma rede comunitária, aonde os usuários podem informar e alertar problemas hídricos ou de saneamento na sua região, também temos o intuito de que o Yporã seja uma rede de troca de conhecimentos, de como podemos ultrapassar esses desafios, melhorando a situação do país.
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <Box className="box1" display="flex" alignItems="center" flexDirection="column" paddingBottom={5}>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              component="p"
              align="center"
            >
              O Yporã foi desenvolvido durante o Bootcamp da Generation Brasil, Desenvolvedor Web Java Full Stack Junior. Durante o programa de 3 meses de imersão total no mundo de desenvolvimento web, desde a criação da API no BackEnd a conclusão no FrontEnd utilizando as ferramentas de desenvolvimento mais utilizadas do mercado.
              <br />
              <br />
            </Typography>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/328192920?h=d475fff31e" width="1200" height="360" frameBorder="0" allowFullScreen></iframe>
          </Box>
        </Grid>       
      </Grid>
    </div>
  );
}

export default Sobre;