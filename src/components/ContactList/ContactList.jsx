import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';
import { ListContasts } from './ContactList.styled';

import { selectContacts, selectFilter } from 'redux/selectors';
// import { connect } from 'formik';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  //const contacts = useSelector(store => store.contacts.contacts.items);
  console.log(contacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredContacts);

  // if (!filteredContacts?.length) {
  //   alert('No contacts matching your request');
  //   return;
  // }

  const store = useSelector(store => store);
  console.log(store);

  const contactsStore = useSelector(store => store.contacts);
  console.log('contactsStore:', contactsStore);

  return (
    <ListContasts>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ListContasts>
  );
};
// const mapStateToProps = state => ({
//   contacts: selectContacts(state),
//   filter: selectFilter(state),
// });

// export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
