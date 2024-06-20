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
          padding: ".7rem",
          fontSize: "2rem",
          "& .MuiOutlinedInput-root": {
            fontSize: { xs: "1.3rem" },
            fontFamily: "Denk One",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button className="btn_primary">Copy</Button>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Contract;
