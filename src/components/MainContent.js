import React, { useEffect, useRef} from 'react';
import './Components.css';

const MainContent = () => {
    const mainContentRef = useRef(null);

    useEffect(() => {
        if (mainContentRef.current) {
          mainContentRef.current.scrollTop = mainContentRef.current.scrollHeight;
        }
      }, []);

    return (
    <div className="main-content" ref={mainContentRef}>
      <div className="button-row">
        <div className="button large-button" onClick={() => handleClick(1)}></div>
        <div className="button large-button middle" onClick={() => handleClick(2)}></div>
        <div className="button large-button" onClick={() => handleClick(3)}></div>
      </div>
      <div className="button-row">
        <div className="button large-button" onClick={() => handleClick(4)}></div>
        <div className="button large-button middle" onClick={() => handleClick(5)}></div>
        <div className="button large-button" onClick={() => handleClick(6)}></div>
      </div>
      <div className="button-row">
        <div className="button large-button" onClick={() => handleClick(7)}></div>
        <div className="button large-button middle" onClick={() => handleClick(8)}></div>
        <div className="button large-button" onClick={() => handleClick(9)}></div>
      </div>
      <div className="button-row">
        <div className="button large-button" onClick={() => handleClick(10)}></div>
        <div className="button large-button middle" onClick={() => handleClick(11)}></div>
        <div className="button large-button" onClick={() => handleClick(12)}></div>
      </div>
      {/* Additional button rows as needed */}
    </div>
  );
};

const handleClick = (buttonNumber) => {
  console.log(`Button ${buttonNumber} clicked`);
  // TODO Add logic for handling button clicks
};

export default MainContent;
