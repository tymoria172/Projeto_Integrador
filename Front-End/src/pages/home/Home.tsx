import React from "react";
import "./Home.css";
import { Box, Grid,  } from "@material-ui/core";

function Home() {
  return (
    <>
            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1}}>

                    <Box className="coluna1">
                        <h1>ola</h1>
                    </Box>


                    <Grid container className="coluna2">
                        <Grid item container direction='column' xs={12} sm={4}>



                            <Box className="filha"></Box>

                        </Grid>

                        <Box className="filha"></Box>
                        <Box className="filha"></Box>


                    </Grid>


                    <Box className="coluna3">
                        <h1>hello</h1>
                    </Box>

                </Box>
            </div>
        </>
  );
}

export default Home;
