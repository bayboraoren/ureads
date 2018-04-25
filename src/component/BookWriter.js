import React from 'react'
import {Typography} from "material-ui";
import {withStyles} from "material-ui/styles/index";


const styles = theme => ({

})

const BookWriter = (props) => {

    const {authors, classes} = props

    return (
        <div>
            {authors !== undefined ?
                authors.map((author) =>
                    <Typography variant="body2"
                                color="textSecondary"
                                align={'left'}
                                key={author}>
                        {author}
                    </Typography>
                ) : (<div>AUTHORS NOT DEFINED</div>)}
        </div>
    )


}

export default withStyles(styles)(BookWriter);