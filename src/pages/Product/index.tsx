import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const ProductIndex: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Productos" />
      <h1>Productos</h1>
    </DefaultLayout>
  );
};

export default ProductIndex;
