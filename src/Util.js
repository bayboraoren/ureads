

/* split shelve title */
export const processShelveTitle = (shelve) => {

    let shelveTitle = shelve.split(/(?=[A-Z])/) // split words by uppercase
    shelveTitle = shelveTitle.join(" ") // join word array with space
    shelveTitle = shelveTitle.replace(/\b\w/g, (l) => {
        return l.toUpperCase()// first letter uppercase
    })


    return shelveTitle
}

/* convert books to shelve categorized books */
export const processData = (books) => {

    /* get shelves array */
    let shelves = books.map((book) => book.shelf === undefined ? "None" : book.shelf)
    shelves = shelves.filter((book, index, self) =>
        self.indexOf(book) === index
    )


    /* create shelve map */
    let shelveMap = {}
    for (let i = 0; i < shelves.length; i++) {
        let shelveTitle = processShelveTitle(shelves[i])
        shelveMap[shelves[i]] = {id: shelves[i], title: shelveTitle}
        let bookList = []
        shelveMap[shelves[i]].books = bookList
    }

    /* create book and push book to shelveMap by shelve key */
    for (let i = 0; i < books.length; i++) {
        let book = {}
        book.id = books[i].id
        book.title = books[i].title
        book.authors = books[i].authors
        book.imageUrl = books[i].imageLinks.thumbnail
        book.shelf = books[i].shelf === undefined ? "none" : books[i].shelf
        shelveMap[book.shelf].books.push(book)
    }

    return shelveMap
}