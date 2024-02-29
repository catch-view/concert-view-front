import * as Yup from 'yup';
import { Tag } from 'src/interfaces/post';

export const DisplayingErrorMessagesSchema = Yup.object().shape({
  author: Yup.string()
    .min(2, '닉네임이 너무 짧습니다')
    .max(8, '닉네임은 최대 여덟글자입니다')
    .matches(/^[가-힣|]+$/, '한글 닉네임 형식으로 작성해주세요')
    .required('닉네임을 입력해주세요'),
  password: Yup.string()
    .length(4, '비밀번호는 네자리로 입력해주세요')
    .required('비밀번호를 입력해주세요'),
  inputTag: Yup.string()
    .min(2, '최소 두글자 태그를 입력해주세요')
    .max(6, '최대 여섯자까지 입력 가능합니다')
    .matches(/^[가-힣|]+$/, '한글만 입력 가능합니다'),
});
