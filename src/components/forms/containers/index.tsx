import React, { ReactElement } from 'react';
import { Form, Formik, FormikConfig, FormikProps } from 'formik';
import { Values } from 'components/forms/types';
import FormErrorContainer from './formErrorContainer';

interface IFormContainer extends FormikConfig<any> {
  children: (props: FormikProps<Values>) => ReactElement;
  className?: string;
  serverErrors?: Values;
}

function FormikContainer(props: IFormContainer) {
  const { serverErrors = {}, className, children, ...other } = props;
  return (
    <Formik {...other}>
      {(formik) => {
        const { setErrors } = formik;
        return (
          <FormErrorContainer serverErrors={serverErrors} setErrors={setErrors}>
            <Form className={className}>{children(formik)}</Form>
          </FormErrorContainer>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
