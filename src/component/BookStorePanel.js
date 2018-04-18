import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    paper: {
        height: '100%',
        width: '95%',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bookStorePanelTitle: {
        margin: 20
    }

});


const BookStorePanel = (props) =>{
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={1}>
                        <Typography variant="headline" component="h3">
                            <span className={classes.bookStorePanelTitle}>
                                BOOK STORE
                            </span>
                        </Typography>
                        {props.children}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

BookStorePanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookStorePanel);