import React, { useEffect } from 'react'
import { Grow, Paper } from '@mui/material';

function Settings(props) {
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                props.setDisplay(null);
            }
        };
        document.addEventListener('keydown', handleEscKey);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [props.setDisplay]);

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
                    minHeight: '515px',
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

export default Settings