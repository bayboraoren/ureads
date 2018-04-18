import React from 'react'
import BookStorePanel from '../BookStorePanel'
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import BookShelvePanel from "../BookShelvePanel";
import BookPanel from "../BookPanel";

const styles = theme => ({
    root: {
        height: 600,
        margin: 20,
        flexGrow: 1
    }
});


const MainPage = props => {
    const {classes} = props;

    const bookShelveTitle = "BOOK SHELVE TITLE "

    const bookShelveList = [
        {
            "title": bookShelveTitle + 1,
            "books": [
                {
                    "name": "book 1",
                    "author": "author 1"
                }
            ]
        },
        {
            "title": bookShelveTitle + 2,
            "books": [
                {
                    "name": "book 2",
                    "author": "author 2"
                }
            ]
        },
        {
            "title": bookShelveTitle + 3,
            "books": [
                {
                    "name": "book 3",
                    "author": "author 3"
                }
            ]
        }
    ];

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <BookStorePanel>
                        {bookShelveList.map((bookShelve) =>
                            <BookShelvePanel bookShelve={bookShelve}>
                                <BookPanel/>
                            </BookShelvePanel>
                        )}
                    </BookStorePanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(MainPage);