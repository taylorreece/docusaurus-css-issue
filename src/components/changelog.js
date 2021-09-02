import React from "react";
import dateFormat from "dateformat";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    marginBottom: "16px",
  },
  titleBar: {
    backgroundColor: "gray",
    color: "black",
    display: "flex",
    padding: "16px",
  },
  cardContent: {
    paddingBottom: "0 !important",
  },
});

export const ChangeLogEntry = ({ children, date }) => {
  const classes = useStyles();
  const formattedDate = dateFormat(
    new Date(date),
    "mmmm dd, yyyy",
    true // Account for timezones
  ).toUpperCase();

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.titleBar}>
          <span>{formattedDate}</span>
        </div>
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    </>
  );
};
