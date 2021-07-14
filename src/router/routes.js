/*
const layouts = {
  authentication : () => import(''),
  dashboard : () => import(''),
  guest: () => import('')
}
*/

/*
let auth_routes = {
  path: '/',
  component: layouts.authentication,
  name: 'Authentication',
  children: [{
          path: '/authin',
          name: 'Authin',
          component: () => import('')
      },
      {
          path: '/authup',
          name: 'Authup',
          component: () => import('')
      },
  ]  
}
*/

/*
let dash_routes = {
  path: '/',
  component: layouts.dashboard,
  name: 'Home',
  children: [{
          path: '/',
          name: 'Home',
          component: () => import('')
      },
      {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('')
      },
  ]  
}
*/

const example_app_routes = {
  path: "/",
  name: "Home",
  component: () => import("/src/App.vue")
};

const global = [example_app_routes];

export { example_app_routes };
export default global;
