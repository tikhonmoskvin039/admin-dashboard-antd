import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+79527947450">+79527947450</Typography.Link>
      <Typography.Link>Privacy Policy</Typography.Link>
      <Typography.Link>Terms of use</Typography.Link>
    </div>
  );
};

export default AppFooter;
