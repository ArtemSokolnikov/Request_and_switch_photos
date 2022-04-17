import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Header = () => {
    return (
        <Box sx={{ position: 'relative'}}>
            <AppBar position="static">
                <Toolbar>
                    <PhotoCameraIcon sx={{ fontSize: "35px", mr: '15px' }} />
                    <Typography variant="h4">
                        Cool content
                    </Typography>
                    <Typography variant="subtitle2" sx={{ flexGrow: 0.15 }} >
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header