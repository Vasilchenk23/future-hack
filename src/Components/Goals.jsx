import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Goals = () => {
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
      
      const blocks = document.querySelectorAll(".white-block, .black-block-goals, .item-div");
      blocks.forEach((block) => {
        block.style.backgroundColor = changes.backgroundColor;
      });
    };
    return(
        <>
        <div className="main" style={{  color: textColor, fontSize: `${fontSize}px` }}>
            <div className="white-block">
                <div className="item-header-block">
                    <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
                   <Link to="/level"><img className="arrow-left-goal" src="./img/arrow-left.svg" alt="arrow-left-goal" /></Link>
                </div>
                <h1 className="item-text-h1-goals" >Для чого ти вивчаєш англійську?</h1>
                <img className="logo-goal" src="./img/logo.svg" alt="logo" />
            </div>
            <div className="black-block-goals">
                  <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking" >
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img style={{ fill: "currentColor", backgroundColor: backgroundColor }} src="./img/plane.svg" alt="" />
                      <h3>Хочу подорожувати</h3>
                    </div>
                  </Link>
                  <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img src="./img/career.svg" alt="" />
                      <h3>Розвиваю кар’єру</h3>
                    </div>
                  </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img src="./img/brain.svg" alt="" />
                      <h3>Саморозвиваюся</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img src="./img/group.svg" alt="" />
                      <h3>Хочу спілкуватися з усім світом</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img src="./img/cap.svg" alt="" />
                      <h3>Вивчаю в рамках освіти</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/speaking">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}>
                      <img src="./img/emoticon.svg" alt="" />
                      <h3>А чоби ні?</h3>
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

export default Goals;