import React from "react";
import { StyledPrimaryButton } from "./style";

import Props from "./types";

const PrimaryButton: React.FC<Props> = (props) => {
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
    <StyledPrimaryButton
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
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
