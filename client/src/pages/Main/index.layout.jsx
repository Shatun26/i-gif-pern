import { Modal } from 'antd';
import { format } from 'date-fns';
import React from 'react';
import * as H from './index.styled';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
export default function MainLayout({
  isModalVisible,
  handleCancel,
  handleOk,
  showModal,
  handleLogout,
  GifCards,
  isModalDeleteVisible,
  showDeleteModal,
  handleDeleteOk,
  handleDeleteCancel,
  deleteIdCard,
  newCardCategory,
  handleChooseCategory,
  setfilterCategory,
  filterCategory,
  handleAddGif,
  newGif,
}) {
  return (
    <H.MainWrapper>
      <Modal
        title="Add gif"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        wrapClassName={'modalAddGif'}
        centered={true}
        width={'30vw'}
      >
        <H.ModalAddContainer>
          <H.ModalAddInput id='name' value={newGif?.name || ''} onChange={handleAddGif} autoFocus={true} placeholder={'Card`s name'} />
          <H.ModalAddInputCategory
          id='category'
          value={newGif?.category || ''}
          onChange={handleAddGif}
            placeholder={'Put in category'}
          />
          <h1>or</h1>
          <Dropdown
            overlay={() => menu(GifCards, handleChooseCategory)}
            trigger={['click']}
            className={'dropdown'}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {newCardCategory} <DownOutlined />
            </a>
          </Dropdown>
          <input type="file" id="upload" />
          <H.ModalAddBtn htmlFor="upload">
            <p>Upload</p>
          </H.ModalAddBtn>
        </H.ModalAddContainer>
      </Modal>
      <Modal
        title={`Delete "${
          GifCards.filter((card) => card.id === deleteIdCard)[0]?.name
        }" gif?`}
        visible={isModalDeleteVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        closable={false}
        wrapClassName={'modalDeleteGif'}
        centered={true}
        width={'24vw'}
      >
        <p> Permanently remove this from your account?</p>
      </Modal>
      <H.MainHeader>
        <h1>i gif</h1>
        <button onClick={handleLogout}>Log out</button>
      </H.MainHeader>
      <H.MainContent>
        <H.ControlsContainer>
          <H.ContentControls>
            <H.FilterBtn onClick={() => setfilterCategory('All')}>
              All
            </H.FilterBtn>
            {Array.from(new Set(GifCards.map((card) => card.category))).map(
              (category) => (
                <H.FilterBtn onClick={() => setfilterCategory(category)}>
                  {category}
                </H.FilterBtn>
              )
            )}
          </H.ContentControls>
          <H.BtnAddGif onClick={showModal}>+</H.BtnAddGif>
        </H.ControlsContainer>
        <H.CardConteiner>
          
          {GifCards.length ===0 && <p>Add new gif</p>}
          {GifCards.filter((card) => {
            if (filterCategory !== 'All') {
              return card.category === filterCategory;
            } else return card;
          }).map((card) => (
            <H.GifCard>
              <h1>{card.name}</h1>
              <h1>{format(new Date(card.created), 'dd.MM.yy')}</h1>
              <H.ImgContainer>
                <img src={card.url} alt="gif" />
              </H.ImgContainer>

              <H.BtnContainer>
                <button onClick={() => showDeleteModal(card.id)}>Delete</button>
              </H.BtnContainer>
            </H.GifCard>
          ))}
        </H.CardConteiner>
      </H.MainContent>
    </H.MainWrapper>
  );
}
const menu = (GifCards, handleChooseCategory) => (
  <Menu>
    {Array.from(new Set(GifCards.map((card) => card.category))).map(
      (category, id) => (
        <Menu.Item key={id} onClick={() => handleChooseCategory(category) }>
          {category}
        </Menu.Item>
      )
    )}
  </Menu>
);
