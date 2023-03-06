/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useMemo, FC } from 'react';
import { createPortal } from 'react-dom';
import ButtonCloseSvg from '../ButtonCloseSvg/ButtonCloswSvg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const modalRootEl = document.getElementById('modal');

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRootEl?.appendChild(element);
    return () => {
      modalRootEl?.removeChild(element);
    };
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('.js-close')) {
      onClose();
    }
  };

  if (isOpen) {
    return createPortal(
      <div
        className="bg-slate-300 fixed top-0 left-0 w-screen h-screen flex justify-center items-center js-close z-50 dark:bg-slate-600"
        onClick={closeModal}
      >
        <div className="bg-white p-4 rounded-xl relative pt-8 sm:min-w-400 dark:bg-slate-300">
          <ButtonCloseSvg close={closeModal} />

          {children}
        </div>
      </div>,
      element
    );
  }
  return null;
};

export default Modal;
