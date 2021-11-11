import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import "./Contato.css";

function Contato() {
  return (

    <Grid container>
    <Grid container item className="image-topcontato" display="flex" alignItems="flex-end">
      
        <h1 className="txtH1home">
          
        </h1>
      </Grid>

      <Grid container item direction='row' justifyContent='center' alignItems='center'>
        <Grid className='margin' alignItems='center' xs={6}>
          <Box paddingX={20}>

            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Fale conosco</Typography>

            <TextField
              label='email'
              variant='outlined'
              margin='normal'
              fullWidth />

            <TextField
              label='mensagem'
              margin='normal'
              fullWidth />

            <Box marginTop={2} textAlign='center'>

              <Button type='submit' variant='contained' color='primary'>
                Enviar
              </Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contato;
