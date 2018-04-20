import React from 'react'
import {MenuItem} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";
import {Paper, Select} from "material-ui/index";


const styles = theme => ({
    select: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});


class BookShelveSelect extends React.Component {

    state = {
        shelterId: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };


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



                        <MenuItem key={0}>
                            <em>None</em>
                        </MenuItem>


                        {shelveList.map((shelve) =>
                            <MenuItem key={shelve.id}
                                      value={shelve.id}>{shelve.title}</MenuItem>
                        )}




                    </Select>

            </div>

        )
    }

}

BookShelveSelect.propTypes = {
    shelveList: PropTypes.array.isRequired
};


export default withStyles(styles)(BookShelveSelect)