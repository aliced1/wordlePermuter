import { React, useState } from 'react';
import { TextField, Box } from '@mui/material';

export default function MainField() {
    const [char1, setChar1] = useState("");

    const handleInput = (event) => {
        const newValue = event.target.value.toUpperCase();
        setChar1(newValue);
    };

    return (
        <Box
            sx={{
                width: 45, // Set a fixed width
                height: 45, // Set a fixed height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ccc", // Optional: Add a border for visibility
            }}
        >
            <TextField
                fullWidth
                value={char1}
                onChange={handleInput}
                maxRows={1}
                minRows={1}
                // variant='standard'
                slotProps={{
                    htmlInput: {
                        maxLength: 1,
                    },
                    // input: {
                    //     disableUnderline: true,
                    // }
                }}
            ></TextField>
        </Box>
    );
}