import React from 'react'
import {MenuItem} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";
import {Paper, Select} from "material-ui/index";


const styles = theme => ({
    select: {
        fontSize: 12,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    menuItemClass: {
        fontSize: 12
    }
});


class BookShelveSelect extends React.Component {

    state = {
        shelterId: this.props.selectedShelve
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }


    render() {

        const {classes, shelveList} = this.props;

        return (
            <div>
                <Select
                    value={this.state.shelterId}
                    onChange={this.handleChange}
                    className={classes.select}
                    inputProps={{
                        name: 'shelterId',
                    }}>


                    <MenuItem key={0} className={classes.menuItemClass}>
                        <em>None</em>
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
    selectedShelve: PropTypes.number.isRequired
};


export default withStyles(styles)(BookShelveSelect)