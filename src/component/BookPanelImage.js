import React from 'react'
import {CardMedia, withStyles} from "material-ui"
import PropTypes from 'prop-types'

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
};

const BookPanelImage = (props) => {

    const {classes,imageUrl} = props

    return(
        <div>
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title="Contemplative Reptile"
            />
        </div>
    );

}

BookPanelImage.propTypes = {
    classes: PropTypes.object.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default withStyles(styles)(BookPanelImage);