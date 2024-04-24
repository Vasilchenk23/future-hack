import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(); 
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const applyChanges = (changes) => {
    console.log("Changes applied:", changes);
    setFontSize(changes.fontSize);
    setTextColor(changes.textColor);
    setBackgroundColor(changes.backgroundColor);
    
    const blocks = document.querySelectorAll(".white-block, .black-block, .item-button");
    blocks.forEach((block) => {
      block.style.backgroundColor = changes.backgroundColor;
    });
  };
  

  return(
    <>
      <div className="main" style={{ color: textColor, fontSize: `${fontSize}px` }}>
        <div className="white-block" style={{ backgroundColor: '#ffffff' }}>
          <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
          <h1 className="item-text-h1">Кажи англійською</h1>
          <img src="./img/logo.svg" alt="logo" />
        </div>
        <div className="black-block" style={{ backgroundColor: '#000000' }}>
          <Link to="/level">
            <button style={{ backgroundColor: '#ffffff', color: textColor, }}  className="item-button">Увійти через Дію</button>
          </Link>
        </div>
      </div>
      <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
        {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
      </div>
    </>
  );
}

export default Main;
