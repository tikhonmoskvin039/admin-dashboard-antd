import React, { useEffect, useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { getCustomers } from "../../API";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  console.log('dataSource', dataSource)

  useEffect(() => {
    setLoading(true);
    console.log('true', true)
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => <Rate value={rating} allowHalf disabled />,
          },
          { title: "Email", dataIndex: "email" },
          { title: "Phone", dataIndex: "phone" },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
