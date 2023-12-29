import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        const regex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

        if (regex.test(searchTerm)) {
            if (!searchTerm.startsWith('https') && !searchTerm.startsWith('http')) {
                window.location.href = new URL('https://' + searchTerm).href;
            }
            window.location.href = new URL(searchTerm).href;
        } else {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        }
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