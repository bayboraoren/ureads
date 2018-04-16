import React from 'react';
import BookStorePanel from '../../component/BookStorePanel'
import {mount, render} from 'enzyme';
import {MuiThemeProvider} from "material-ui/styles/index";
import Paper from 'material-ui/Paper'
import {expect} from 'chai';

// describe what we are testing
describe('<BookStorePanel/>', () => {

    // make our assertion and what we expect to happen
    it('bookstore panel is visible', () => {
        const wrapper = mount(
            <MuiThemeProvider>
                <BookStorePanel/>
            </MuiThemeProvider>
        );
        //Paper is founded
        expect(wrapper.find(BookStorePanel).find(Paper)).to.have.length(1)
    })

    it('bookstore panel title is visible', () => {
        const wrapper = mount(
            <MuiThemeProvider>
                <BookStorePanel/>
            </MuiThemeProvider>
        );
        //Paper is founded
        expect(wrapper.text()).to.equal('BOOK STORE')
    })

})