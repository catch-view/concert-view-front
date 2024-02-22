import { TextField as InputComponent, TextFieldProps } from '@mui/material';
import { TControl } from './types';
import { FieldValues, useController } from 'react-hook-form';

type TProps<T extends FieldValues> = TextFieldProps & TControl<T>;

const TextField = <T extends FieldValues>({
  name,
  rules,
  control,
  ...props
}: TProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({
    name,
    rules,
    control,
  });

  return <InputComponent value={value} onChange={onChange} {...props} />;
};

export default TextField;
