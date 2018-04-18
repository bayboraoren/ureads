import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {Card, CardMedia, Grid, Paper} from "material-ui";


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        height: 300,
        width: 200,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginLeft: 80
    },
    media: {
        height: 200,
    },
});

const BookPanel = (props) => {
    const {classes} = props;
    return (
        <div>
            <br/>
            <Card className={classes.card}>
                {props.children}
            </Card>
        </div>
    );
}

BookPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookPanel);