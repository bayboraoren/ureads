import React from 'react'
import {Typography} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";


const styles = theme => ({

    author:{
    }

})

const BookWriter = (props) => {

    const {authors,classes} = props

    return (
        <div className={classes.author}>
            {authors.map((author) =>
                <Typography variant="body2" color="textSecondary" align={'left'} key={author}>
                    {author}
                    </Typography>
            )}
        </div>
    )


}

BookWriter.propTypes = {
    authors: PropTypes.array.isRequired
};


export default withStyles(styles)(BookWriter);