import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import heroImg from "../assets/heroImg.png";
import Iconify from "./iconify/iconify";

const Hero = () => {
  return (
    <>
      <Container
        className="container"
        sx={{
          height: "100vh",
          maxHeight: { xs: "350px", sm: "590px", md: "790px" },
        }}
      >
        <Box className="main_Wrapper">
          <Box
            pt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Box>
                <IconButton
                  sx={{
                    border: "2px solid #000",
                    boxShadow: "0px 4px 0px #000",
                  }}
                >
                  <Iconify color="#000" icon="pajamas:twitter" />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    border: "2px solid #000",
                    boxShadow: "0px 4px 0px #000",
                  }}
                >
                  <Iconify color="#000" icon="cib:telegram-plane" />
                </IconButton>
              </Box>
            </Box>
            <Button className="btn_primary">Buy Flork</Button>
          </Box>
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                bottom: { xs: "-1.4rem", sm: "-1.8rem", md: "-3.7rem" },
              }}
            >
              <Typography className="text1">Meet</Typography>
              <img className="heroImg" src={heroImg} alt="" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className="textAnimationWrapper">
        <Typography>
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
          $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK $FLORK
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
