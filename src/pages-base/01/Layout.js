import { Link, Outlet, useNavigate } from "react-router-dom";
import { Tabs } from 'antd';

import './Layout.scss';

function getItem() {
  const tabsItems = [];
  const files = require.context('./', false, /\.js$/);
  const keys = files.keys();
  const indexList = [0, 1, keys.length - 1];
  keys.forEach((key, index) => {
    const fileName = key.match(/.*\/(.+?)\./)[1];
    if (!indexList.includes(index)) {
      tabsItems.push({ key: index + 1, label: fileName });
    }
  });
  return tabsItems;
}
const items = getItem();

function Layout() {
  const navigate = useNavigate();
  const onChange = (key) => {
    navigate(`/1/${key}`);
  };

  return (
    <div className="Layout">
      <Tabs defaultActiveKey="3" items={items} onChange={onChange} />
      <Outlet />
    </div>
  );
}

export default Layout;
