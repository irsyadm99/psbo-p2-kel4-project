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
  MakeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const prisma = new PrismaClient();

// const useStyles = MakeStyles((theme) => ({
//   paper: {
//     marginTop: "10px",
//   },
// }));

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
  //   const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box>
        <Container maxWidth="lg">
          <CssBaseline />
          <Paper elevation={3}>
            <Typography variant="h6" spacing={3}>
              First Name : {firstName}
            </Typography>
            <Typography variant="h6" spacing={3}>
              Last Name : {lastName}
            </Typography>
            <Typography variant="h6" spacing={3}>
              Email : {email}
            </Typography>
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
