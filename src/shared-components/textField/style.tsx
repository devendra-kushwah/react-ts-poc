import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const BasicInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 0,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#000",
    border: "1px solid #717F88",
    fontSize: 12,
    color: "#000",
    padding: "15px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));
