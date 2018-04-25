import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {Typography} from "material-ui";
import BookWriter from "../../component/BookWriter";


describe('<BookWriter/>', () => {

    const authors = ["Author1","Author2","Author3"]
    const bookWriter = mount(<BookWriter name={authors[0]} authors={authors}/>)


    it('book writer is visible', () => {
        expect(bookWriter.find(Typography).first().text()).is.equal(authors[0])
    })


})