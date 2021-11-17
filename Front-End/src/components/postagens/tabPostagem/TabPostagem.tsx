import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { TabContext, TabPanel } from '@mui/lab';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
    <Box className="cor">
    <TabContext value={value}>
        <AppBar position="static" className="cor">
          <Tabs centered onChange={handleChange} >
            <Tab label="Postagens" value="1" className="cor"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" className="cor">
          <Box display="flex" flexWrap="wrap" justifyContent="center" flexDirection="column" className="cor">
            <ListaPostagem />
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}
export default TabPostagem;