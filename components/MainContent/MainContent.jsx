import { Layout } from "antd";

const MainContent = ({ children }) => {
  const { Content } = Layout;
  return (
    <Layout>
      <Content style={{ margin: "15px auto", padding: "16px", minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  );
};

export default MainContent;
