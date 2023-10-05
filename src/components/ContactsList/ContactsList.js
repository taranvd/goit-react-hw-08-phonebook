import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { ButtonStyled, List, ListItem } from './ContactsList.style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
    toast.success('Contact deleted successfully');
  };

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <span style={{ textAlign: 'center' }}>{contact.name} </span>
          <span style={{ textAlign: 'center' }}>{contact.number}</span>
          <ButtonStyled onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </ButtonStyled>
        </ListItem>
      ))}
    </List>
  );
};
