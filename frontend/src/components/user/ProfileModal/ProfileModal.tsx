import { Modal, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";

interface ProfileModalProps {
  modalOpened: boolean;
  setModalOpened: (modalOpened: boolean) => void;
}

function ProfileModal({ modalOpened, setModalOpened }: ProfileModalProps) {
  const theme = useMantineTheme();
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [coverImg, setCoverImg] = useState<File | null>(null);

  const handleProfileImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setProfileImg(event.target.files[0]);
    }
  };

  const handleCoverImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCoverImg(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic for updating user info
    setModalOpened(false);
  };

  const overlayColor = theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2];

  return (
    <Modal
      overlayColor={overlayColor}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Edit Profile</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label htmlFor="profileImg">Profile Image</label>
          <input
            type="file"
            id="profileImg"
            name="profileImg"
            onChange={handleProfileImgChange}
          />
        </div>

        <button type="submit" className="button infoButton">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
