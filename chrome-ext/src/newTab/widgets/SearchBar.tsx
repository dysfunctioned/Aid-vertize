import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`, '_blank');
    };

    return (
        <form onSubmit={handleSearch}
            style={{
                borderRadius: '50px', background: '#FFF',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                width: '30%',
                marginTop: '20px'
            }}>
            <TextField
                placeholder="Search Google"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <IconButton type="submit">
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderRadius: '50px'
                        },
                    },
                }}
                style={{ width: '100%', }}
            />
        </form>
    )
}