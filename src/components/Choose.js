import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    background: "#E6F5E9",
    paddingBottom: 65,
  },
  title: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    color: "#34593E",
    fontFamily: "Poppins-Bold",
    fontSize: "2.5rem",
  },
  round: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fea: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  roundContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  roundDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    color: "#34593E",
    fontFamily: "Poppins-Medium",
    fontSize: "1.5rem",
  },
}));

const Choose = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Typography
          variant="h4"
          className={classes.title}
          sx={{ fontWeight: 600 }}
        >
          Why Choose Us
        </Typography>
        <Grid
          container
          spacing={3}
          maxWidth="lg"
          sx={{ margin: "auto", width: "inherit" }}
        >
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Link to="/comming-soon">
              <Box className={classes.roundDiv}>
                <Box
                  className={classes.round}
                  sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.3)" }}
                >
                  <img className={classes.fea} src="./images/expert.png" />
                </Box>
                <Typography variant="h6" className={classes.text}>
                  Our Experts
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Link to="/comming-soon">
              <Box className={classes.roundDiv}>
                <Box
                  className={classes.round}
                  sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.3)" }}
                >
                  <img
                    className={classes.fea}
                    src="./images/satisfied.png"
                    style={{ width: 170, height: 170 }}
                  />
                </Box>
                <Typography variant="h6" className={classes.text}>
                  2 Million <br /> Satisfied Users
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Link to="/comming-soon">
              <Box className={classes.roundDiv}>
                <Box
                  className={classes.round}
                  sx={{
                    // background: "#AEDFB7 !important",
                    boxShadow: "0 15px 10px 10px rgba(125,125,125,0.3)",
                  }}
                >
                  <img
                    className={classes.fea}
                    src="./images/money-back.png"
                    style={{ width: 230, height: 230, marginTop: 65 }}
                  />
                </Box>
                <Typography variant="h6" className={classes.text}>
                  Money Back
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.roundContainer}>
            <Link to="/comming-soon">
              <Box className={classes.roundDiv}>
                <Box
                  className={classes.round}
                  sx={{ boxShadow: "3px 4px 1px 1px rgba(0,0,0,0.3)" }}
                >
                  <img
                    className={classes.fea}
                    src="./images/certified.png"
                    style={{ width: 170, height: 170 }}
                  />
                </Box>
                <Typography variant="h6" className={classes.text}>
                  Certified Doctors
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Choose;
