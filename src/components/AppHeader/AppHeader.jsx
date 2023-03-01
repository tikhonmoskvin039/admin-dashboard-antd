import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://camo.githubusercontent.com/0bc4c29e5dfe2b7a15a6e74a519cc3e8ad5ab78110e2a572e2db935c59d72521/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f77496a4d446e7372446f50506349562e706e67"
      />
      <Typography.Title>Admin's dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        />
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Paragraph strong>{item.title}</Typography.Paragraph> has been ordered.
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
