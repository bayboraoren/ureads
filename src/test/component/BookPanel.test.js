import React from 'react'
import {mount} from 'enzyme';
import {Paper} from "material-ui";
import {expect} from 'chai'
import BookPanel from "../../component/BookPanel";


describe('<BookPanel/>', () => {

    const bookPanel = mount(
        <BookPanel/>
    );
    it('book panel is visible', () => {
        expect(bookPanel.find(Paper)).to.have.length(1)
    })

})