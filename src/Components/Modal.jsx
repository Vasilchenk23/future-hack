// import React, { useState } from 'react';
import '../../src/index.css'

const Modal = ({ onClose, applyChanges }) => {
// const [fontSize, setFontSize] = useState('16'); 
const combinedStyles = [
  { textColor: '#0066FF', backgroundColor: '#CC0000' }, 
  { textColor: '#00CCCC', backgroundColor: '#CC0000' }, 
  { textColor: '#009900', backgroundColor: '#CC0000' }, 
  { textColor: '#FDF300', backgroundColor: '#CC0000' }, 
  { textColor: '#FF6600', backgroundColor: '#CC0000' }, 
  { textColor: '#FFFFFF', backgroundColor: '#CC0000' },  
  { textColor: '#330099', backgroundColor: '#FF6600' }, 
  { textColor: '#0066FF', backgroundColor: '#FF6600' },
  { textColor: '#00CCCC', backgroundColor: '#FF6600' }, 
  { textColor: '#009900', backgroundColor: '#FF6600' }, 
  { textColor: '#FDF300', backgroundColor: '#FF6600' },
  { textColor: '#FFFFFF', backgroundColor: '#FF6600' },
  { textColor: '#330099', backgroundColor: '#FFFF00' }, 
  { textColor: '#0066FF', backgroundColor: '#FFFF00' }, 
  { textColor: '#7cfc00', backgroundColor: '#FFFF00' }, 
  { textColor: '#00CCCC', backgroundColor: '#FFFF00' }, 
  { textColor: '#009900', backgroundColor: '#FFFF00' }, 
  { textColor: '#FF6600', backgroundColor: '#FFFF00' }, 
  { textColor: '#FFFFFF', backgroundColor: '#FFFF00' }, 
  { textColor: '#330099', backgroundColor: '#009900' }, 
  { textColor: '#0066FF', backgroundColor: '#009900' }, 
  { textColor: '#7cfc00', backgroundColor: '#009900' }, 
  { textColor: '#00CCCC', backgroundColor: '#009900' },  
  { textColor: '#FDF300', backgroundColor: '#009900' }, 
  { textColor: '#FF6600', backgroundColor: '#009900' }, 
  { textColor: '#FFFFFF', backgroundColor: '#009900' }, 
  { textColor: '#330099', backgroundColor: '#00CCCC' }, 
  { textColor: '#0066FF', backgroundColor: '#00CCCC' }, 
  { textColor: '#7cfc00', backgroundColor: '#00CCCC' }, 
  { textColor: '#009900', backgroundColor: '#00CCCC' }, 
  { textColor: '#FDF300', backgroundColor: '#00CCCC' }, 
  { textColor: '#FF6600', backgroundColor: '#00CCCC' }, 
  { textColor: '#FFFFFF', backgroundColor: '#00CCCC' },  
  { textColor: '#330099', backgroundColor: '#0066FF' }, 
  { textColor: '#7cfc00', backgroundColor: '#0066FF' }, 
  { textColor: '#00CCCC', backgroundColor: '#0066FF' }, 
  { textColor: '#009900', backgroundColor: '#0066FF' }, 
  { textColor: '#FDF300', backgroundColor: '#0066FF' }, 
  { textColor: '#FF6600', backgroundColor: '#0066FF' }, 
  { textColor: '#FFFFFF', backgroundColor: '#0066FF' },  
  { textColor: '#0066FF', backgroundColor: '#330099' }, 
  { textColor: '#7cfc00', backgroundColor: '#330099' }, 
  { textColor: '#00CCCC', backgroundColor: '#330099' }, 
  { textColor: '#009900', backgroundColor: '#330099' }, 
  { textColor: '#FDF300', backgroundColor: '#330099' }, 
  { textColor: '#FF6600', backgroundColor: '#330099' },  
  { textColor: '#330099', backgroundColor: '#000000' }, 
  { textColor: '#0066FF', backgroundColor: '#000000' }, 
  { textColor: '#7cfc00', backgroundColor: '#000000' }, 
  { textColor: '#00CCCC', backgroundColor: '#000000' }, 
  { textColor: '#009900', backgroundColor: '#000000' }, 
  { textColor: '#FDF300', backgroundColor: '#000000' }, 
  { textColor: '#FF6600', backgroundColor: '#000000' }, 
  { textColor: '#FFFFFF', backgroundColor: '#000000' }, 
]

  const applyStyle = (changes) => {
    applyChanges(changes);
    onClose();
  };

  return (
    <div className="modal">
      <div className='block-modal'>
        <div>
          <h3 className="color-options">Стилі:</h3>
          <div className="color-options">
            {combinedStyles.map((style, index) => (
              <button
                key={index}
                className="color-option-button"
                style={{ backgroundColor: style.backgroundColor, color: style.textColor, margin: '10px' }}
                onClick={() => applyStyle(style)}
              >
                A
              </button>
            ))}
          </div>
        </div>
        {/* <div>
          <h3>Розмір:</h3>
          <select id="fontSize" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="14">Маленький</option>
            <option value="16">Середній</option>
            <option value="24">Великий</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Modal;
