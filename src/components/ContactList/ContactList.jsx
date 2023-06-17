import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';
import { ListContasts } from './ContactList.styled';

import { selectContacts, selectFilter } from 'redux/selectors';
import { connect } from 'formik';

export const ContactList = () => {
  //const contacts = useSelector(selectContacts);
  //const contacts = useSelector(store => store.contacts.items);
  //const contacts = useSelector(store => store.contacts.contacts.items);
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);
  //const filter = useSelector(selectFilter);
  // const filter = useSelector(store => store.filter);
  const filter = useSelector(state => state.contacts.filter);
  console.log(filter);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filteredContacts);

  // if (!filteredContacts?.length) {
  //   alert('No contacts matching your request');
  //   return;
  // }

  const store = useSelector(store => store);
  console.log('store:', store);
  const contactsStore = useSelector(store => store.contacts);
  console.log('contactsStore:', contactsStore);
  const contactsStoreContacts = useSelector(store => store.contacts.items);
  console.log('contactsStoreContacts:', contactsStoreContacts);
  const contactsItemStor = useSelector(store => store.contacts.contacts.items);
  console.log(contactsItemStor);

  // return (
  //   <ListContasts>
  //     {contacts &&
  //       contacts.map(({ id, name, number }) => (
  //         <ContactItem key={id} id={id} name={name} number={number} />
  //       ))}
  //   </ListContasts>
  // );

  return (
    <ListContasts>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ListContasts>
  );
};
const mapStateToProps = state => ({
  contacts: selectContacts(state),
  filter: selectFilter(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
