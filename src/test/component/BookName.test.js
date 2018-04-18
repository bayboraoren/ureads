import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {Typography} from "material-ui";
import BookName from "../../component/BookName";


describe('<BookName/>', () => {

    const name = "book 1"

    const bookName = mount(
        <BookName name={name}/>
    );

    it('implement book name', () => {
        expect(bookName.find(Typography).text()).is.equal("book 1")
    })

})