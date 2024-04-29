import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const UserIndex: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Usuarios" />
      <h1>Usuarios</h1>
    </DefaultLayout>
  );
};

export default UserIndex;