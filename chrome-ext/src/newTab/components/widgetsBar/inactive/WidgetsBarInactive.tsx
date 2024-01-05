import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { WIDGETS_APPS } from '../../../../constants';
import useDisplayStore from '../../../../stores/displayStore';

export default function WidgetsBarInactive() {

    const { setDisplay } = useDisplayStore();

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            background: 'rgba(217, 217, 217, 0.40)', borderRadius: '10px', opacity: 0.8,
            left: '13px', position: 'absolute',
        }}>
            <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>
                {
                    WIDGETS_APPS.map((widget, i) => {
                        return (
                            <IconButton 
                                onClick={() => setDisplay(widget.name)}
                                key={i}
                            >
                                <widget.icon
                                //sx={{ color: '#00000033' }} 
                                />
                            </IconButton>
                        )
                    })
                }
                <div style={{ width: '29px', borderTop: '1px solid #00000033', marginLeft: '5px', }} />

                <IconButton onClick={() => setDisplay("General")}>
                    <SettingsIcon sx={{ color: '#00000033' }} />
                </IconButton>
            </ButtonGroup>
        </div>
    )
}
