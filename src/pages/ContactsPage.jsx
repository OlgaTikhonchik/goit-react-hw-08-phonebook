import { Container, MainTitle, Title } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />

      {isLoading && !error && (
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: '#653463',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <i>Request in progress...</i>
        </p>
      )}

      {error && <b>Error: {error}</b>}
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default ContactsPage;
