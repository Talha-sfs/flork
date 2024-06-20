import { Box } from "@mui/system";
import image4 from "../assets/4.png";
import { Container, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Box className="spotMain_wrapper">
      <Container>
        <Box className="spotText_wrapper" sx={{ padding: "0rem 3rem" }}>
          <Typography className="heading" sx={{ fontSize: { xs: "1rem" } }}>
            Join Us and Relax, Your Spot is Reserved
          </Typography>
          <Typography className="text">
            Tired of the heat from other coins? Swap stress for fun with us—your
            spot is ready!
          </Typography>
        </Box>
        <Box className="spotImage_wrapper">
          <img width="100%" src={image4} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
