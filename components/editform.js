import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
  },
  root: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
}));

export default function EditProfileForm() {
  const classes = useStyles();
  const { currentUser } = useUser();
  const router = useRouter();

  const validationSchema = yup.object({
    deskripsi: yup.string(),
    pekerjaan: yup.string(),
    domisili: yup.string(),
    suku: yup.string(),
    status: yup.string(),
    pendidikanTerakhir: yup.string(),
    hobi: yup.string(),
    karakterPositif: yup.string(),
    karakterNegatif: yup.string(),
    visimisi: yup.string(),
  });

  const handleEdit = async ({
    deskripsi,
    pekerjaan,
    domisili,
    suku,
    status,
    pendidikanTerakhir,
    hobi,
    karakterPositif,
    karakterNegatif,
  }) => {
    const data = localStorage.getItem("currentUser");
    const response = await fetch("/api/editProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deskripsi: deskripsi,
        pekerjaan: pekerjaan,
        domisili: domisili,
        suku: suku,
        status: status,
        pendidikanTerakhir: pendidikanTerakhir,
        hobi: hobi,
        karakterPositif: karakterPositif,
        karakterNegatif: karakterNegatif,
        userId: parseInt(data[7]),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("currentUser", JSON.stringify(data.result));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      deskripsi: "",
      pekerjaan: "",
      domisili: "",
      suku: "",
      status: "",
      pendidikanTerakhir: "",
      hobi: "",
      karakterPositif: "",
      karakterNegatif: "",
      visimisi: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleEdit,
  });

  return (
    <>
      <Container maxWidh="sm" className={classes.Container}>
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" style={{ padding: "10px" }}>
            Lengkapi Data Diri Kamu
          </Typography>
          <div className={classes.root}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="desc"
                    name="deskripsi"
                    variant="outlined"
                    fullWidth
                    id="deskripsi"
                    label="Deskripsi Diri"
                    autoFocus
                    value={formik.values.deskripsi}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="job"
                    name="pekerjaan"
                    variant="outlined"
                    fullWidth
                    id="pekerjaan"
                    label="Pekerjaan"
                    autoFocus
                    value={formik.values.pekerjaan}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="domisili"
                    name="domisili"
                    variant="outlined"
                    fullWidth
                    id="domisili"
                    label="Domisili"
                    autoFocus
                    value={formik.values.domisili}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="suku"
                    name="suku"
                    variant="outlined"
                    fullWidth
                    id="suku"
                    label="Suku"
                    autoFocus
                    value={formik.values.suku}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="status"
                    name="status"
                    variant="outlined"
                    fullWidth
                    id="status"
                    label="Status Pernikahan"
                    autoFocus
                    value={formik.values.status}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    autoComplete="pendidikan terakhir"
                    name="pendidikanTerakhir"
                    variant="outlined"
                    fullWidth
                    id="pendidikanTerakhir"
                    label="Pendidikan Terakhir"
                    autoFocus
                    value={formik.values.pendidikanTerakhir}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="hobi"
                    name="hobi"
                    variant="outlined"
                    fullWidth
                    id="hobi"
                    label="Hobi"
                    autoFocus
                    value={formik.values.hobi}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="karakter positif"
                    name="karakterPositif"
                    variant="outlined"
                    fullWidth
                    id="karakterPositif"
                    label="Karakter Positif"
                    autoFocus
                    value={formik.values.karakterPositif}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="karakter negatif"
                    name="karakterNegatif"
                    variant="outlined"
                    fullWidth
                    id="karakterNegatif"
                    label="Karakter Negatif"
                    autoFocus
                    value={formik.values.karakterNegatif}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="visimisi"
                    name="visimisi"
                    variant="outlined"
                    fullWidth
                    id="visimisi"
                    label="Visi dan Misi Pernikahan"
                    autoFocus
                    value={formik.values.visimisi}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    type="reset"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    className={classes.submit}
                    href="/"
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.submit}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Container>
    </>
  );
}
