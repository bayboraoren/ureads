import React from 'react'
import {mount} from 'enzyme';
import {Paper} from "material-ui";
import {expect} from 'chai'
import BookListPanel from "../../component/BookListPanel";


describe('<BookListPanel/>', () => {

    const bookListPanel = mount(
        <BookListPanel/>
    );

    it('book list panel is visible', () => {
        expect(bookListPanel.find(Paper)).to.have.length(1)
    })

})