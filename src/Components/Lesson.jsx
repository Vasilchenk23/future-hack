import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Lesson = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 
  const [backgroundColor1, setBackgroundColor1] = useState('#ffffff'); 

  useEffect(() => {
    setBackgroundColor1('#000000');
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const applyChanges = (changes) => {
    setTextColor(changes.textColor);
    setBackgroundColor(changes.backgroundColor);
    
    const blocks = document.querySelectorAll(".white-block-lesson, .black-block-lesson"); 
    blocks.forEach((block) => {
      block.style.backgroundColor = changes.backgroundColor;
    });
  };
  
  return (
    <>
      <div className="main" style={{ color: textColor, backgroundColor: backgroundColor }}>
          <div className="white-block-lesson" >
              <div className="item-header-block">
                  <img onClick={openModal} className="eye-image" src="./img/eye.svg" alt="eye" />
                 <Link to="/speaking"><img className="arrow-left-lesson" src="./img/arrow-left.svg" alt="arrow-left-lesson" /></Link>
              </div>
              <h1 className="item-text-h1-lesson">What hobbies do you have? Які в тебе хобі?</h1>
              <img className="logo-lesson" src="./img/logo.svg" alt="logo" />
          </div>
          <div className="black-block-lesson" style={{ color: textColor, backgroundColor: backgroundColor1 }}>
              <Link to="/finish">
                  <img src="./img/microphone.svg" alt="" />
              </Link>
          </div>
      </div>
      <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
          {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
      </div>
    </>
  );
}

export default Lesson;
