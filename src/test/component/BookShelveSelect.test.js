import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import BookShelveSelect from "../../component/BookShelveSelect";
import {Select} from "material-ui/index";



describe('<BookShelveSelect/>', () => {


    it('book shelve selection is visible', () => {

        const shelveList = [
            {id: "currentlyReading", title: "Currently Reading"},
            {id: "wantToRead", title: "Want to read"},
            {id: "read", title: "Read"}

        ]

        const book = {id:"1", title:"Book 1"}

        const id = shelveList[0].id
        const title = shelveList[0].title
        const selectedShelve = shelveList[0]

        const moveBook = () => {

        }

        const wrapper = mount(<BookShelveSelect shelveList={shelveList}
                                                selectedShelve={selectedShelve}
                                                selectedShelveId={id}
                                                book={book}
                                                onMoveBook={moveBook}
                                                selectedShelveTitle={title}/>)
        expect(wrapper.find(Select)).to.have.length(1)
    })

    it('book shelve selection has shelve list', () => {
        //find way to solve this, material-ui and enzyme haven't got enough documentation
    })

})