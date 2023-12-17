import React from 'react'
import './dashboard.css'
import { Grow, Paper } from '@mui/material';

function Dashboard(props) {
    return props.display != null ? (
        <Grow in={props.display != null}>
            <Paper
                elevation={4}
                style={{
                    zIndex: 999,
                    display: props.display != null ? 'flex' : 'none',
                    flexDirection: 'column',

                    width: '65%',
                    height: '75%',
                    minWidth: '633px',
                    minHeight: '486px',
                    flexShrink: 0,
                    backgroundColor: '#F1F3F4',
                    borderRadius: '10px',
                    position: 'fixed',
                }}
            >
                {props.children}
            </Paper>
        </Grow>
    ) : <></>;
}

export default Dashboard