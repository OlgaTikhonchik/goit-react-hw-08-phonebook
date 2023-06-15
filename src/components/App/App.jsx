import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Container, MainTitle, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

export function App() {
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
}
