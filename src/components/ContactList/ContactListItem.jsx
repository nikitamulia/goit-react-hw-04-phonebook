import React from "react";
import PropTypes from "prop-types";


export const ContactListItem = ({id, name, number, onDelete}) => {
    
    return(
            <li>{name}:{number} <button type="button" value={id} onClick = {onDelete}>Delete</button> </li>
    );
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}