import './App.css';
import { Button, Grid, Paper, TextField, withStyles } from '@material-ui/core';
import React from 'react';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: 400
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
});

const buttons = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', '.', 0, '=', '-'];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valores: '0'      
    }
  };

  calcular(valor) {
    if(valor != '=')    
      this.setState(state => state.valores += valor);
    else
      this.setState(state => state.valores = eval(state.valores));
  }

  handleChange(event, id) {

  }  
  render() {
    const classes = this.props;
    console.log('state',this.state.valores);
    return (
      <Grid container className={classes.root} spacing={3} >
        <Grid item xs={12}>
          <TextField value={this.state.valores} fullWidth variant="outlined" />
        </Grid>
        {
          buttons.map(button =>
            <Grid item xs={3}>
              <Paper>
                <Button onClick={() => this.calcular(button)} key={button}>{button}</Button>
              </Paper>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

export default withStyles(styles) (App);
