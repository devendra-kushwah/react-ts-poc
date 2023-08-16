import React from "react";
import { StyledSecondaryButton } from "./style";
import Props from "./types";

const SecondaryButton = (props: Props) => {
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
    <StyledSecondaryButton
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
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
