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
        <BookShelvePanel bookShelve={bookShelveList[0]}/>
    )

    it('bookshelve panel is visible', () => {
        expect(bookShelvePanel.find(Divider)).to.have.length(1)
    })

    it('bookshelve title is given title', () => {
        expect(bookShelvePanel.find(ListItemText).prop('primary')).to.equal(bookShelveList[0].title)

    })

    it('bookshelve horizontal line is visible', () => {
        expect(bookShelvePanel.find(Divider)).to.have.length(1)
    })


})