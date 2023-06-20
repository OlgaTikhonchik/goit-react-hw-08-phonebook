import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MUI from 'components/MUI';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <MUI.Container
        sx={{ marginTop: '20px', textAlign: 'center', color: 'white' }}
      >
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </MUI.Container>
    </>
  );
};
