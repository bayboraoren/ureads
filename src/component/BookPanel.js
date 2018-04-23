import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {Card} from "material-ui";


const styles = theme => ({
    root: {

    },
    card: {
        width: 200,
        height: 450,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding: 25,
        margin: 20
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
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookPanel);