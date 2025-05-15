
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 90vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  min-width: 90vw;
  max-height: 99vh;
  padding: 20px;
  border-radius: 10px;
  /* overflow: auto; */
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  margin-top: 40px;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.open-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.pdfScreenModule {
  min-width: 80%;
  min-height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  overflow-y: auto;
  background: #f9f9f9;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
}

.a4-container {
  /* aspect-ratio: 1/1.414; */
  width: 100%;
  min-height: 100vh;
  min-width: calc(100vh/1.414);
  padding: 20px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
}

.a4-page {
  aspect-ratio: 1/1.414;
  width: 100%;
  min-height: 90vh;
  min-width: calc(90vh/1.414);
  background: #f9f9f9;
  padding: 20px;

}




import React, { useState, useRef, useEffect } from 'react';
import './Report.css';
import Report from "./Report";
import { PDFData } from "./data";

export default function NewPDFReport() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <div>
      <button className="open-btn" onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalRef}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
            <Report
              reportData={PDFData}
              handleClose={handleOutsideClick}

            />
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react'
import "./Report.css"

const Report = ({ reportData, handleClose }) => {
    console.log(" pdf rport ^^^^^^^^^^^^^^", reportData)

    return (
        <div className='pdfScreenModule' >
            <div className='a4-container'>
                {reportData && reportData?.data.map((val, index) => (
                    <>
                        {val.component()}
                        <hr />
                    </>

                ))}
            </div>
        </div>
    )
}


export default Report
import React from 'react'
import "./Report.css"


const Comp1 = () => {
    return (
        <div className='a4-page'>
            <p> "Persona Details",</p>
            <p>"Overview of Persona Details",</p>
        </div>
    )
}

export default Comp1
