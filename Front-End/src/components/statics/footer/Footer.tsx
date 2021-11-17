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
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12} display="flex" justifyContent="space-between" className="footer">
            <Box className="box1">
                <Box paddingTop={1} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <img src="https://i.imgur.com/oV0kO3d.png" alt="Logo UN" className="logoOnu"/>
                    <Box className="textsOnu" display="flex" flexDirection="column" alignItems="start">
                        <Typography variant="h6" align="center" className="txtOnu">Nações Unidas </Typography>
                        <Typography variant="h6" align="center" className="txtOnu">Brasil </Typography>
                        <img src="https://i.imgur.com/CMeYLQp.png" alt="UN dots" />
                    </Box>                            
                </Box>                        
            </Box>

            <Box className="box2" display="flex" alignItems="end">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="textYpora" >© 2021 Ypora Generation</Typography>
                </Box>                        
            </Box>

            <Box className="boxInvisivel">
                <Box paddingTop={1}>
                    <Typography></Typography>
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
