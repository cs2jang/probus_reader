import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AddBoxIcon from "@material-ui/icons/AddBox";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MainList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="adder menu">
        <ListItemLink href="#simple-list">
          <AddBoxIcon />
          <ListItemText primary="Add Menu" />
        </ListItemLink>
      </List>
      <Divider />
      <List component="nav" aria-label="main menu">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}
