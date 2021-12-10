import { Layout } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/MainContent/MainContent";

const Home = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <MainContent>Welcome</MainContent>
    </Layout>
  );
};

export default Home;
