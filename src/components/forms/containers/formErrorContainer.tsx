import React, { ReactChild, ReactChildren, ReactElement, useEffect } from 'react';
import { FormikErrors } from 'formik';
import { Values } from 'components/forms/types';

interface FormErrorContainerType {
  setErrors: (errors: FormikErrors<Values>) => void;
  serverErrors?: Values;
  children: ReactChild | ReactChildren;
}

function FormErrorContainer({
  setErrors,
  children,
  serverErrors = {}
}: FormErrorContainerType): ReactElement {
  useEffect(() => {
    setErrors(serverErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverErrors]);

  return <>{children}1</>;
}

export default FormErrorContainer;
