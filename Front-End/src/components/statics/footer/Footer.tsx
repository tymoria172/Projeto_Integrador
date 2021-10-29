import { Grid, Box, Typography } from '@material-ui/core';
import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Logo da Onu </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                        </Box>
                    </Box>
                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2021 Ypora Generation</Typography>
                        </Box>                        
                    </Box>
                </Grid>
            </Grid>
        </>
        
    )
}

export default Footer
