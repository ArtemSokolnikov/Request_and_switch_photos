import React, { useContext, useEffect, useState } from 'react';
import style from '../modules/main.module.css';
import Buttons from './Buttons';
import NamePage from './NamePage';
import Specification from './Specification';
import { UserContext } from '../utils/context';

const Main = () => {
  const { pictures } = useContext(UserContext);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(false);
  const [oldImages, setOldImages] = useState([]);
  const [loading, setLoading] = useState(true);

  function createImgArr(quantity, max) {
    const newArr = [];
    if (!oldImages.length) {
      for (let i = 0; i < quantity; i++) {
        newArr[i] = pictures[Math.floor(Math.random() * max)];
      }
    } else {
      while (quantity > newArr.length) {
        let arrOldImg = [];
        let number = Math.floor(Math.random() * max);
        if (!images.includes(number) && !oldImages.includes(number)) {
          newArr.push(number);
          arrOldImg.push(number);
        }
        setOldImages(arrOldImg);
      }
    }
    return newArr;
  }

  const handleClickUpdate = () => {
    const imgQuantity = 5;
    setImages(createImgArr(imgQuantity, pictures.length));
  }

  useEffect(() => {
    setImages(createImgArr(5, pictures.length));
    setLoading(false);
  }, []);

  return (
    loading ? <>Loading</> :
      <UserContext.Provider value={{
        handleClickUpdate, setIndex
      }}>
        <div className={style.container}>
          <div>
            <div className={style.pictures}>
              <div>
                <img
                  onMouseOut={() => { setText(false) }}
                  onMouseOver={() => { setText(true) }}
                  src={images[index].img}
                  className={style.currentPicture}
                  key={images[index].id}
                  alt={images[index].title}
                />
                <span>{text ? <NamePage text={images[index].title} /> : <div></div>}</span>
                <span>{text ? <Specification text={images[index].description} /> : <div></div>}</span>
              </div>
            </div>
            <Buttons />
          </div>
        </div>
      </UserContext.Provider>
  )
}

export default Main