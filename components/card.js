import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Avatar,
  CardActionArea,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Link from "next/link";
// import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
// import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
// import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 373,
    minHeight: 148,
  },
  avatar: {
    maxWidth: 91,
    maxHeight: 91,
  },
  btn: {
    backgroundColor: "#F80658",
  },
  cardcontent: {
    marginLeft: "8px",
  },
  root: {
    maxWidth: 345,
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
}));

export default function Kartu({ dataContent, ...props }) {
  const { firstName, lastName, email, id } = dataContent;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} {...props}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Random Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {firstName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              my last name is {lastName} contact me at {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={`/profile/${id}`} passHref>
              <Typography variant="subtitle2">Detail</Typography>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

Kartu.propTypes = {
  dataContent: PropTypes.object,
};
