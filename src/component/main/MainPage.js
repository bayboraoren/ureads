import React from 'react'
import BookStorePanel from '../BookStorePanel'
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import BookShelvePanel from "../BookShelvePanel";
import BookPanelImage from "../BookPanelImage";
import BookName from "../BookName";
import BookPanel from "../BookPanel";
import BookWriter from "../BookWriter";

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
                    "name": "book name 1",
                    "author": "author name 1",
                    "imageUrl": "https://www.purplerosegraphics.com/wp-content/uploads/2017/03/Jurassicpark-1.jpg"
                }
            ]
        },
        {
            "title": bookShelveTitle + 2,
            "books": [
                {
                    "name": "book name 2",
                    "author": "author name 2",
                    "imageUrl": "https://i.pinimg.com/originals/93/89/5a/93895a8c2e6f2684f46eed06be17b538.jpg"
                }
            ]
        },
        {
            "title": bookShelveTitle + 3,
            "books": [
                {
                    "name": "book name 3",
                    "author": "author name 3",
                    "imageUrl": "https://www.varsity.co.uk/images/derived/article-objects/md5-716243ff78e6aecd61d78a2c60616aee/2837.jpeg"
                }
            ]
        }
    ];

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <BookStorePanel>
                        {bookShelveList.map((bookShelve, index) =>
                            <BookShelvePanel bookShelve={bookShelve}>
                                {bookShelveList[index].books.map((book) =>
                                    <BookPanel>
                                        <Grid container spacing={24} alignItems={'flex-start'} direction={'row'}>

                                            <Grid item xs={12}>
                                                <BookPanelImage imageUrl={book.imageUrl}/>
                                            </Grid>

                                            <Grid container item xs={12} justify={'flex-start'}>
                                                <BookName name={book.name}/>
                                                <BookWriter name={book.author}/>
                                            </Grid>
                                        </Grid>
                                    </BookPanel>
                                )}
                            </BookShelvePanel>
                        )}
                    </BookStorePanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(MainPage);