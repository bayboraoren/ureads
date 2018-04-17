import React from 'react'
import BookStorePanel from '../BookStorePanel'
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import BookShelvePanel from "../BookShelvePanel";

const styles = theme => ({
    root: {
        height: 600,
        margin: 20,
        flexGrow: 1
    }
});


function MainPage(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <BookStorePanel>
                        {/* BOOK SHELVE COMPONENT */}
                        <BookShelvePanel title={"TITLE"}/>
                    </BookStorePanel>
                </Grid>
            </Grid>
        </div>

    )
}

export default withStyles(styles)(MainPage);