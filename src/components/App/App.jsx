import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePages';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoudPage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { PrivateRoute } from 'components/PrivatRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
// import { ToastContainer } from 'react-toastify';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

////////////////////////////////////////////////////////////
// import { ContactForm } from 'components/ContactForm';
// import { Filter } from 'components/Filter';
// import { ContactList } from 'components/ContactList';
// import { Container, MainTitle, Title } from './App.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { ToastContainer } from 'react-toastify';

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <MainTitle>Phonebook</MainTitle>
//       <ContactForm />
//       <Title>Contacts</Title>
//       <Filter />

//       {isLoading && !error && (
//         <p
//           style={{
//             fontSize: 24,
//             fontWeight: 600,
//             color: '#653463',
//             textAlign: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <i>Request in progress...</i>
//         </p>
//       )}

//       {error && <b>Error: {error}</b>}
//       <ContactList />
//       <ToastContainer />
//     </Container>
//   );
// }
