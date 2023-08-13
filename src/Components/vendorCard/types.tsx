import React from "react";

// Props is just a name It can be anything (e.g State, Types)

type Props = {
  children?: React.ReactNode;
  type?: any;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  color?: any;
  size?: any;
  variant?: any;
  onClick?: any;
  sx?: {};
};

export default Props;
