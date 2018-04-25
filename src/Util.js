import * as BookAPI from "./BookAPI";




export const processShelveTitle = (shelve) => {

    let shelveTitle = shelve.split(/(?=[A-Z])/) // split words by uppercase
    shelveTitle = shelveTitle.join(" ") // join word array with space
    shelveTitle = shelveTitle.replace(/\b\w/g, (l) => {
        return l.toUpperCase()
    }) // first letter uppercase


    return shelveTitle
}

export const processData = (books) => {

    let shelves = books.map((book) => book.shelf === undefined ? "None" : book.shelf )
    shelves = shelves.filter((book, index, self) =>
        self.indexOf(book) === index
    )


    let shelveList = {}
    for (let i = 0; i < shelves.length; i++) {

        let shelveTitle  = processShelveTitle(shelves[i]) /*= shelves[i].split(/(?=[A-Z])/) // split words by uppercase
        shelveTitle = shelveTitle.join(" ") // join word array with space
        shelveTitle = shelveTitle.replace(/\b\w/g, (l) => {
            return l.toUpperCase()
        }) // first letter uppercase */

        shelveList[shelves[i]] = {id: shelves[i], title: shelveTitle}
        let bookList = []
        shelveList[shelves[i]].books = bookList
    }

    for (let i = 0; i < books.length; i++) {

        let book = {}
        book.id = books[i].id
        book.title = books[i].title
        book.authors = books[i].authors
        book.imageUrl = books[i].imageLinks.thumbnail

        let key = books[i].shelf === undefined ? "None" : books[i].shelf
        shelveList[key].books.push(book)

    }

    return shelveList
}