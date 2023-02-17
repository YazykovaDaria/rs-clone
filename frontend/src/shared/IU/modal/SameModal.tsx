/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};
const SameModal = ({ onClose, isOpen, children }: ModalProps) => {
  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('.js-cl')) {
      onClose();
    }
  };

  if (isOpen)
    return (
      <div
        className="bg-slate-300 fixed top-0 left-0 w-screen h-screen flex justify-center items-center js-cl z-40"
        onClick={closeModal}
      >
        <div className="bg-white p-4 rounded-xl relative pt-8">{children}</div>
      </div>
    );
  return null;
};

export default SameModal;
