import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import styles from './styles';


class Header extends Component {

    render() {
        const { classes, title } = this.props;

        return (


            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>

                <Typography id="title-label" variant="h6" noWrap className={classes.title}>
                    {title}
                </Typography>
                </Toolbar>
            </AppBar >

        );
    }

}

Header.propTypes = {
    title: PropTypes.string,
};


export default withStyles(styles, { withTheme: true })(Header);