import * as Yup from 'yup';

export const DisplayingErrorMessagesSchema = Yup.object().shape({
  author: Yup.string()
    .min(2, '닉네임이 너무 짧습니다')
    .max(8, '닉네임은 최대 여덟글자입니다')
    .required('Required'),
  password: Yup.string()
    .length(4, '비밀번호는 네자리입니다')
    .required('Required'),
});
