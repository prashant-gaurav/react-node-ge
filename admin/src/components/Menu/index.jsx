import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SideBarProvider} from '../../helpers/SideBarContext';
import Header from './Headers';
import SideMenu from './SideMenu';

const useStyles = makeStyles(theme => ({
    root: {display: 'flex'},
    appBarSpacer: theme.mixins.toolbar,
    content: {flexGrow: 1, height: '100vh', overflow: 'auto'},
}));

const Menu = props => {
    const classes = useStyles();
    const [isDrawerOpen, setDrawerStatus] = React.useState(false);
    const toggleDrawer = () => {
        setDrawerStatus(!isDrawerOpen);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <SideBarProvider value={{isDrawerOpen: isDrawerOpen, toggleDrawer: toggleDrawer}}>
                <Header/>
                <SideMenu/>
            </SideBarProvider>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                {props.screen}
            </main>
        </div>
    );
};
export default Menu;
