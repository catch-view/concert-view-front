import * as Yup from 'yup';

export const DisplayingErrorMessagesSchema = Yup.object().shape({
  searchQuery: Yup.string()
    .min(2, '최소 두자 이상을 입력해주세요')
    .max(20, '최대 20자 이내로 입력해주세요'),
});
