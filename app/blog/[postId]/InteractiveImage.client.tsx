'use client'
import React,{useState} from 'react';
import ModalView from './modal.client'

type InteractiveImageProps = {
  src: string;
  alt?: string;
};



const InteractiveImage: React.FC<InteractiveImageProps> = ({ src, alt }) => {
    const [isModalVisible, setModalView] = useState(false)
  const imgClick = () =>{
    setModalView(!isModalVisible)  
  }

  return (
    <>
        <img src={src} alt={alt} onClick={imgClick} />
        {isModalVisible  && <ModalView src={src} alt={alt} onClose={() => setModalView(false)} />} 
    </>
  )
};

export default InteractiveImage;