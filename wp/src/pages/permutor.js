import { React, useEffect, useState } from "react";
import { Button, TextField, Box, Grid, Card } from '@mui/material';
import MainField from "../components/mainField";


export default function Permutor() {
    const [chars, setChars] = useState(["", "", "", "", ""]);

    // Update characters on change and make uppercase
    const handleInput = (index) => (event) => {
        const newChars = [...chars];
        newChars[index] = event.key.toUpperCase();
        setChars(newChars);
        if (index < 4) document.getElementById(`characterId${index + 1}`).focus();
        // console.log('chars:', newChars);
        // console.log('event.key:', event.key);
    };

    return (
        <div>
            <h1>Welcome to the perm</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        // maxHeight: 100,
                        backgroundColor: "#f1f2f3",
                    }}
                >
                    <Grid >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            sx={{ pt: 10, pb: 10 }}
                        >
                            {chars.map((char, index) => (
                                <Grid key={index}>
                                    <MainField
                                        char1={char}
                                        handleInput={handleInput(index)}
                                        index={index}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};

