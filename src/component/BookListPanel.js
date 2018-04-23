import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {Paper} from "material-ui";


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 80
    },
});

const BookListPanel = (props) => {
    const {classes} = props;
    return (
        <div>
            <br/>
            <Paper className={classes.paper}>
                {props.children}
            </Paper>
        </div>
    );
}

BookListPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookListPanel);