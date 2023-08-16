import React from "react";

// Props is just a name It can be anything (e.g State, Types)

type Props = {
  open?: boolean;
  titleColor?: string;
  title?: string;
  buttonTitle?: string;
  children?: React.ReactNode;
  primaryAction: () => {};
  handleClose: any;
  buttonSize: string;
  sx: {};
};
export default Props;
