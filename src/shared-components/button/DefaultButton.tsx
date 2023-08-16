import { StyledDefaultButton } from "./style";
import Props from "./types";

const DefaultButton = (props: Props) => {
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
    <StyledDefaultButton
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
    </StyledDefaultButton>
  );
};

export default DefaultButton;
