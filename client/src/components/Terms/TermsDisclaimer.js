import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop:80
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize:13
  },
  disclaimer: {
      listStyleType: "none"
  }
});

export default function TermsDisclaimer() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography className={classes.pos} color="textSecondary">
            <ul className={classes.disclaimer}>
                <li>This Vocabulary is intended to define terms and abbreviations used in JAGGAER daily communication.</li>
                <li>The main focus is to add and find the terms and abbreviations you don't know or can't remember at the moment.</li>
                <li> This Vocabulary is not a knowledge base and can't be used for any configuration/integration. </li>
                <li>Please be responsible when adding or editing, as the idea is to help everybody, including yourself.</li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
