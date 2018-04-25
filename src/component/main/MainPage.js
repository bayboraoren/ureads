import React from 'react'
import BookStorePanel from '../BookStorePanel'
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';
import BookShelvePanel from "../BookShelvePanel";
import BookPanelImage from "../BookPanelImage";
import BookName from "../BookName";
import BookPanel from "../BookPanel";
import BookWriter from "../BookWriter";
import BookListPanel from "../BookListPanel";
import BookShelveSelect from "../BookShelveSelect";
import * as BookAPI from "../../BookAPI"
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import BookSearch from "../BookSearch";
import * as Util from '../../Util'
import {Button} from "material-ui";
import AddIcon from '@material-ui/icons/Add';
import * as BookUtil from "../../BookUtil";

const styles = theme => ({
    root: {
        height: 600,
        margin: 20,
        position: 'relative'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },

});


class MainPage extends React.Component {

    books = []

    state = {
        bookShelveList: {},
    }

    componentWillMount() {
        this.getBooks()
    }


    moveBook = (book, shelveId) => {
        BookAPI.update(book, shelveId).then((books) => {
            this.getBooks()
        })
    }


    getBooks() {
        BookAPI.getAll().then((books) => {
            this.books = books
            this.setState(() => ({
                bookShelveList: Util.processData(books)
            }))
        })
    }


    render() {

        const {classes} = this.props;
        const {bookShelveList} = this.state

        return (
            <div>
                <Route exact path='/' render={() => (
                    <Grid container spacing={24}>
                        <Grid item xs={12} className={classes.root}>
                            <BookStorePanel>
                                {
                                    Object.keys(bookShelveList).map((bookShelve, index) =>
                                        <BookShelvePanel bookShelve={bookShelveList[bookShelve]} key={index}>
                                            <BookListPanel>
                                                <Grid container spacing={24} alignItems={'flex-start'}
                                                      direction={'row'}>
                                                    {bookShelveList[bookShelve].books.map((book) =>
                                                        <BookPanel key={book.id}>
                                                            <Grid container spacing={24} alignItems={'flex-start'}
                                                                  direction={'row'}>
                                                                <Grid item xs={12}>
                                                                    <BookShelveSelect
                                                                        shelveList={BookUtil.bookShelveList}
                                                                        selectedShelveId={bookShelveList[bookShelve].id}
                                                                        book={book}
                                                                        onMoveBook={this.moveBook}/>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <BookPanelImage imageUrl={book.imageUrl}/>
                                                                </Grid>
                                                                <Grid container item xs={12}>
                                                                    <BookName title={book.title}/>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <BookWriter authors={book.authors}/>
                                                                </Grid>
                                                            </Grid>
                                                        </BookPanel>
                                                    )}
                                                </Grid>
                                            </BookListPanel>
                                        </BookShelvePanel>
                                    )

                                }
                            </BookStorePanel>
                        </Grid>

                        <Link to='/search'>
                            <Button variant="fab"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.fab}>
                                <AddIcon/>
                            </Button>
                        </Link>


                    </Grid>
                )}/>

                <Route path='/search' render={() => (
                    <BookSearch booksWithShelve={this.books} onMoveBook={this.moveBook}/>
                )}/>
            </div>
        )
    }
}

export default withStyles(styles)(MainPage)