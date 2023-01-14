/*
 * This is where we will define our routes and what component they will return
 * the data should will be an array of objects that contains the values we'll pass as props
 *  depending on how we plan to handle authorization there will likely be multiple arrays
 * containing route date based upon role
 */

export const publicRoutes = [
  {
    path: '/',
    component: function () {
      return <div>home page</div>;
    },
  },
  {
    path: '/login',
    component: function () {
      return <div>home page</div>;
    },
  },
  {
    path: '/register',
    component: function () {
      return <div>home page</div>;
    },
  },
];

export const privateRoutes = [
  {
    path: '/dashboard',
    component: function () {
      return <div>home page</div>;
    },
  },
  {
    path: '/profile',
    component: function () {
      return <div>home page</div>;
    },
  },
  {
    path: '/management',
    component: function () {
      return <div>home page</div>;
    },
  },
  {
    path: '/admin',
    component: function () {
      return <div>home page</div>;
    },
  },
];
