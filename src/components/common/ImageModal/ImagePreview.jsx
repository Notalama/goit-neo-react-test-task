import React from "react";
import Modal from "react-modal";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
 

const ImageModal = ({
  isOpen,
  onClose,
  image,
  camperName,
  currentIndex,
  totalImages,
  onPrevious,
  onNext,
}) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="relative max-w-[90vw] max-h-[90vh] outline-none"
      overlayClassName="fixed inset-0 bg-black/80 flex justify-center items-center z-[1000] p-5 sm:p-3"
      ariaHideApp={false}
    >
      <div className="relative flex justify-center items-center w-full h-full">
        {/* Close Button */}
        <button
          className="absolute -top-[50px] right-0 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center z-[1001] hover:bg-white transition-colors max-[480px]:top-[10px] max-[480px]:right-[10px] max-[480px]:w-8 max-[480px]:h-8"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoClose className="w-5 h-5 text-[var(--color-text-primary)] max-[480px]:w-4 max-[480px]:h-4" />
        </button>

        {/* Navigation Buttons */}
        {totalImages > 1 && (
          <>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-5 bg-black/60 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center z-[1001] hover:bg-black/80 transition-colors backdrop-blur-[4px] disabled:opacity-30 disabled:cursor-not-allowed max-[480px]:left-3"
              onClick={onPrevious}
              aria-label="Previous image"
              disabled={currentIndex === 0}
            >
              <IoChevronBack className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-5 bg-black/60 rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center z-[1001] hover:bg-black/80 transition-colors backdrop-blur-[4px] disabled:opacity-30 disabled:cursor-not-allowed max-[480px]:right-3"
              onClick={onNext}
              aria-label="Next image"
              disabled={currentIndex === totalImages - 1}
            >
              <IoChevronForward className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Image */}
        <div className="flex justify-center items-center max-w-full max-h-full">
          <img
            src={image.original || image.thumb}
            alt={`${camperName} - Image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Image Counter */}
        {totalImages > 1 && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/90 text-[var(--color-text-primary)] px-4 py-2 rounded-full font-medium text-sm max-[768px]:-bottom-7 max-[768px]:text-xs max-[768px]:px-3 max-[768px]:py-1.5 max-[480px]:bottom-2 max-[480px]:text-[11px] max-[480px]:px-2 max-[480px]:py-1">
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
