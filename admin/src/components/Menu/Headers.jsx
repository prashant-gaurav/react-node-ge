/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : Admin auth                                         *
 *---------------------------------------------------------------*/
import clsx from 'clsx';
import React, {useContext} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {userLogout} from '../../services/auth';
import {useHistory} from 'react-router';
import {SideBarConsumer} from '../../helpers/SideBarContext';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:
      'linear-gradient(90deg, rgba(131, 3, 139, 1) 0%, rgba(121, 9, 94, 1) 43%, rgba(98, 11, 126, 1) 100%)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 250,
    width: `calc(100% - ${250}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 40, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '200',
  },
}));
const Headers = props => {
  const ss = window.sessionStorage.getItem('auth-session-data');
  const sessionData = JSON.parse(ss);
  const classes = useStyles();
  const history = useHistory();
  const browserHistory = createBrowserHistory();
  const context = useContext(SideBarConsumer);
  // console.log(context);
  const logoutTabbed = async e => {
    e.preventDefault();
    await userLogout().then(data => {
      history.push('/login');
    });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(
          classes.appBar,
          context.isDrawerOpen && classes.appBarShift
        )}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={context.toggleDrawer}
            className={clsx(classes.menuButton, context.isDrawerOpen)}
          >
            {context.isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {browserHistory.location.pathname}
          </Typography>
          <IconButton
            className={classes.userName}
            color="inherit"
            component="h1"
            variant="p"
          >
            {(sessionData && sessionData['adminName']).toUpperCase()}
          </IconButton>
          <IconButton color="inherit" onClick={logoutTabbed}>
            <PowerSettingsNewOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Headers;
