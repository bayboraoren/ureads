import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import BookShelvePanel from "../../component/BookShelvePanel";
import {Divider, ListItemText} from "material-ui";

describe('<BookShelvePanel/>', () => {

    const bookShelveList = [{
        "title":"TITLE 1"},
        {"title":"TITLE 2"},
        {"title":"TITLE 3"}
    ];

    const bookShelvePanel = mount(
        <BookShelvePanel bookShelveList={bookShelveList}/>
    )

    it('bookshelve panel is visible', () => {
        expect(bookShelvePanel.find(BookShelvePanel).find(Divider)).to.have.length(bookShelveList.length)
    })

    it('bookshelve title is given title', () => {
        expect(bookShelvePanel.find(ListItemText).first().prop('primary')).to.equal(bookShelveList[0].title)

    })

    it('bookshelve horizontal line is visible', () => {
        expect(bookShelvePanel.find(Divider)).to.have.length(bookShelveList.length)
    })

    it('bookshelve list occurs', () => {
        const bookShelveListPanel = mount(
            <BookShelvePanel bookShelveList={bookShelveList}/>
        )
    })

})