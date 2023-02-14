import React from "react";
import PropTypes from "prop-types";

import { List, ListItem, Button } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
    return (
        <List>
            {contacts.map(({ id, name, number }, idx) => (
                <ListItem key={id}>
                    <div>{idx + 1}</div>
                    {name} ^ {number}
                    <Button onClick={() => onDelete(id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
};