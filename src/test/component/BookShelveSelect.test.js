import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {MenuItem, Select} from "material-ui";
import BookShelveSelect from "../../component/BookShelveSelect";
import { createMount } from 'material-ui/test-utils';


const expectedShelveCurrentlyReading = {id:1,title:"Currently Reading"}

const shelveList = [
    {id:1,title:"Currently Reading"},
    {id:2,title:"Want to read"},
    {id:3,title:"Read"}

]



describe('<BookShelveSelect/>', () => {

    let bookShelveSelect;

    beforeEach(() =>  {
        bookShelveSelect = createMount();
    });


    it('book shelve selection is visible', () => {
        const wrapper = mount(<BookShelveSelect shelveList={shelveList}/>)
        expect(wrapper.find(Select)).to.have.length(1)
    })

    it('book shelve selection has shelve list', () => {
        const wrapper = mount(<BookShelveSelect shelveList={shelveList}/>)
        console.log("------>" + wrapper.find(Select).render().children().children()[0].name)
        //expect(bookShelveSelect.find(Select).find(MenuItem).find({key:1}).text()).is.equal(expectedShelveCurrentlyReading)
    })

})