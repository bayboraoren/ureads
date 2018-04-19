import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {Typography} from "material-ui";
import BookWriter from "../../component/BookWriter";


describe('<BookWriter/>', () => {

    const bookWriterName = "MICHAEL CRICHTON"
    const bookWriter = mount(<BookWriter name={bookWriterName}/>)


    it('book writer is visible', () => {
        expect(bookWriter.find(Typography).text()).is.equal(bookWriterName)
    })


})