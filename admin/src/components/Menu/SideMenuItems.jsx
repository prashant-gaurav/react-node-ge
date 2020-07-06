import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from '@material-ui/icons/Dashboard';
import One from '@material-ui/icons/Filter1Outlined';
import Two from '@material-ui/icons/Filter2Outlined';
import Three from '@material-ui/icons/Filter3Outlined';
import Four from '@material-ui/icons/Filter4Outlined';

import Category from '@material-ui/icons/AccountTreeOutlined';
import Orders from '@material-ui/icons/AddShoppingCartOutlined';

import Organization from '@material-ui/icons/AccountBalanceOutlined';
import Users from '@material-ui/icons/PeopleAltOutlined';
import Posts from '@material-ui/icons/EmailOutlined';

import Block from '@material-ui/icons/BlockOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ReportOffOutlinedIcon from '@material-ui/icons/ReportOffOutlined';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to={'/'}>
      <ListItemIcon>
        <Dashboard style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={{color: '#fff'}} />
    </ListItem>
    <ListItem button component={Link} to={'/category'}>
      <ListItemIcon>
        <One style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Category" style={{color: '#fff'}} />
    </ListItem>
    <ListItem button component={Link} to={'/sub-category'}>
      <ListItemIcon>
        <Two style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Sub Category" style={{color: '#fff'}} />
    </ListItem>
    <ListItem button component={Link} to={'/products'}>
      <ListItemIcon>
        <Three style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Products" style={{color: '#fff'}} />
    </ListItem>
    <ListItem button component={Link} to={'/products'}>
      <ListItemIcon>
        <Four style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Home Page" style={{color: '#fff'}} />
    </ListItem>
  </div>
);

export const secondListItems = (
  <div>
    <ListItem button component={Link} to={'/orders'}>
      <ListItemIcon>
        <Orders style={{color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Orders" style={{color: '#fff'}} />
    </ListItem>
  </div>
);
