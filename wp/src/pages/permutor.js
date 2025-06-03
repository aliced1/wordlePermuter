import { React, useEffect, useState } from "react";
import { Button, TextField, Box, Grid, Card } from '@mui/material';
import MainField from "../components/mainField";


export default function Permutor() {

    return (
        <body>
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
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            sx={{ pt: 10, pb: 10 }}
                        >
                            <Grid item>
                                <MainField />
                            </Grid>
                            <Grid item>
                                <MainField />
                            </Grid>
                            <Grid item>
                                <MainField />
                            </Grid>
                            <Grid item>
                                <MainField />
                            </Grid>
                            <Grid item>
                                <MainField />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </body >
    );
};

