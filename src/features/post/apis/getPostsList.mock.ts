import { HttpHandler, HttpResponse, http } from 'msw';

export const getMockPostsList: HttpHandler = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/api/post/12447702/1`,
  () => {
    return HttpResponse.json(GET_MOCK_POSTS_LIST.success);
  }
);

export const GET_MOCK_POSTS_LIST = {
  success: {
    items: [
      {
        postID: '65fa7c667aa824317fc7fada',
        placeID: '12447702',
        author: '오목눈이',
        contents: [
          {
            image:
              'https://firebasestorage.googleapis.com/v0/b/concert-view-4fe0c.appspot.com/o/image%2F1710914645245?alt=media&token=db9b31e2-cb49-40c7-8d3d-d212b20bccca',
            rates: [],
            description: '<b>첫번째 이미지 예시 설명</b>',
            tags: [
              {
                label: '갈색벽돌',
                bgColor: 'hsla(146, 96.12%, 74.25%, 0.2021694474129525)',
                color: 'black',
              },
              {
                label: '무난',
                bgColor:
                  'hsla(97, 82.61%, 71.24999999999999%, 0.8359299060648571)',
                color: 'black',
              },
            ],
          },
          {
            image:
              'https://firebasestorage.googleapis.com/v0/b/concert-view-4fe0c.appspot.com/o/image%2F1710914652442?alt=media&token=2e79dbd6-5a63-4061-8f9f-64ec1d37d211',
            rates: [],
            description: '<h3>두번재 이미지 설명 예</h3>',
            tags: [
              {
                label: '센컨',
                bgColor: 'rgba(0,0,0,0.5)',
                color: 'white',
              },
            ],
          },
          {
            image:
              'https://firebasestorage.googleapis.com/v0/b/concert-view-4fe0c.appspot.com/o/image%2F1710914659068?alt=media&token=208e8966-f50d-4a4c-a326-e33225e5ceb5',
            rates: [],
            description: '<h4>세번째 이미지 테스트</h4>',
            tags: [],
          },
        ],
        title: '게시물 작성 테스트',
        createdAt: '2024-03-20T06:04:22.327Z',
      },
      {
        postID: '65fa7d287aa824317fc7fae0',
        placeID: '12447702',
        author: '흰머리오목눈이',
        contents: [
          {
            image:
              'https://firebasestorage.googleapis.com/v0/b/concert-view-4fe0c.appspot.com/o/image%2F1710914852568?alt=media&token=f88a30af-7e95-42c0-b28e-da26e09ec371',
            rates: [],
            description: '<h3>테스트</h3><br /><b>볼드체</b>',
            tags: [
              {
                label: '보나조이',
                bgColor: 'hsla(227, 100%, 88.5%, 0.922307432123108)',
                color: 'black',
              },
            ],
          },
        ],
        title: '게시물 작성 테스트2',
        createdAt: '2024-03-20T06:07:36.226Z',
      },
    ],
    totalCount: 2,
    currentPage: 1,
    isLastPage: true,
  },
};
