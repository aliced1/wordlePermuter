import { React, useState } from "react";
import { Box, Grid, Radio, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from '@mui/material';
import MainField from "../components/mainField";
import UseRadioGroup from "../components/radioGroup";


export default function Permutor() {
    const [chars, setChars] = useState(["", "", "", "", ""]);
    // const [radioValues, setRadioValues] = useState(["yellow", "yellow", "yellow", "yellow", "yellow"]);
    const [permutes, setPermutes] = useState([]);
    const [yellowChars, setYellowChars] = useState("");
    const [greyChars, setGreyChars] = useState("");

    // Update characters on change and make uppercase
    const handleInput = (index) => (event) => {
        const newChars = [...chars];
        newChars[index] = event.target.value.toUpperCase();
        setChars(newChars);
        if (index < 4) document.getElementById(`characterId${index + 1}`).focus();
        // console.log('chars:', newChars);
        // console.log('event.key:', event.key);
        calculatePermutations(newChars);
    };

    const handleYellowChars = (event) => {
        setYellowChars([...new Set(event.target.value.toUpperCase().split(""))].join(""));
        calculatePermutations(chars);
    }

    const handleGreyChars = (event) => {
        setGreyChars([...new Set(event.target.value.toUpperCase().split(""))].join(""));
        calculatePermutations(chars);
    }

    // Handle radio group value changes
    // const handleRadioChange = (index) => (event) => {
    //     const newRadioValues = [...radioValues];
    //     newRadioValues[index] = event.target.value;
    //     setRadioValues(newRadioValues);
    //     calculatePermutations(chars);
    //     // console.log('radioValues:', radioValues);
    // };

    const calculatePermutations = (perm_characters) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        // a set of unique permutations
        let permutes = new Set([]);

        for (let i = 0; i < perm_characters.length; i++) {

            // else if (radioValues[i] == "yellow") {
            alphabet.map((possible_char) => {
                const permutation = [...perm_characters];
                permutation[i] = possible_char;
                return permutation;
            }).forEach((permutation) => {

                // exclude permutations that contain grey characters
                greyChars.split("").forEach((greyChar) => {
                    if (permutation.includes(greyChar)) return;
                })

                // exclude permutations that do not contain yellow characters
                yellowChars.split("").forEach((yellowChar) => {
                    if (!permutation.includes(yellowChar)) return;
                })

                permutes.add(permutation.join(""))
            })
            // }
        }
        console.log('permutes:', permutes);
        setPermutes(Array.from(permutes).flat());
        console.log(Array.from(permutes).flat());
    }

    return (
        <div>
            <h1>Welcome to the permutor!</h1>
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
                        <TextField
                            sx={{ width: 300, textAlign: "center", mb: 2 }}
                            id="yellowChars"
                            label="Yellow Characters"
                            variant="outlined"
                            onChange={handleYellowChars}
                            value={yellowChars}
                            slotProps={{
                                htmlInput: {
                                    maxLength: 5,
                                },
                                // input: {
                                //     disableUnderline: true,
                                // }
                            }}
                        >
                        </TextField>
                        <TextField
                            sx={{ width: 300, textAlign: "center", mb: 2 }}
                            id="greyChars"
                            label="Grey Characters"
                            variant="outlined"
                            onChange={handleGreyChars}
                            value={greyChars}
                        >
                        </TextField>

                        {/* <Grid
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
                        </Grid> */}

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
                        <TableContainer className='table'>
                            <Table>
                                <TableBody>
                                    {permutes.map((perm) => (
                                        <TableRow key={perm}>
                                            <TableCell key={[perm]}>
                                                {perm}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};

