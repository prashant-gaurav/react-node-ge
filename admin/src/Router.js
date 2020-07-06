import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from './containers/PrivateRoute';
import LoginPage from './containers/Login/';
import HomePage from './containers/Home';
import Category from './containers/Category';
import AddCategory from './containers/Category/create';
import EditCategory from './containers/Category/edit';

import SubCategory from './containers/SubCategory';
import AddSubCategory from './containers/SubCategory/create';
import EditSubCategory from './containers/SubCategory/edit';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Dashboard',
    screen: HomePage,
  },
  {
    path: '/category',
    title: 'Category',
    screen: Category,
  },
  {
    path: '/category/create',
    title: 'Add-Category',
    screen: AddCategory,
  },
  {
    path: '/category/edit/:categoryId',
    title: 'Edit-Category',
    screen: EditCategory,
  },
  {
    path: '/sub-category',
    title: 'SubCategory',
    screen: SubCategory,
  },
  {
    path: '/sub-category/create',
    title: 'AddSubCategory',
    screen: AddSubCategory,
  },
  {
    path: '/sub-category/edit/:subCategoryId',
    title: 'EditSubCategory',
    screen: EditSubCategory,
  },
  {
    path: '/products',
    title: 'Products',
    screen: HomePage,
  },
  {
    path: '/orders',
    title: 'Orders',
    screen: HomePage,
  },
  {
    path: '/payments',
    title: 'Orders',
    screen: HomePage,
  },
  {
    path: '/users',
    title: 'Users',
    screen: HomePage,
  },
  {
    path: '/payments',
    title: 'Payments',
    screen: HomePage,
  },
  {
    path: '/test',
    screen: HomePage,
  },
];

export default function Routers() {
  return (
    <Router>
      {routes.map(route => (
        <PrivateRoute exact path={route.path} component={route.screen} />
      ))}
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}
