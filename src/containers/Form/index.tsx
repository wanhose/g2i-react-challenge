import { Form as Component, Formik } from 'formik';
import { FC } from 'react';

import useConnect from './connect';
import { initialValues } from './constants';

const Form: FC = ({ children }) => {
  const { handleSubmit } = useConnect();

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Component noValidate>{children}</Component>
    </Formik>
  );
};

export default Form;
