import React, { useState } from "react";
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from './ProfileModal';

const InfoCard: React.FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  return (
    <div className="flex gap-3 items-center text-center justify-center bg-cardColor p-4 rounded-lg w-90%">
      <div className="flex justify-between items-center">
        <h4>Edit Profile</h4>
        <div className="hover:cursor-pointer">
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
