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
      
      const blocks = document.querySelectorAll(".white-block, .black-block-goals");
      blocks.forEach((block) => {
        block.style.backgroundColor = changes.backgroundColor;
      });
    };
    return(
        <>
        <div className="main" style={{ color: textColor, fontSize: `${fontSize}px` }}>
            <div className="white-block">
                <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
                <h1 className="item-text-h1">Для чого ти вивчаєш англійську?</h1>
                <img src="./img/logo.svg" alt="logo" />
            </div>
            <div className="black-block-goals">
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Prepare to travel</Link></div>
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Boost my career</Link></div>
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Spend time productively</Link></div>
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Connect with people</Link></div>
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Support my education</Link></div>
                <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }}><Link to="/speaking">Just for fun</Link></div>
            </div>
        </div>
        <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
            {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
        </div>
        </>
    );
}

export default Goals;