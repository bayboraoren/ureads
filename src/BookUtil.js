import * as BookAPI from "./BookAPI";

export const searchBook = (query,container) => {
    BookAPI.search(query).then((books) => {
        container.setState(() => ({
            books
        }))
    })
}

export const findBook = (booksWithShelve, book) => {
    let foundBook = booksWithShelve.find((bookFor) => {
        return bookFor.id === book.id
    })

    return foundBook === undefined ? 'none' : foundBook.shelf
}

export const justBookShelveList = [
    {id: "none", title: "None"},
    {id: "currentlyReading", title: "Currently Reading"},
    {id: "read", title: "Read"},
    {id: "wantToRead", title: "Want To Read"}]
