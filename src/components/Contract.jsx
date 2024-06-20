import { Button, Container, InputAdornment, TextField } from "@mui/material";

const Contract = () => {
  return (
    <Container sx={{ margin: "3rem auto" }}>
      <TextField
        fullWidth
        value="0x98d9278a04y01c6a59a9d7c1CD79f7788C6ADe08"
        readOnly
        sx={{
          border: "1px solid #000",
          borderRadius: "3rem",
          fontSize: "2rem",
          "& .MuiOutlinedInput-root": {
            fontSize: { xs: "2.4rem" },
            fontFamily: "Denk One",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-input": {
            padding: "1.2rem 2rem",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  background: "#000",
                  color: "#fff",
                  borderRadius: "3rem",
                  fontFamily: "Denk One",
                  fontSize: "2rem",
                  padding: ".5rem 2rem",
                }}
              >
                Copy
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Contract;
