import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    color: "blue",
  },
  thing1: {
    color: "green",
  },
  thing2: {
    color: "green",
  },
  thing3: {
    color: "green",
  },
  thing4: {
    color: "green",
  },
  thing5: {
    color: "green",
  },
  thing6: {
    color: "green",
  },
  thing7: {
    color: "green",
  },
  thing8: {
    color: "green",
  },
  thing9: {
    color: "green",
  },
  thing10: {
    color: "green",
  },
}));

export default function AComponent() {
  const classes = useStyles();
  return (
      <>
        <p className={classes.root}>Text should be blue.</p>
        <p className={classes.thing1}>Thing 1 should be green</p>
        <p className={classes.thing2}>Thing 2 should be green</p>
        <p className={classes.thing3}>Thing 3 should be green</p>
        <p className={classes.thing4}>Thing 4 should be green</p>
        <p className={classes.thing5}>Thing 5 should be green</p>
        <p className={classes.thing6}>Thing 6 should be green</p>
        <p className={classes.thing7}>Thing 7 should be green</p>
        <p className={classes.thing8}>Thing 8 should be green</p>
        <p className={classes.thing9}>Thing 9 should be green</p>
        <p className={classes.thing10}>Thing 10 should be green</p>
      </>
  );
}