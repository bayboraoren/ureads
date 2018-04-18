import React from 'react'
import {Typography} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";


const styles = theme => ({})

const BookName = (props) => {

    const {name} = props

    return (
        <Typography>
            {name}
        </Typography>
    )


}

BookName.propTypes = {
    name: PropTypes.string.isRequired
};


export default withStyles(styles)(BookName);