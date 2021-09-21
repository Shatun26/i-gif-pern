import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'main',
  initialState: {
    // меняется начальное состояние редьюсера
    GifCards: [
      {
        category: 'Animals',
        name: 'Small dog',
        url: 'https://psv4.userapi.com/c520036/u2000024904/docs/d19/9c76750ce5a5/file.gif?extra=zv-QLOVxcIfNHNePscrOBFFIKSKcVBteKDHYKbRoR83oSrcvxriA_6qVU5hHxSYvQ1dba9sAPxjd68vMYvjpvns_l5Z-QQ6RiUpFtfL7rbnFlRnWumfCJpZgm8n7TaRKSovcxGkIAYygbSadJ3pm-JKj',
        created: new Date('2021-06-1'),
        id: 1,
      },
      {
        category: 'Animals',
        name: 'Cat is running',
        url: 'https://i.gifer.com/embedded/download/KwrC.gif',
        created: new Date('2021-09-14'),
        id: 2,
      },
      {
        category: '3D',
        name: 'Giphno',
        url: 'http://cameralabs.org/media/camera/june/23june/7_96faac4063c86a2391104c6ab4e392ae.gif',
        created: new Date('2020-05-4'),
        id: 3,
      },
      {
        category: '3D',
        name: 'Spiral',
        url: 'https://i.gifer.com/embedded/download/GCba.gif',
        created: new Date('2021-04-5'),
        id: 4,
      },
      {
        category: 'Furry',
        name: 'Fox',
        url: 'https://thumbs.gfycat.com/AnnualLightheartedFlickertailsquirrel-size_restricted.gif',
        created: new Date('2021-09-14'),
        id: 5,
      },

      {
        category: 'Furry',
        name: 'Dancing furry',
        url: 'http://pa1.narvii.com/6853/4f9caa1f0ceba8d6ddc11c7861c5f3a42651c458_00.gif',
        created: new Date('2021-09-14'),
        id: 6,
      },
      {
        category: 'Animals',
        name: 'Angry boy',
        url: 'https://kak2z.ru/my_img/img/2018/09/11/1b67f.gif',
        created: new Date('2021-09-14'),
        id: 7,
      },
    ],
  },
  reducers: {
    // меняется набор редьюсеров
    deleteGif: (state, { payload }) => {
      state.GifCards = state.GifCards.filter((card) => card.id !== payload);
    },
    addGif: (state, { payload }) => {
      state.GifCards.push(payload);
    },
  },
});

// меняются только названия переменных
const MainReducer = mainSlice.reducer;
// экспорт экшенов в компоненты

export const { deleteGif, addGif } = mainSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default MainReducer;
