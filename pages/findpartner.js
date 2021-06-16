import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Container } from "@material-ui/core";
import Kartu from "../components/card";
import { PrismaClient } from "@prisma/client";
import PropTypes from "prop-types";

const prisma = new PrismaClient();

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FEEAF0",
  },
  gridContainer: {},
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
}));

export async function getStaticProps() {
  const datas = await prisma.user.findMany();
  if (!datas) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      datas,
    },
  };
}

export default function findpartner({ datas }) {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box display="flex" className={classes.root}>
        <Container maxWidth="lg">
          <Box marginTop="50px">
            <Typography variant="h3">Find Partner</Typography>
          </Box>
          <Box marginTop="10px">
            <Typography variant="subtitle1" paragraph={true}>
              temukan partner yang match denganmu dan ajukan proposal.
            </Typography>
          </Box>
          <Grid container spacing={4} className={classes.gridContainer}>
            {datas.map((data) => (
              <Grid key={data.id} item xs={6} sm={3}>
                <Kartu dataContent={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

findpartner.propTypes = {
  datas: PropTypes.array,
};
