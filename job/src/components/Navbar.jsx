import React from 'react';
import {AppBar, Toolbar, Stack} from "@mui/material"
const Navbar = () => {
    return (
        <AppBar>
            <Toolbar style={{border:'1px solid black'}}>
                <Stack >pricing</Stack>
                <Stack>pricing</Stack>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
