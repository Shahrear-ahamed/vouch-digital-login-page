import { Layout } from "antd";
import React from "react";
const { Header } = Layout;

const Navbar = () => (
  <Layout>
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <div></div>
    </Header>
  </Layout>
);

export default Navbar;
