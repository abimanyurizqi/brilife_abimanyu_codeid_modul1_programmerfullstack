const styles = theme => ({
    appBar: {
        background: 'linear-gradient(45deg, #242322 30%, #363535 70%)',
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
        fontSize: 20,
        fontFamily: 'Roboto',

    },
});

export default styles;