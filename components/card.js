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
    borderRadius: "22px",
  },
  media: {
    height: 140,
  },
  ava: {
    width: 91,
    height: 91,
    margin: theme.spacing(3, 1, 2),
  },
  btn: {
    backgroundColor: "#F80658",
  },
}));

export default function Kartu({ dataContent, ...props }) {
  const { firstName, lastName, email, id } = dataContent;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} {...props}>
        <Box display="flex">
          <Avatar
            src="https://source.unsplash.com/random"
            className={classes.ava}
          />
          <Box display="flex" flexDirection="column" marginTop="30px">
            <Typography variant="body2" gutterBottom>
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" gutterBottom>
              You can contact me at {email}
            </Typography>
            <Grid container justify="flex-end">
              <Grid item>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    className={classes.btn}
                  >
                    <Link href={`/profile/${id}`} passHref>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "#ffff" }}
                      >
                        Detail
                      </Typography>
                    </Link>
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </>
  );
}

Kartu.propTypes = {
  dataContent: PropTypes.object,
};
