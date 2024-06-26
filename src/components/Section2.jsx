/* eslint-disable react/prop-types */
import { Box, Container, Grid, Typography } from "@mui/material";

const Section2 = ({ heading, text, img }) => {
  return (
    <Container
      sx={{
        height: "100vh",
        maxHeight: { xs: "500px", sm: "650px", md: "790px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container appear"
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="image_Wrapper">
            <img width="100%" className="image" src={img} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ alignSelf: "center" }}>
          <Typography className="heading">{heading}</Typography>
          <Typography className="text">{text}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2;
