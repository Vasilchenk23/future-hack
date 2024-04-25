import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Speaking = () => {
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
      
      const blocks = document.querySelectorAll(".white-block, .black-block-speak, .block-travel");
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
                   <Link to="/goals"><img className="arrow-left-speak" src="./img/arrow-left.svg" alt="arrow-left-speak" /></Link>
                </div>
                <h1 className="item-text-h1-speak">Про що поговоримо?</h1>
                <img className="logo-speak" src="./img/logo.svg" alt="logo-speak" />
            </div>
            <div className="black-block-speak">
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                                <img className="item-img" src="./img/cloud.svg" alt="cloud"/>
                                <p className="item-text-travel">Weather / Погода</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                        <div className="block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                                <img className="item-img" src="./img/pizza.svg" alt="pizza"/>
                                <p className="item-text-travel">Food / Їжа</p>
                        </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                                <img className="item-img" src="./img/airplane.svg" alt="airplane"/>
                                <p className="item-text-travel">Travel / Подорожі</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lesson">
                        <div className="block-travel">
                            <div className="block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                                <img className="item-img" src="./img/bowling.svg" alt="bowling"/>
                                <p className="item-text-travel">Weather / Погода</p>
                            </div>
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

export default Speaking