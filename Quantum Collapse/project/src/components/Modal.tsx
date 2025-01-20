import React from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#F0F7F4] border-4 border-black rounded-xl p-6 max-w-md w-full mx-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-[#2D3748]">Notice</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#DCFFF9] rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-lg text-[#2D3748] mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#00BA9F] text-white font-bold rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;