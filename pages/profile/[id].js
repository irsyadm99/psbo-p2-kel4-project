import { PrismaClient } from "@prisma/client";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  Box,
  Typography,
  Grid,
  Container,
  CssBaseline,
  Paper,
  Button,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const prisma = new PrismaClient();

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export async function getStaticPaths() {
  const datas = await prisma.user.findMany();
  const paths = datas.map((data) => ({ params: { id: data.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const datas = await prisma.user.findMany({
    where: {
      id: parseInt(params.id),
    },
  });

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

export default function Profile({ datas }) {
  const { firstName, lastName, email } = datas[0];
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box marginTop="20px">
        <Container maxWidth="lg">
          <CssBaseline />
          <Paper elevation={3}>
            <Box spacing={5} marginLeft="20px">
              <Typography variant="h6" spacing={5}>
                Nama : {firstName} {lastName}
              </Typography>
              <Typography variant="h6" spacing={5}>
                Email : {email}
              </Typography>
            </Box>
            <Box display="flex" spacing={5} marginLeft="20px">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    Apply For Taaruf
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
Profile.propTypes = {
  datas: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
