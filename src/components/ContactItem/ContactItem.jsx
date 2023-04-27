import PropTypes from 'prop-types'

import {DeleteButton, Item} from './ContactItem.styled'

export default function ContactItem ({ contacts, onDeleteContact }) {
  return (contacts && contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <DeleteButton type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </DeleteButton>
      </Item>
    );
  }));
};

ContactItem.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};