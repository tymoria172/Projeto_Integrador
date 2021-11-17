import { Grid, Box, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Footer.css';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent = 
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12} display="flex" justifyContent="space-between" className="footer">
                <Box className="box1">
                    <Box paddingTop={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                        <img src="https://cdn.discordapp.com/attachments/903679267219578951/903679563178061894/Ypora.png" alt="Logo UN" className="logoOnu"/>
                        <Box className="textsOnu" display="flex" flexDirection="column" alignItems="start">
                            <Typography variant="h6" align="center" className="txtOnu">Yporã </Typography>
                            <Typography variant="h6" align="center" className="txtOnu">Brasil </Typography>
                            <img src="https://i.imgur.com/CMeYLQp.png" alt="UN dots" />
                        </Box>                            
                    </Box>                        
                </Box>

                <Box className="box2" display="flex" alignItems="end">
                    <Box paddingTop={1} alignItems="end">
                        <Typography variant="subtitle2" align="center" gutterBottom className="textYpora" >© 2021 Todos os direitos reservados</Typography>
                    </Box>                        
                </Box>

                <Box className="boxInvisivel">
                    <Box paddingTop={1} alignItems="end" >
                    <a href="https://github.com/tymoria172/Projeto_Integrador">
                           <img src="https://cdn.discordapp.com/attachments/882022012170678324/910573523985109032/github.png" alt="" height="80px" width="80px" />
                       </a>
                    </Box>                        
                </Box>

            </Grid>
        </Grid>

    }

    return (
        <>
            {footerComponent}
        </>
        
    )
}

export default Footer
