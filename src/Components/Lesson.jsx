import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
// import VoiceRecognitionAnimation from "./VoiceRecognitionAnimation";

const Lesson = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
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

  const startRecording = () => {
      setIsRecording(true);
      navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
              mediaRecorder.current = new MediaRecorder(stream);
              mediaRecorder.current.ondataavailable = event => {
                  audioChunks.current.push(event.data);
              };
              mediaRecorder.current.start();
          })
          .catch(error => console.error('Error accessing media devices.', error));
  };

  const stopRecording = async () => {
      setIsRecording(false);
      mediaRecorder.current.stop();

      if (audioChunks.current.length > 0) {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/mp3' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            await audio.play();

          try {
              const formData = new FormData();
              formData.append('file', audioBlob);

              const response = await fetch('https://hackathon.ostolex.com/user/file/upload?id=3', {
                  method: 'POST',
                  body: formData
              });

              if (response.ok) {
                  console.log('Аудиофайл успешно загружен на сервер');
              } else {
                  console.error('Ошибка при загрузке аудиофайла на сервер:', response.statusText);
              }
          } catch (error) {
              console.error('Ошибка при выполнении запроса:', error);
          }

          audioChunks.current = [];
      }
  };

  useEffect(() => {
      if (!isRecording && audioChunks.current.length > 0) {
          // Остановить запись и отправить аудиофайл на сервер
          stopRecording();
      }
  }, [isRecording]);

 
  return (
    <>
      <div className="main" style={{ color: textColor, backgroundColor: backgroundColor }}>
          <div className="white-block-lesson" >
              <div className="item-header-block">
                 <svg onClick={openModal}  className="eye-image" fill="currentColor" stroke="currentColor" width="60px" height="60px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>eye-low-vision</title>
                    <path d="M24.372 22.603c2.513-1.651 4.675-3.561 6.535-5.738l0.035-0.042c0.192-0.219 0.309-0.507 0.309-0.823s-0.117-0.604-0.31-0.825l0.001 0.001c-6.911-7.893-13.98-10.246-21.028-7.032l-7.029-7.029c-0.226-0.225-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.655 0.363 0.881l27.999 28.001c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM28.318 16c-1.661 1.843-3.558 3.428-5.653 4.721l-0.111 0.064-2.076-2.076c0.482-0.771 0.768-1.706 0.771-2.709v-0.001c-0.004-2.898-2.352-5.246-5.25-5.25h-0c-1.003 0.003-1.939 0.29-2.732 0.785l0.022-0.013-1.467-1.467c5.474-2.061 10.894-0.115 16.496 5.945zM15.18 13.412c0.242-0.091 0.522-0.149 0.814-0.162l0.005-0c0.029-0.001 0.063-0.002 0.097-0.002 1.466 0 2.655 1.189 2.655 2.655 0 0.329-0.060 0.644-0.169 0.935l0.006-0.018zM2.884 9.115c-0.226-0.226-0.539-0.366-0.884-0.366-0.69 0-1.25 0.56-1.25 1.25 0 0.345 0.14 0.658 0.366 0.884l19.999 20.002c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM3.052 17.284c-0.226-0.224-0.537-0.363-0.881-0.363-0.69 0-1.25 0.56-1.25 1.25 0 0.344 0.139 0.656 0.364 0.882l11.832 11.832c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.346-0.14-0.658-0.367-0.885v0z"></path>
                 </svg>
                 <Link to="/goals">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="70"  height="70"  viewBox="0 0 24 24"  fill="currentColor"  stroke="currentColor"  strokeWidth="2"  
                      strokeLinecap="round"  strokestrokeLinejoinLinejoin="round" className="arrow-left-lesson">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" />
                  </svg>
                  </Link>
              </div>
              <h1 className="item-text-h1-lesson">What hobbies do you have? Які в тебе хобі?</h1>
              <svg className="logo-lesson" width="160" height="160" viewBox="0 0 160 160" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 26.6667C0 11.9391 11.9391 0 26.6667 0H133.333C148.061 0 160 11.9391 160 26.6667V133.333C160 148.061 148.061 160 133.333 160H26.6667C11.9391 160 0 148.061 0 133.333V26.6667Z" />
                <path d="M59.5417 94.1632H60.8733V101.333H56.8785C52.3715 101.333 49.8108 98.875 49.8108 94.2656V85.0469H35.9826V101.333H28.0955V62.4097H35.9826V78.0816H42.6406L52.0642 62.4097H60.7708L50.6302 78.0816H57.6979V92.3194C57.6979 93.4462 58.4149 94.1632 59.5417 94.1632Z" style={{ fill: backgroundColor}}/>
                <path d="M133.292 94.1632H134.726V101.333H130.731C126.224 101.333 123.663 98.875 123.663 94.2656V85.0469H112.293V101.333H104.406V85.0469H92.934V94.2656C92.934 98.875 90.3733 101.333 85.8663 101.333H81.974V94.1632H83.3056C84.4323 94.1632 85.0469 93.4462 85.0469 92.3194V78.0816H91.5L82.0764 62.4097H90.6806L99.4896 78.0816H104.406V62.4097H112.293V78.0816H117.108L125.917 62.4097H134.521L125.097 78.0816H131.55V92.3194C131.55 93.4462 132.267 94.1632 133.292 94.1632Z" style={{ fill: backgroundColor}}/>
              </svg>
          </div>
          <div className="black-block-lesson" style={{ color: textColor, backgroundColor: textColor }}>
              {/* <Link to="/finish"> */}
              <svg onClick={isRecording ? stopRecording : startRecording} width="240px" height="240px" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Icon-Set" transform="translate(-105.000000, -307.000000)" style={{ fill: backgroundColor}} fill="currentColor">
                          <path d="M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z" id="microphone">

              </path>
                      </g>
                  </g>
              </svg>
              {/* <VoiceRecognitionAnimation /> */}
              {isRecording}
              {/* </Link> */}
              {/* <Link to="/finish" style={{color: "green"}}>gg</Link> */}
          </div>
      </div>
      <div className="app" style={{ color: textColor, backgroundColor: backgroundColor }}>
          {modalOpen && <Modal onClose={closeModal} applyChanges={applyChanges} />}
      </div>
    </>
  );
}

export default Lesson;
