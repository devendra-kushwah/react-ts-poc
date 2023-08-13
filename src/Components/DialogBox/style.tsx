import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const StyledDialogBox = styled(Dialog)(() => ({
  ".MuiPaper-root.MuiPaper-elevation": {
    width: "100%",
    maxWidth: "666px",
  },
}));
