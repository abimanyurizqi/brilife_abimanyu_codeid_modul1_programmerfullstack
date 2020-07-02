import { HomePage } from '../pages/Home'
import {Form} from '../pages/form'



const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/form',
    component: Form
  },
];

export default routes;

