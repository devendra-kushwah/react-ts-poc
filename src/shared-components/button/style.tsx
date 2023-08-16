import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

// Button with light grey background
export const StyledDefaultButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#F5F5F5",
  color: theme.palette.mode === "dark" ? "#000" : "#000",
  fontSize: "14px",
  fontWeight: "400",
  padding: "8px 16px",
  boxShadow: "none",
  textTransform: "capitalize",
  ":hover": {
    color: "#fff",
    backgroundColor: "#000",
    boxShadow: "none",
  },
}));

// Button with White background
export const StyledSecondaryButton = styled(StyledDefaultButton)(
  ({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1C1C1C" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  }),
);

export const StyledPrimaryButton = styled(LoadingButton)(() => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1C1C1C' : '#F5F5F5',
  // color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  backgroundColor: "#00A0E0",
  color: "#fff",
  boxShadow: "none",
  ":hover": {
    // backgroundColor: "",
    boxShadow: "none",
  },
}));
