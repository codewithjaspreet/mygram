import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Login.css";
import insta from '../../assets/insta.svg';
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';

export default function Login() {

  const useStyles = makeStyles({

    text1:{
      color: 'grey',
      textAlign: 'center',
    }
  })

  const classes = useStyles();
  return (
    <div className="card__wrapper">
      <div className="card__content">
        <Card>
          <div>
            <img src={insta} alt="insta" className="logo" />
          </div>
          <CardContent>
            <Typography variant="outlined" component="div" className= {classes.text1}>
              Sign Up to see photos & videos from your friends.
            </Typography>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth={true}
            />
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
