import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import Props from "./types";

const Button: React.FC<Props> = (props) => {
  const {
    children = "",
    type = "submit",
    disabled = false,
    loading = false,
    sx = {},
    fullWidth = false,
    color = "primary",
    size = "small",
    variant = "contained",
    onClick,
  } = props;

  return (
    <LoadingButton
      type={type}
      disabled={disabled}
      loading={loading}
      sx={sx}
      fullWidth={fullWidth}
      color={color}
      size={size}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </LoadingButton>
  );
};

export default Button;
