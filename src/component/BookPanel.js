import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'


const styles = theme => ({
    paper: {
        height: 300,
        width: 200,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 80
    }
});


const BookPanel = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <br/>
            <Paper className={classes.paper} elevation={1}>

            </Paper>
        </div>
    );
}

BookPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookPanel);