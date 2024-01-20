import React from 'react';
import './modal.client.css'

type ModalView = {
    src: string;
    alt?: string;
    onClose: () => void; 
};

const modalView: React.FC<ModalView> = ({src, alt, onClose}) => {


    const closeModal = () => {
        onClose(); 
    }

    return (
        <div id="overlay" onClick={closeModal}>
            <div id="content">
                <img id="imageModal"  src={src} alt={alt} /> 
            </div>
        </div>
    )
}
 
export default modalView;