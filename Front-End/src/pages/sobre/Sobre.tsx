import { Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Sobre Nós!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              dolorum quisquam modi quia. Tempore, quo temporibus eos iste ipsa
              suscipit voluptatum nulla commodi qui fuga, consequatur culpa a
              atque nostrum.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>            
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/H88yIo2.png"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </div>
  );
}

export default Sobre;
