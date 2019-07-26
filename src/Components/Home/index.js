import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { db } from "../../config";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db.ref("users").on("value", dataSnap => {
      var data = [];
      dataSnap.forEach(item => {
        const val = item.val();
        val["key"] = item.key;
        data.push(val);
      });
      console.log("data", data);

      setData(data);
    });

    return () => unsub;
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "first",
      key: "first"
    },
    {
      title: "Last Name",
      dataIndex: "last",
      key: "last"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile"
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          type="danger"
          onClick={() => {
            db.ref("users")
              .child(record.key)
              .set(null);
          }}
        >
          Delete
        </Button>
      )
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
