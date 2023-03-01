import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
