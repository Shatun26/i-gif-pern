import { format } from 'date-fns';
import React from 'react';
import * as H from './index.styled';

export default function MainLayout({ handleLogout }) {
  const cards = [
    {
      category: 'Cute',
      name: 'Small dog',
      url: 'https://psv4.userapi.com/c520036/u2000024904/docs/d19/9c76750ce5a5/file.gif?extra=zv-QLOVxcIfNHNePscrOBFFIKSKcVBteKDHYKbRoR83oSrcvxriA_6qVU5hHxSYvQ1dba9sAPxjd68vMYvjpvns_l5Z-QQ6RiUpFtfL7rbnFlRnWumfCJpZgm8n7TaRKSovcxGkIAYygbSadJ3pm-JKj',
      created: new Date('2021-09-14'),
    },
    // { category: 'Animals' },
    // { category: 'Meme' },
    // { category: 'Animals' },
    // { category: 'Funny' },
    // { category: 'Animals' },
    // { category: 'Animals' },
    // { category: 'Funny' },
    // { category: 'Animals' },
    // { category: 'Animals' },
    // { category: 'Cute' },
    // { category: 'Animals' },
    // { category: 'Animals' },
    // { category: 'Cute' },
    // { category: 'Funny' },
    // { category: 'Animals' },
    // { category: 'Meme' },
    // { category: 'Meme' },
    // { category: 'Animals' },
    // { category: 'Animals' },
    // { category: 'Funny' },
  ];
  console.log(Array.from(new Set(cards.map((card) => card.category))));
  return (
    <H.MainWrapper>
      <H.MainHeader>
        <h1>i gif</h1>
        <button onClick={handleLogout}>Log out</button>
      </H.MainHeader>
      <H.MainContent>
        <H.ControlsContainer>
          <H.ContentControls>
            <H.FilterBtn>All</H.FilterBtn>
            {Array.from(new Set(cards.map((card) => card.category))).map(
              (category) => (
                <H.FilterBtn>{category}</H.FilterBtn>
              )
            )}
          </H.ContentControls>
          <H.BtnAddGif>+</H.BtnAddGif>
        </H.ControlsContainer>
        <H.CardConteiner>
          {cards.map((card) => (
            <H.GifCard>
              <h1>{card.name}</h1>
              <h1>{format(new Date(card.created), 'dd.MM.yy')}</h1>
              <H.ImgContainer>
                
                <img src={card.url} alt="gif" />
              </H.ImgContainer>

              <H.BtnContainer>
                <button>Delete</button>
                <button>Edit</button>
              </H.BtnContainer>
            </H.GifCard>
          ))}
        </H.CardConteiner>
      </H.MainContent>
    </H.MainWrapper>
  );
}
