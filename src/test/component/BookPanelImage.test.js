import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import BookPanelImage from "../../component/BookPanelImage";
import {CardMedia} from "material-ui";


describe('<BookPanelImage/>', () => {

    const imageUrl = "https://i.pinimg.com/originals/93/89/5a/93895a8c2e6f2684f46eed06be17b538.jpg"

    const bookPanelImage =  mount(<BookPanelImage imageUrl={imageUrl}/>)

    it('book panel image is visible', () => {
        expect(bookPanelImage.find(CardMedia).prop('image')).is.equal(imageUrl)
    })
})