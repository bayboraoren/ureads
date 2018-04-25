import React from 'react'
import {Grid, withStyles} from "material-ui"
import SearchBar from 'material-ui-search-bar'
import BookPanel from "./BookPanel"
import BookShelveSelect from "./BookShelveSelect"
import BookPanelImage from "./BookPanelImage"
import BookName from "./BookName"
import BookWriter from "./BookWriter"
import * as BookUtil from "../BookUtil"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import imageNotFound from './imageNotFound.jpg'

const styles = theme => ({
    fab: {
        marginTop: 10
    },
    searchBar: {},
    container: {
        alignItems: 'flex-start',
        direction: 'row',
        justify: 'center',
        padding: 20
    }
})


class BookSearch extends React.Component {

    state = {
        books: []
    }

    render() {

        const {books} = this.state
        const {booksWithShelve, classes} = this.props

        return (

            <div>

                <Grid container spacing={16}
                      className={classes.container}>

                    <Grid item xs={1} className={classes.fab}>
                        <Link to='/'>
                            <ArrowBack/>
                        </Link>
                    </Grid>

                    <Grid item xs={10}>
                        <SearchBar
                            onChange={(query) => {
                                BookUtil.searchBook(query, this)
                            }}
                            onRequestSearch={(query) => {
                                BookUtil.searchBook(query, this)
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={24}
                      className={classes.container}>
                    {books.map((book) =>
                        <BookPanel key={book.id}>
                            <Grid container spacing={24} alignItems={'flex-start'}
                                  direction={'row'}>

                                <Grid item xs={12}>
                                    <BookShelveSelect
                                        shelveList={BookUtil.bookShelveList}
                                        selectedShelveId={BookUtil.findBook(booksWithShelve, book)}
                                        book={book}
                                        onMoveBook={this.props.onMoveBook}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <BookPanelImage
                                        imageUrl={book.imageLinks === undefined ? imageNotFound : book.imageLinks.thumbnail}/>
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

            </div>
        )

    }
}

BookSearch.propTypes = {
    booksWithShelve: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
}

export default withStyles(styles)(BookSearch)