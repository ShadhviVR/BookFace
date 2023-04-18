import React, { useState, Fragment } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Props {
  onSubmit: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(`${selectedSubject}: ${message}`);
    setMessage("");
    setIsOpen(false);
    console.log(`${selectedSubject}: ${message}`);
  };

  const subjects = [t("hiring.label"), t("internship.label"), t("event.label")];
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  return (
    <>
      <div className="m-4 sm:mx-20 relative">

      </div>
    </>
  );
};

export default MessageInput;
