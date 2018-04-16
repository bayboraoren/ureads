import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BookStorePanel from '../component/BookStorePanel'

class MyAwesomeReactComponent extends Component {

    onClick = (event) => {
        console.log(event)
        alert(event)
    }

    render() {
        return (
            <div>
                <RaisedButton label="1234"
                              onClick={(event) => this.onClick(event.target)}/>
                <BookStorePanel/>
            </div>
        )
    }


}

export default MyAwesomeReactComponent;