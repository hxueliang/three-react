import Layout from '@/pages-base/01/Layout';
import App01 from '@/pages-base/01/01-类组件引用three';
import App02 from '@/pages-base/01/02-函数式组件引用three';

const children = [];
const files = require.context('@/pages-base/01', false, /\.js$/);
const keys = files.keys();
const indexList = [0, 1, keys.length - 1];
keys.forEach((key, index) => {
  if (!indexList.includes(index)) {
    children.push({
      path: index + 1 + '',
      element: files(key).default()
    });
  }
});

const router = [
  {
    path: '/1/1',
    element: <App01 />
  },
  {
    path: '/1/2',
    element: <App02 />
  },
  {
    path: '/1',
    element: <Layout />,
    children,
  },


];

export default router;