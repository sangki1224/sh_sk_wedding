import React from 'react';
import useScroll from '@react-hook/window-scroll';
import './App.css';

const ExampleComponent = () => {
  const scrollY = useScroll(0); // 스크롤 Y 좌표를 가져옵니다.

  // 스크롤에 따라 이미지에 부여할 깊이 값을 계산합니다.
  const depthValue = scrollY * 0.5; // 깊이 값은 스크롤 Y 좌표의 반만큼 적용합니다.

  return (
    <div className="container">
      {/* 스크롤에 따라 깊이를 가지는 이미지를 표시합니다. */}
      <div className="image-container" style={{ transform: `translateZ(-${depthValue}px)` }}>
        <img src="[re]001.jpg" alt="Image 1" />
      </div>
      <div className="image-container" style={{ transform: `translateZ(-${depthValue * 1.5}px)` }}>
        <img src="[re]002.jpg" alt="Image 2" />
      </div>
      <div className="image-container" style={{ transform: `translateZ(-${depthValue * 2}px)` }}>
        <img src="[re]003.jpg" alt="Image 3" />
      </div>
      <div className="image-container" style={{ transform: `translateZ(-${depthValue * 2.5}px)` }}>
        <img src="[re]004.jpg" alt="Image 4" />
      </div>
      <div className="image-container" style={{ transform: `translateZ(-${depthValue * 3}px)` }}>
        <img src="[re]005.jpg" alt="Image 5" />
      </div>
    </div>
  );
};

export default ExampleComponent;
