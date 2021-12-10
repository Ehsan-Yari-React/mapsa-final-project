import Sidebar from "../../../../components/Sidebar/Sidebar";
import MainContent from "../../../../components/MainContent/MainContent";
import { Layout } from "antd";

const Index = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar userId={10} />
      <MainContent>nima home</MainContent>
    </Layout>
  );
};

export default Index;
