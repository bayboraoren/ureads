import React from 'react'
import {MenuItem} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";
import {Select} from "material-ui/index";


const styles = theme => ({
    select: {
        fontSize: 18,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        opacity: 0.4
    },
    menuItemClass: {
        fontSize: 18
    }
});


class BookShelveSelect extends React.Component {

    state = {
        shelveId: this.props.selectedShelveId
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
        this.props.onMoveBook(this.props.book, event.target.value)
    }



    render() {

        console.log(this.props.selectedShelveId)

        const {classes, shelveList} = this.props;

        return (
            <div>
                <Select
                    value={this.state.shelveId}
                    onChange={this.onChange}
                    className={classes.select}
                    inputProps={{
                        name: 'shelveId',
                    }}>

                    <MenuItem>
                        <em>Move to...</em>
                    </MenuItem>

                    {shelveList.map((shelve) =>
                        <MenuItem key={shelve.id}
                                  value={shelve.id}
                                  className={classes.menuItemClass}>
                            {shelve.title}
                        </MenuItem>
                    )}
                </Select>
            </div>
        )
    }

}

BookShelveSelect.propTypes = {
    shelveList: PropTypes.array.isRequired,
    selectedShelveId: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
};


export default withStyles(styles)(BookShelveSelect)