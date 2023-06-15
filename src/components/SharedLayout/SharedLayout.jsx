import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
