import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Props  from "./types";

import { StyledDialogBox } from "./style";
import Button from "../Button/Button";

function DialogBox(props: Props) {
  const { 
    open = false,
    titleColor= "",
    title = "",
    buttonTitle = "Save",
    children = "No Content",
    primaryAction = ()=> {},
    handleClose,
    sx = {},
    buttonSize= ""
  } = props;
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <StyledDialogBox
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        sx={sx}
        aria-labelledby="responsive-dialog-title"
      >
        { title && 
          <DialogTitle sx={{color: `${titleColor}`}} id="responsive-dialog-title">
            {title}
          </DialogTitle>
        }
      
        <DialogContent>
              {children}
        <DialogActions sx={{justifyContent: "flex-start", paddingX: 0}}>
          <Button size={buttonSize} sx={{background: "#00A0E0"}} onClick={primaryAction}>
            {buttonTitle}
          </Button>
          <Button size={buttonSize} onClick={handleClose} sx={{background: "#838282", color: "#fff"}} >
            Cancel
          </Button>
        </DialogActions>
        </DialogContent>
      </StyledDialogBox>
  );
}
export default DialogBox;