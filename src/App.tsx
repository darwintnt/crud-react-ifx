import { Route, Routes, useLocation } from 'react-router-dom';
import Base from './pages/Dashboard/Base';
import PageTitle from './components/PageTitle';
import { useEffect } from 'react';
import ProductIndex from './pages/Product';
import UserIndex from './pages/User';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard - IFX" />
              <Base />
            </>
          }
        />

        <Route
          path="/productos"
          element={
            <>
              <PageTitle title="Productos - IFX" />
              <ProductIndex />
            </>
          }
        />

        <Route
          path="/usuarios"
          element={
            <>
              <PageTitle title="Usuarios - IFX" />
              <UserIndex />
            </>
          }
        />
        <Route
          path="/auth/login"
          element={
            <>
              <PageTitle title="Login - IFX" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/registro"
          element={
            <>
              <PageTitle title="Registro - IFX" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
