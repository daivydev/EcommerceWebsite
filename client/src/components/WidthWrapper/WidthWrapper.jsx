import React from "react";

function WidthWrapper({ children, ...rest }) {
  return <div className={rest}>{children}</div>;
}

export default WidthWrapper;
