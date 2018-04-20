import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {Paper} from "material-ui";


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 80
    },
    media: {
        height: 200,
    },
});

const BookListPanel = (props) => {
    const {classes} = props;
    return (
        <div>
            <br/>
            <Paper className={classes.card}>
                {props.children}
            </Paper>
        </div>
    );
}

BookListPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookListPanel);