import { createBrowserRouter } from 'react-router-dom';

import base01 from './base01';
import common from './common';

const router = createBrowserRouter([
  ...base01,
  ...common,
]);

export default router;