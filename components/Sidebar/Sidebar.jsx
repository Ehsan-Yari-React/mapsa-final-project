import Link from "next/link";
import { Menu, Layout } from "antd";
import { useSelector } from "react-redux";

const Sidebar = ({ userId = 0 }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const users = useSelector((state) => state["users"]);
  return (
    <Sider trigger={null}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[`${userId}`]}
        defaultOpenKeys={[`sub-${userId}`]}
      >
        {users.map((user) => (
          <SubMenu key={`sub-${user.id}`} title={user.name}>
            <Menu.Item key={user.id}>
              <Link href={user.route}>
                <a>{user.name} home</a>
              </Link>
            </Menu.Item>
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
