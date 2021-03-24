import React from "react";

import { CustomButtonContainer } from "./custom-buttonStyles";

function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
