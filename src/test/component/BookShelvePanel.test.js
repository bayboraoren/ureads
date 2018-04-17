import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import BookShelvePanel from "../../component/BookShelvePanel";
import {Divider, ListItemText} from "material-ui";

describe('<BookShelvePanel/>', () => {

    //mandatory for BookShelvePanel
    const givenTitle = "TITLE"

    it('bookshelve panel is visible', () => {
        const wrapper = mount(
            <BookShelvePanel title={givenTitle}/>
        );
        expect(wrapper.find(BookShelvePanel).find(Divider)).to.have.length(1)
    })

    it('bookshelve title is given title', () => {
        const wrapper = mount(
            <BookShelvePanel title={givenTitle}/>
        );
        expect(wrapper.find(ListItemText).prop('primary')).to.equal(givenTitle)
    })

    it('bookshelve horizontal line is visible', () => {
        const wrapper = mount(
            <BookShelvePanel title={givenTitle}/>
        );
        expect(wrapper.find(Divider)).to.have.length(1)
    })


})