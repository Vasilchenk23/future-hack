import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import axios from 'axios';


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

    const handleBlockClick = async (level) => {
      try {
          const response = await fetch(`https://hackathon.ostolex.com/user/utg`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  "user_id": 0,
                  "goal_id": 0
              })
          });
  
          const data = await response.json();
          console.log('Данные успешно отправлены', data);
      } catch (error) {
          console.error('Ошибка при отправке данных:', error.message);
      }
  };   
    return(
        <>
        <div className="main" style={{  color: textColor, fontSize: `${fontSize}px` }}>
            <div className="white-block">
                <div className="item-header-block">
                  <svg onClick={openModal}  className="eye-image" fill="currentColor" stroke="currentColor" width="60px" height="60px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>eye-low-vision</title>
                    <path d="M24.372 22.603c2.513-1.651 4.675-3.561 6.535-5.738l0.035-0.042c0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001c-6.911-7.893-13.98-10.246-21.028-7.032l-7.029-7.029c-0.226-0.225-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.655 0.363 0.881l27.999 28.001c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM28.318 16c-1.661 1.843-3.558 3.428-5.653 4.721l-0.111 0.064-2.076-2.076c0.482-0.771 0.768-1.706 0.771-2.709v-0.001c-0.004-2.898-2.352-5.246-5.25-5.25h-0c-1.003 0.003-1.939 0.29-2.732 0.785l0.022-0.013-1.467-1.467c5.474-2.061 10.894-0.115 16.496 5.945zM15.18 13.412c0.242-0.091 0.522-0.149 0.814-0.162l0.005-0c0.029-0.001 0.063-0.002 0.097-0.002 1.466 0 2.655 1.189 2.655 2.655 0 0.329-0.060 0.644-0.169 0.935l0.006-0.018zM2.884 9.115c-0.226-0.226-0.539-0.366-0.884-0.366-0.69 0-1.25 0.56-1.25 1.25 0 0.345 0.14 0.658 0.366 0.884l19.999 20.002c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM3.052 17.284c-0.226-0.224-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.656 0.364 0.882l11.832 11.832c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.346-0.14-0.658-0.367-0.885v0z"></path>
                  </svg>
                  <Link to="/level">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="currentColor"  stroke="currentColor"  strokeWidth="2"  
                        strokeLinecap="round"  strokestrokeLinejoinLinejoin="round" className="arrow-left-goal">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" />
                    </svg>
                    </Link>
                </div>
                <h1 className="item-text-h1-goals" >Для чого ти вивчаєш англійську?</h1>
                <svg className="logo-goal" width="160" height="160" viewBox="0 0 160 160" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 26.6667C0 11.9391 11.9391 0 26.6667 0H133.333C148.061 0 160 11.9391 160 26.6667V133.333C160 148.061 148.061 160 133.333 160H26.6667C11.9391 160 0 148.061 0 133.333V26.6667Z" />
                  <path d="M59.5417 94.1632H60.8733V101.333H56.8785C52.3715 101.333 49.8108 98.875 49.8108 94.2656V85.0469H35.9826V101.333H28.0955V62.4097H35.9826V78.0816H42.6406L52.0642 62.4097H60.7708L50.6302 78.0816H57.6979V92.3194C57.6979 93.4462 58.4149 94.1632 59.5417 94.1632Z" style={{ fill: backgroundColor}}/>
                  <path d="M133.292 94.1632H134.726V101.333H130.731C126.224 101.333 123.663 98.875 123.663 94.2656V85.0469H112.293V101.333H104.406V85.0469H92.934V94.2656C92.934 98.875 90.3733 101.333 85.8663 101.333H81.974V94.1632H83.3056C84.4323 94.1632 85.0469 93.4462 85.0469 92.3194V78.0816H91.5L82.0764 62.4097H90.6806L99.4896 78.0816H104.406V62.4097H112.293V78.0816H117.108L125.917 62.4097H134.521L125.097 78.0816H131.55V92.3194C131.55 93.4462 132.267 94.1632 133.292 94.1632Z" style={{ fill: backgroundColor}}/>
                </svg>
            </div>
            <div className="black-block-goals" style={{ backgroundColor: textColor}}>
                  <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson" >
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                    <svg style={{ fill: textColor}} fill="currentColor" stoke="currentColor" width="100px" height="100px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                      <title>plane-solid</title>
                      <path class="clr-i-solid clr-i-solid-path-1" d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z"></path><path class="clr-i-solid clr-i-solid-path-2" d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z"></path>
                      <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                    </svg>
                    <p className="p-page"  style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>1</p>
                      <h3>Хочу подорожувати</h3>
                    </div>
                  </Link>
                  <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                    <svg  style={{ fill: textColor}} fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                      width="100px" height="100px" viewBox="0 0 256 246" enable-background="new 0 0 256 246">
                      <path d="M254,150.588v93.343H53.545v-31.916h64.591v-28.727h60.744v-32.7H254z M113.175,18.875c0,9.282,7.524,16.806,16.806,16.806
                        s16.806-7.524,16.806-16.806s-7.524-16.806-16.806-16.806S113.175,9.593,113.175,18.875z M189.915,100.17
                        c-1.62,3.746-6.074,5.264-9.82,3.543l-31.182-14.68c-1.822-0.81-3.341-2.43-3.948-4.353L139.7,69.798l-7.289,36.463l24.593,0.506
                        c5.264,0.101,9.415,4.556,9.314,9.82l-1.316,50.999c-0.101,5.264-4.454,9.415-9.618,9.415c0,0-0.101,0-0.203,0
                        c-5.366-0.101-9.516-4.556-9.415-9.82l1.114-41.483l-30.668-0.709l-7.087,35.113c-0.304,1.417-0.911,2.936-1.721,4.151
                        l-26.224,37.721c-3.341,4.859-9.82,5.872-14.68,2.531c-4.758-3.341-5.872-9.82-2.43-14.579l24.908-35.494l15.963-90.455
                        L73.183,93.305c-0.556,0.513-1.173,0.919-1.823,1.224l2.972,2.972l-8.68,8.68l14.466,14.466L68.545,132.22L22.253,85.927
                        l11.573-11.573l14.466,14.466l8.68-8.68l4.843,4.842c0.369-0.79,0.883-1.527,1.553-2.164l39.78-37.769
                        c5.25-4.518,13.672-7.244,20.962-6.029l6.884,1.316c9.213,1.62,16.299,7.897,19.236,16.097l7.492,20.552l28.448,13.364
                        C189.915,91.97,191.535,96.424,189.915,100.17z M67.099,97.501L56.972,87.374l-5.063,5.063l10.127,10.127L67.099,97.501z
                        M56.972,126.433l-2.893,2.893l-5.786-5.787l2.893-2.893l-17.36-17.36l-2.893,2.893l-5.787-5.787l2.893-2.893l-8.68-8.68L2,106.18
                        l46.293,46.293l17.36-17.36L56.972,126.433z"/>
                      </svg>
                      <p className="p-page"  style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>2</p>
                      <h3>Розвиваю кар’єру</h3>
                    </div>
                  </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                    <svg height="100px" width="100px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" style={{ fill: textColor}}  fill="currentColor"
                          viewBox="0 0 512 512">
                        <style type="text/css">
                        </style>
                        <g>
                          <path class="st0" d="M502.198,263.697C492.386,148.068,375.395,65.876,259.027,65.876c-153.162,0-143.009,50.139-160.082,51.56
                            C57.128,120.813,0,169.687,0,226.746c0,57.148,23.702,112.864,92.638,112.864c-4.196,23.673,4.165,62.024,78.62,62.024
                            c35.664,0,85.852,0,103.149,0c0,56.369,85.034,43.14,114.898,43.14c29.941,0,34.818-32.062,29.358-40.385
                            C511.99,403.679,525.092,306.224,502.198,263.697z M367.112,114.661h26.447c5.684,0,10.308,4.634,10.308,10.366
                            c0,5.86-4.624,10.523-10.308,10.523h-26.447c-5.86,0-10.502-4.663-10.502-10.523C356.61,119.295,361.252,114.661,367.112,114.661z
                            M290.477,150.881c1.859,0,3.562,0,5.149,0c5.509,0,6.94-0.915,6.94-0.915c0.516-1.003,0.516-4.867,0.516-7.31v-30.505
                            c0-5.704,4.555-10.416,10.366-10.416c5.694,0,10.386,4.712,10.386,10.416v30.34c0.107,2.608,0.107,5.509-0.302,8.39h34.478
                            c1.06,0,2.21-0.049,3.591-0.049c8.372-0.35,21.045-0.72,30.37,8.225c6.054,5.85,9.228,14.61,9.228,25.94v36.697
                            c0,3.446-0.126,10.629,1.781,12.605c0.886,0.827,2.998,0.886,3.758,0.886h53.741c5.646,0,10.278,4.75,10.278,10.464
                            c0,5.85-4.633,10.503-10.278,10.503h-53.741c-9.559,0-15.418-3.854-18.572-7.106c-8.089-8.225-8.06-20.334-7.836-27.527v-1.557
                            v-34.965c0-5.275-1.052-9.208-2.863-10.979c-2.852-2.755-9.655-2.521-15.164-2.278c-1.568,0-2.969,0.116-4.293,0.116h-68.4
                            c0,0-0.108-0.116-0.331-0.116c-8.673,0-21.044,0-24.355,3.26c-0.204,0.243-0.983,0.857-0.983,3.494v56.962
                            c0,5.812-4.74,10.513-10.415,10.513c-5.763,0-10.445-4.701-10.445-10.513v-56.962c0-9.276,3.972-15.088,7.144-18.299
                            C259.942,150.657,276.276,150.706,290.477,150.881z M199.174,92.303c0-5.752,4.682-10.473,10.347-10.473
                            c5.841,0,10.502,4.72,10.502,10.473v11.505h17.512c5.665,0,10.347,4.76,10.347,10.435c0,5.811-4.682,10.503-10.347,10.503h-17.512
                            v14.942c0,5.693-4.662,10.473-10.502,10.473c-5.665,0-10.347-4.78-10.347-10.473V92.303z M96.482,144.584h43.336
                            c9.976-0.088,22.484-0.176,31.741,9.11c7.136,7.018,10.581,17.658,10.581,32.686v11.058h16.363c5.772,0,10.376,4.779,10.376,10.551
                            c0,5.752-4.604,10.454-10.376,10.454H182.14v8.664c0,5.762-4.73,10.493-10.396,10.493c-5.879,0-10.532-4.73-10.532-10.493V186.38
                            c0-8.858-1.548-15.029-4.36-17.774c-3.164-3.338-9.9-3.338-16.986-3.086H96.482c-5.918,0-10.454-4.72-10.454-10.522
                            C86.028,149.323,90.564,144.584,96.482,144.584z M87.77,236.909v19.059c0,5.811-4.604,10.464-10.542,10.464
                            c-5.714,0-10.318-4.653-10.318-10.464v-19.059H40.366c-5.781,0-10.502-4.722-10.502-10.474c0-5.772,4.722-10.503,10.502-10.503
                            h73.228c5.627,0,10.425,4.73,10.425,10.503c0,5.752-4.798,10.474-10.425,10.474H87.77z M141.16,305.679
                            c-5.996,5.869-8.848,14.455-8.848,26.291c0,5.664-4.75,10.464-10.454,10.464c-5.84,0-10.425-4.799-10.425-10.464
                            c0-17.424,5.071-31.275,15.039-41.107c17.774-17.54,45.748-17.092,62.384-16.839c1.81,0,3.309,0,4.78,0h84.315
                            c13.199,0,22.806-2.89,28.238-8.672c8.897-9.384,8.176-25.96,7.533-39.432c-0.135-3.232-0.272-6.268-0.272-8.916
                            c0-5.821,4.604-10.454,10.298-10.454c5.899,0,10.562,4.633,10.562,10.454c0,2.326,0.136,5.1,0.272,8.05
                            c0.77,15.448,1.81,38.828-13.101,54.616c-9.705,10.162-24.296,15.262-43.53,15.262h-84.315c-1.548,0-3.28,0-5.11,0
                            C174.275,294.737,152.646,294.406,141.16,305.679z M249.303,350.687v20.869c0,5.851-4.662,10.445-10.434,10.445
                            c-5.753,0-10.396-4.594-10.396-10.445v-20.869h-40.464c-5.694,0-10.483-4.673-10.483-10.464c0-5.674,4.788-10.445,10.483-10.445
                            h132.322c5.831,0,10.415,4.77,10.415,10.445c0,5.791-4.584,10.464-10.415,10.464H249.303z M390.025,402.247h-61.984
                            c-5.763,0-10.445-4.643-10.445-10.385c0-5.812,4.682-10.474,10.445-10.474h36.21V361.94c0-5.918,4.662-10.474,10.444-10.474
                            c5.821,0,10.415,4.556,10.415,10.474v19.448h4.916c5.723,0,10.425,4.662,10.425,10.474
                            C400.45,397.604,395.748,402.247,390.025,402.247z M417.105,329.779v-17.064h-48.348c-5.744,0-10.454-4.584-10.454-10.366
                            c0-5.772,4.71-10.503,10.454-10.503h73.052c5.889,0,10.551,4.731,10.551,10.503c0,5.782-4.662,10.366-10.551,10.366h-3.757v17.064
                            c0,5.89-4.692,10.445-10.445,10.445C421.845,340.224,417.105,335.669,417.105,329.779z M470.758,377.806h-26.427
                            c-5.831,0-10.494-4.555-10.494-10.366s4.663-10.406,10.494-10.406h26.427c5.86,0,10.571,4.595,10.571,10.406
                            S476.618,377.806,470.758,377.806z"/>
                        </g>
                        </svg>
                        <p className="p-page"  style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>3</p>
                      <h3>Саморозвиваюся</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                        <svg fill="currentColor" style={{ fill: textColor }} width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.73,16.663A3.467,3.467,0,0,0,20.5,14.5a3.5,3.5,0,0,0-7,0,3.467,3.467,0,0,0,.77,2.163A6.04,6.04,0,0,0,12,18.69a6.04,6.04,0,0,0-2.27-2.027A3.467,3.467,0,0,0,10.5,14.5a3.5,3.5,0,0,0-7,0,3.467,3.467,0,0,0,.77,2.163A6,6,0,0,0,1,22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1A6,6,0,0,0,19.73,16.663ZM7,13a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,7,13ZM3.126,21a4,4,0,0,1,7.748,0ZM17,13a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,17,13Zm-3.874,8a4,4,0,0,1,7.748,0ZM6,2V8A1,1,0,0,0,7,9H9.865l1.367,1.641a1,1,0,0,0,1.536,0L14.135,9H17a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1H7A1,1,0,0,0,6,2ZM8,3h8V7H13.667a1,1,0,0,0-.769.359L12,8.438l-.9-1.079A1,1,0,0,0,10.333,7H8Z"/></svg>
                        <p className="p-page"  style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>4</p>
                      <h3>Хочу спілкуватися з усім світом</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                    <svg style={{ fill: textColor }} fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                        width="100px" height="100px" viewBox="0 0 38.022 38.022">
                      <g>
                        <path d="M38.022,16.348c0,0.807-0.484,1.534-1.229,1.846l-0.771,0.322v4.43c0,0.552-0.447,1-1,1c-0.554,0-1-0.448-1-1v-3.594
                          l-2.312,0.968v5.085c0,0.859-0.554,1.626-1.369,1.896l-10.188,3.386c-0.205,0.068-0.418,0.104-0.632,0.104
                          c-0.192,0-0.389-0.028-0.577-0.085L7.736,27.319c-0.845-0.257-1.423-1.033-1.423-1.915v-5.085l-5.084-2.126
                          C0.486,17.881,0,17.154,0,16.348c0-0.806,0.484-1.534,1.229-1.845L18.24,7.388c0.491-0.206,1.049-0.206,1.543,0l17.01,7.115
                          C37.537,14.813,38.022,15.541,38.022,16.348z"/>
                      </g>
                    </svg>
                    <p className="p-page"  style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>5</p>
                      <h3>Вивчаю в рамках освіти</h3>
                    </div>
                    </Link>
                    <Link style={{ color: textColor, fontSize: `${fontSize}px` }} to="/lesson">
                    <div className="item-div" style={{ color: textColor, fontSize: `${fontSize}px` }} onClick={handleBlockClick}>
                    <svg style={{ fill: textColor}} fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                        width="100px" height="100px" viewBox="0 0 34 34">
                      <g>
                        <path d="M26.238,23.738c-2.096,3.047-5.551,4.865-9.237,4.865c-3.689,0-7.145-1.818-9.24-4.865
                          c-0.471-0.684-0.297-1.617,0.385-2.086c0.682-0.471,1.617-0.299,2.086,0.385c1.537,2.232,4.066,3.566,6.77,3.566
                          c2.701,0,5.23-1.334,6.768-3.566c0.473-0.684,1.404-0.854,2.086-0.385C26.538,22.123,26.709,23.057,26.238,23.738z M10.885,16.818
                          c0.074,0.047,0.156,0.07,0.24,0.07s0.166-0.023,0.24-0.07c0.297-0.186,2.894-1.854,3.25-3.358c0.068-0.216,0.104-0.44,0.104-0.668
                          c0-0.811-0.441-1.559-1.152-1.951c-0.328-0.181-0.699-0.276-1.074-0.276c-0.502,0-0.98,0.167-1.367,0.469
                          c-0.389-0.302-0.867-0.469-1.369-0.469c-0.373,0-0.746,0.096-1.074,0.276c-0.711,0.394-1.152,1.141-1.152,1.951
                          c0,0.226,0.035,0.45,0.104,0.667C7.991,14.963,10.588,16.633,10.885,16.818z M22.635,16.818c0.074,0.047,0.156,0.07,0.24,0.07
                          s0.166-0.023,0.24-0.07c0.297-0.186,2.893-1.854,3.25-3.358c0.068-0.216,0.104-0.44,0.104-0.668c0-0.811-0.441-1.559-1.152-1.951
                          c-0.328-0.181-0.697-0.276-1.072-0.276c-0.503,0-0.979,0.167-1.367,0.469c-0.391-0.302-0.865-0.469-1.369-0.469
                          c-0.371,0-0.744,0.096-1.072,0.276c-0.711,0.394-1.152,1.141-1.152,1.951c0,0.226,0.035,0.45,0.104,0.667
                          C19.741,14.963,22.338,16.633,22.635,16.818z M34,7.172v19.656C34,30.783,30.781,34,26.826,34H7.172C3.217,34,0,30.783,0,26.828
                          V7.172C0,3.217,3.217,0,7.172,0h19.654C30.782,0,34,3.217,34,7.172z M30,7.172C30,5.423,28.576,4,26.826,4H7.172
                          C5.422,4,4,5.423,4,7.172v19.656C4,28.576,5.422,30,7.172,30h19.654C28.576,30,30,28.576,30,26.828V7.172z"/>
                      </g>
                    </svg>
                    <p className="p-page" style={{ color: backgroundColor, backgroundColor: textColor, display:'flex', width:'50px', height:'50px', textAlign:'center', justifyContent:'center', alignItems:'center', borderRadius:'30px', margin:"-90px 0px 70px 20px"   }}>6</p>
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