import React, { useState, useRef, useEffect } from 'react';
import './FullScreenModal.css';

export default function FullScreenModal() {
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
            <div className="modal-body">
              <h2>Full Screen Modal</h2>
              <p>This modal takes the full screen and closes when clicking outside.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  width: 90%;
  height: 90%;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  overflow: auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
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
