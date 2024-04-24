import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const LanguageLevel = () => {
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
      
      const blocks = document.querySelectorAll(".white-block, .black-block-level-english, item-text");
      blocks.forEach((block) => {
        block.style.backgroundColor = changes.backgroundColor;
      });
    };
    return(
        <>
            <div className="main" style={{ color: textColor, fontSize: `${fontSize}px`, backgroundColor: backgroundColor }}>
                <div className="white-block">
                    <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
                    <h1 className="item-text-h1-level">Якій в тебе рівень англійської?</h1>
                    <img src="./img/logo.svg" alt="logo" />
                </div>
                <div className="black-block-level-english">
                    <Link to="/goals">
                        <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>1</p>
                            <p className="item-text-level">Знаю що London is the capital of the Great Britan</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>2</p>
                            <p className="item-text-level">Можу замовити каву. Але тільки small</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>3</p>
                            <p className="item-text-level">Розповім як пройшов мій день, якщо він був good</p>
                        </div>
                    </Link>
                    <Link to="/goals">
                        <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>4</p>
                            <p className="item-text-level">Можу вести бесіду на різноманітні теми. Пишу твіти без помилок (майже)</p>
                        </div>
                    </Link>
                   <Link to="/goals">
                    <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>5</p>
                            <p className="item-text-level">Можу використовувати складну мову. Дивлюсь серіали без субтитрів</p>
                        </div>
                   </Link>
                    <Link to="/goals">
                        <div className="item-block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                            <p className="item-text" style={{ color: textColor, backgroundColor: backgroundColor }}>6</p>
                            <p className="item-text-level">Розмовляю як носій. Dobry den, everybody</p>
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

export default LanguageLevel;