import React, { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import tw from "tailwind-styled-components";

const IMAGES = [
  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const GalleryContainer = tw.div`
  grid gap-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2
`;

const ImageContainer = tw.div`
  relative overflow-hidden rounded-lg shadow-md
`;

const ImageOverlay = tw.div`
  absolute inset-0 flex items-center justify-center text-transparent transition-opacity
  bg-black bg-opacity-50 opacity-0 hover:opacity-100 
`;

const Image = tw.img`
  w-full h-full object-cover
`;

const CloseButton = tw.button`
  absolute top-0 right-10 z-10 p-2 text-primary-200 transition-opacity hover:opacity-50
`;

const ModalImage = tw.img`
  max-h-screen mx-auto bg-transparent
`;

const ResponsivePopupImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <>
      <GalleryContainer>
        {IMAGES.map((imageUrl, index) => (
          <ImageContainer key={index}>
            <ImageOverlay onClick={() => openModal(imageUrl)}>
            </ImageOverlay>
            <Image src={imageUrl} alt={`Image ${index}`} />
          </ImageContainer>
        ))}
      </GalleryContainer>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
      >
        <CloseButton onClick={closeModal}>
          <FiX size={34} />
        </CloseButton>
        <ModalImage src={modalImageUrl} alt="Modal Image" />
      </Modal>
    </>
  );
};

export default ResponsivePopupImageGallery;

