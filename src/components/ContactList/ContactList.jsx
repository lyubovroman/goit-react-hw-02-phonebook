import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
   <List>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  
};