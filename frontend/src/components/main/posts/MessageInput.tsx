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
        
        <Transition show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10"
            onClose={() => setIsOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black dark:bg-whitish opacity-30" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full h-full max-w-md p-6 my-8 overflow-visible text-left align-middle transition-all transform bg-whitish dark:bg-dark dark:text-whitish shadow-xl rounded-lg">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-dark dark:text-whitish mb-2"
                  >
                  </Dialog.Title>

                  <div className="mt-2">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-2 text-dark dark:text-whitish bg-whitish dark:bg-dark border-2 border-grey rounded-md focus:outline-none focus:border-teal"
                    />
                  </div>
                  <h3>{t("post.label")}</h3>
                  <Listbox
                    value={selectedSubject}
                    onChange={setSelectedSubject}
                  >
                    <div className="relative mt-1 border-grey">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg  bg-whitish dark:bg-dark dark:text-whitish py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {selectedSubject}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-whitish dark:bg-dark dark:text-whitish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {subjects.map((subject, subjectId) => (
                            <Listbox.Option
                              key={subjectId}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-pink/10 text-pink"
                                    : "text-gray-900 dark:text-whitish"
                                }`
                              }
                              value={subject}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {subject}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pink">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        fill="#df2f89"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  <h3 className="my-2">Hashtags</h3>
                  <input
                    type="text"
                    className="border-2 border-grey bg-whitish rounded-md w-full p-1 focus:border-teal focus:outline-none"
                  ></input>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!message}
                      className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-teal border border-transparent rounded-md focus:outline-none  ${
                        !message ? "bg-grey cursor-not-allowed" : ""
                      }`}
                    >
                      {t("send.label")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex justify-center ml-2 px-4 py-2 text-sm font-medium text-whitish bg-dark dark:text-dark dark:bg-whitish border border-transparent rounded-md hover:bg-grey focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                    >
                      {t("cancel.label")}
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default MessageInput;
