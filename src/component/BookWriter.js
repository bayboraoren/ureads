import React from 'react'
import {Typography} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";


const styles = theme => ({})

const BookWriter = (props) => {

    const {name} = props

    return (
        <Typography variant="subheading" color="textSecondary">
            {name}
        </Typography>
    )


}

BookWriter.propTypes = {
    name: PropTypes.string.isRequired
};


export default withStyles(styles)(BookWriter);