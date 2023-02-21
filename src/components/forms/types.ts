import { FieldMetaProps, FieldProps } from 'formik';

export type Values = {
  [field: string]: any;
};

interface Imeta extends FieldMetaProps<any> {
  error: any;
}

export interface IFieldProps extends FieldProps {
  meta: Imeta;
}
