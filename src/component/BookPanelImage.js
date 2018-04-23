import React from 'react'
import {CardMedia, Paper, withStyles} from "material-ui"
import PropTypes from 'prop-types'

const styles = {
    media: {
        width:200,
        height: 256,
    }
}

const BookPanelImage = (props) => {

    const {classes, imageUrl} = props

    return (
        <Paper>
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title="Contemplative Reptile"
            />
        </Paper>
    );

}

BookPanelImage.propTypes = {
    classes: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default withStyles(styles)(BookPanelImage);