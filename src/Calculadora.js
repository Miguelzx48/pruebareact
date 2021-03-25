import { Button, Grid, Paper } from '@material-ui/core';
import React from 'react';


export default function Calculadora(){
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <Button>7</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Button>8</Button>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>9</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>/</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        4
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>5</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>6</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>*</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>1</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>2</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>3</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                    <Button>+</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}