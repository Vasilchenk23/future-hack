import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Speaking = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const searchWords = ["travel", "school", "fruit", "vegetables"];

    const fetchImages = async () => {
      try {
        const iconResponses = await Promise.all(searchWords.map(async (word) => {
          const response = await fetch(`https://api.svgapi.com/v1/D9vZF8WjC0/list/?search=${word}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch icons for ${word}`);
          }
          const data = await response.json();
          return data.icons[0];
        }));
        setIcons(iconResponses);
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };

    fetchImages();
  }, []);

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

    const blocks = document.querySelectorAll(
      ".white-block, .black-block-speak, .block-travel, .item-img"
    );
    blocks.forEach((block) => {
      block.style.backgroundColor = changes.backgroundColor;
    });
  };

  return (
    <>
      <div className="main" style={{ color: textColor, fontSize: `${fontSize}px` }}>
        <div className="white-block">
          <div className="item-header-block">
            <img
              onClick={openModal}
              className="eye-image"
              src="./img/eye.svg"
              alt="eye"
            />
            <Link to="/goals">
              <img
                className="arrow-left-speak"
                src="./img/arrow-left.svg"
                alt="arrow-left-speak"
              />
            </Link>
          </div>
          <h1 className="item-text-h1-speak">Про що поговоримо?</h1>
          <img className="logo-speak" src="./img/logo.svg" alt="logo-speak" />
        </div>
        <div className="black-block-speak">
          {icons.map((icon, index) => (
            <Link key={index} to="/lesson">
              <div className="block-travel">
                <div className="block" style={{ color: textColor, backgroundColor: backgroundColor }}>
                  <img
                    className="item-img"
                    src={icon.url}
                    alt={icon.title}
                    style={{ width: "100px", height: "100px", color: textColor }}
                  />
                  <p className="item-text-travel">{icon.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
        {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
      </div>
    </>
  );
};

export default Speaking;
