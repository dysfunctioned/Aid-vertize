import React from 'react'
import './dashboard.css'
import { Grow, Paper } from '@mui/material';

function Dashboard(props) {
    return props.display != null ? (
        <Grow in={props.display != null} className='box'>
            <Paper
                elevation={4}
                style={{
                    zIndex: 3, // Higher zIndex to appear above the Backdrop
                    display: props.display != null ? 'block' : 'none',
                }}
            >
                {props.children}
            </Paper>
        </Grow>
    ) : <></>;
}

export default Dashboard