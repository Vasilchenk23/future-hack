import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Finish = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [fontSize, setFontSize] = useState(16); 
    const [textColor, setTextColor] = useState('#000000');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const applyChanges = (changes) => {
      setFontSize(changes.fontSize);
      setTextColor(changes.textColor);
      setBackgroundColor(changes.backgroundColor);
      
      const blocks = document.querySelectorAll(".white-block, .black-block");
      blocks.forEach((block) => {
        block.style.backgroundColor = changes.backgroundColor;
      });
    };
    return(
        <>
        <div className="main" style={{ color: textColor, fontSize: `${fontSize}px` }}>
            <div className="white-block">
                <div className="item-header-block">
                        <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
                        <Link to="/lesson"><img className="arrow-left-finish" src="./img/arrow-left.svg" alt="arrow-left-finish" /></Link>
                </div>
                <h1 className="item-text-h1-finish">Поговоримо ще?</h1>
                <img className="logo-finish" src="./img/logo.svg" alt="logo" />
            </div>
            <div className="black-block-finish">
              <Link to="/speaking">
                  <div className="true-block">
                    <p className="item-true-block">Так! Давай оберемо наступну тему</p>
                  </div>
              </Link>
              <Link to="/main">
                  <div className="false-block">
                    <p className="item-false-block">Поки все, але ще поговоримо</p>
                  </div>
              </Link>
            </div>
        </div>
        <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
            {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
        </div>
        </>
    );
}

export default Finish;