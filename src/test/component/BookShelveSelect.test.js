import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {MenuItem, Paper} from "material-ui";
import BookShelveSelect from "../../component/BookShelveSelect";
import { createMount } from 'material-ui/test-utils';
import {Select} from "material-ui/index";


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
        const wrapper = mount(<BookShelveSelect shelveList={shelveList} selectedShelve={1}/>)
        expect(wrapper.find(Select)).to.have.length(1)
    })

    it('book shelve selection has shelve list', () => {
        //find way to solve this, material-ui and enzyme haven't got enough documentation
    })

})