/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : Admin auth                                         *
 *---------------------------------------------------------------*/
import clsx from 'clsx';
import React, {useContext} from 'react';
import {drawerWidth} from '../../config';
import {SideBarConsumer} from '../../helpers/SideBarContext';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {mainListItems, secondListItems} from './SideMenuItems';

const useStyles = makeStyles(theme => ({
  drawerOpen: {
    background: 'rgba(131, 3, 139, 1)',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    paddingTop: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const SideMenu = props => {
  const styles = useStyles();
  const context = useContext(SideBarConsumer);
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          styles.drawerOpen,
          !context.isDrawerOpen && styles.drawerClose
        ),
      }}
      open={context.isDrawerOpen}
    >
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondListItems}</List>
      <Divider />
    </Drawer>
  );
};
export default SideMenu;
