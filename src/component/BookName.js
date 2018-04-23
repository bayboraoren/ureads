import React from 'react'
import {Typography} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";


const styles = theme => ({})

const BookName = (props) => {

    const {title} = props

    return (
        <Typography variant="body1">
            {title}
        </Typography>
    )


}

BookName.propTypes = {
    title: PropTypes.string.isRequired
};


export default withStyles(styles)(BookName);