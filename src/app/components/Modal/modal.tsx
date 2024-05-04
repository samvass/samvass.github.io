interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: any
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-full transition-opacity bg-black bg-opacity-90 flex justify-center items-center z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-black border-4 border-indigo-800	 rounded-lg shadow-lg p-4 w-1/2 ${
          isOpen ? 'transition-transform duration-500 transform translate-y-0' : 'transition-transform duration-500 transform translate-y-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;


