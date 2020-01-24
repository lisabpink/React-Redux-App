import React from "react";
import { connect } from "react-redux";
import { getRandomUserData } from "../actions";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 400,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 20,
      },
      pos: {
        marginBottom: 12,
      },
       button: {
      margin: theme.spacing(),
    },
    input: {
      display: 'none',
    },
  }));

const UserData = props => {
    const classes = useStyles();
  return (
    <div>
         <Card className={classes.card}>
         <CardContent>  
      <Button variant="contained" color="secondary" className={classes.button}
        onClick={() => {
          props.getRandomUserData();
        }}
      >
        Get Random Yeezy Quote
      </Button>
      {props.error && <div>{props.error}</div>}
      {props.isloading ? (
        <div>loading...</div>
      ) : (
        <section>
          <h2>{props.user.quote}</h2>
          <h1>-{props.user.name}</h1>
        </section>
      )}
      </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.isloading,
    error: state.error,
    user: state.user
  };
};

export default connect(mapStateToProps, { getRandomUserData })(UserData);