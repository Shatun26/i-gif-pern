import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/slices/auth';
import { addGif, deleteGif } from '../../redux/slices/main';
import MainLayout from './index.layout';

export default function Main() {
  const { GifCards } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newCardCategory, setNewCardCategory] = useState('Choose category');
  const [deleteIdCard, setdeleteIdCard] = useState();

  const [filterCategory, setfilterCategory] = useState('All');

  const [newGif, setNewGif] = useState({});

  const handleAddGif = (e) => {
    setNewGif((props) => {
      return {
        ...props,
        [e.target.id]: e.target.value,
      };
    });
  };
  const handlelDispathGif = async () => {
    const newGifCreate = {
      ...newGif,
      created: new Date(),
      url: 'https://thumbs.gfycat.com/AnnualLightheartedFlickertailsquirrel-size_restricted.gif',
      id: Math.max(...GifCards.map((card) => card.id)) + 1 ,
    };
    dispatch(addGif(newGifCreate))
    setNewGif({});
  };

  const handleChooseCategory = (category) => {
    setNewCardCategory(category);
    setNewGif((props) => {
      return {
        ...props,
        category,
      };
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    handlelDispathGif();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalDeleteVisible, setIsModaDeletelVisible] = useState(false);

  const showDeleteModal = (id) => {
    setdeleteIdCard(id);
    setIsModaDeletelVisible(true);
  };

  const handleDeleteOk = () => {
    setIsModaDeletelVisible(false);
    dispatch(deleteGif(deleteIdCard));
  };

  const handleDeleteCancel = () => {
    setIsModaDeletelVisible(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
  };
  return (
    <MainLayout
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      GifCards={GifCards}
      handleLogout={handleLogout}
      isModalDeleteVisible={isModalDeleteVisible}
      showDeleteModal={showDeleteModal}
      handleDeleteOk={handleDeleteOk}
      handleDeleteCancel={handleDeleteCancel}
      deleteIdCard={deleteIdCard}
      newCardCategory={newCardCategory}
      setfilterCategory={setfilterCategory}
      filterCategory={filterCategory}
      handleAddGif={handleAddGif}
      newGif={newGif}
      handleChooseCategory={handleChooseCategory}
    />
  );
}
