import React from 'react';
import BookstorePanel from '../../component/bookstorepanel'
import {mount,render} from 'enzyme';
import {MuiThemeProvider} from "material-ui/styles/index";
import Paper from 'material-ui/Paper'
import {expect} from 'chai';

// describe what we are testing
describe('<BookstorePanel/>', () => {

    // make our assertion and what we expect to happen
    it('bookstore panel is visible', () => {
        const wrapper = mount(
            <MuiThemeProvider>
                <BookstorePanel/>
            </MuiThemeProvider>
        );
        //Paper is founded
        expect(wrapper.find(BookstorePanel).find(Paper)).to.have.length(1)
    })


})