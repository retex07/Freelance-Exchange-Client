import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import './styles.scss';

const modalRootElement = document.getElementById('modal');

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

const Modal = (props: Props) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (props.isOpen) {
      modalRootElement?.appendChild(element);

      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  });

  return props.isOpen
    ? createPortal(
        <>
          <div className="modal-container">
            <div className="modal-card">{props.children}</div>
            <div className="bg-closer" onClick={props.onClose} />
          </div>
        </>,
        element,
      )
    : null;
};

export default Modal;
