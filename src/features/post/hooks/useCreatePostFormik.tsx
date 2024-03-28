import { useFormik } from 'formik';
import { DisplayingErrorMessagesSchema } from '../views/CreateView/schemas';

type Props = {
  handleSubmit: () => void;
};
export const useCreatePostFormik = ({ handleSubmit }: Props) => {
  return useFormik({
    initialValues: {
      author: '',
      password: '',
      inputTag: '',
      title: '',
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: handleSubmit,
    enableReinitialize: false,
    validateOnBlur: true,
  });
};
