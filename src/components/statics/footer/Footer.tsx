import { Grid, Box, Typography, Link } from '@material-ui/core';
import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <>
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
                        <Box paddingTop={1}>

                            <a href="https://github.com/tymoria172">
                                <Typography variant="subtitle2" align="center" gutterBottom className="textYpora" >André Ricardo: </Typography>
                            </a>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textYpora" >© 2021 Ypora Generation</Typography>

                            <Typography variant="subtitle2" align="center" gutterBottom className="textYpora" >© 2021 Ypora Generation</Typography>

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
        </>
        
    )
}

export default Footer
