import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    rootClass: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    titleClass: {
        marginLeft: 50
    }
});

const BookShelvePanel = (props) => {
    const {classes, bookShelve} = props;
    return (

        <div className={classes.rootClass}>
            <List>
                <ListItem>
                    <ListItemText primary={bookShelve.title} className={classes.titleClass}/>
                </ListItem>
                <li>
                    <Divider inset/>
                    {props.children}
                </li>
            </List>
        </div>
    );
}

BookShelvePanel.propTypes = {
    classes: PropTypes.object.isRequired,
    bookShelve: PropTypes.object.isRequired
};

export default withStyles(styles)(BookShelvePanel);