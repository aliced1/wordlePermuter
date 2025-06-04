import { React, useState } from "react";
import { Box, Grid, Radio } from '@mui/material';
import MainField from "../components/mainField";
import UseRadioGroup from "../components/radioGroup";


export default function Permutor() {
    const [chars, setChars] = useState(["", "", "", "", ""]);
    const [radioValues, setRadioValues] = useState(["green", "green", "green", "green", "green"]);

    // Update characters on change and make uppercase
    const handleInput = (index) => (event) => {
        const newChars = [...chars];
        newChars[index] = event.key.toUpperCase();
        setChars(newChars);
        if (index < 4) document.getElementById(`characterId${index + 1}`).focus();
        // console.log('chars:', newChars);
        // console.log('event.key:', event.key);
        calculatePermutations();
    };

    // Handle radio group value changes
    const handleRadioChange = (index) => (event) => {
        const newRadioValues = [...radioValues];
        newRadioValues[index] = event.target.value;
        setRadioValues(newRadioValues);
        calculatePermutations();
        // console.log('radioValues:', radioValues);
    };

    const calculatePermutations = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const permutes = [];
        for (let i = 0; i < chars.length; i++) {

            // if any character is empty do not calculate permutations
            if (chars[i] == "") return;

            else if (radioValues[i] == "yellow") {
                permutes.push(alphabet.map((char) => {
                    const permutation = [...chars];
                    permutation[i] = char;
                    return permutation;
                }));
            }
        }
        console.log(permutes.flat());
    }

    return (
        <div>
            <h1>Welcome to the perm</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={2}
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
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ pt: 10, pb: 0 }}
                        >
                            {radioValues.map((value, index) => (
                                <Grid key={`radio${index}`} size={2}>
                                    <UseRadioGroup
                                        onChange={handleRadioChange(index)}
                                        value={value}
                                    >
                                    </UseRadioGroup>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ pt: 0, pb: 10 }}
                        >
                            {chars.map((char, index) => (
                                <Grid key={`entry${index}`} size={2}>
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

