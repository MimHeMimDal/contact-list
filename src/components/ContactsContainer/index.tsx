import { useState } from "react";
type ContactsContainerType = {
  contacts: any[];
  setContacts: React.Dispatch<React.SetStateAction<any[]>>;
};

export const ContactsContainer = function ({
  contacts,
  setContacts,
}: ContactsContainerType) {
  const [modalStatus, setModalStatus] = useState({ status: false, id: "" });
  const handleDelete = function (id: string) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const closeModal = function () {
    setModalStatus({ status: false, id: "" });
  };
  return (
    <>
      <div className="grid gap-10 px-5 py-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-auto">
        {contacts.map((contact) => (
          <div
            className="bg-[#394867] rounded-lg text-[#F1F6F9] px-5 py-2 flex flex-col gap-1"
            id={contact.id}
            key={contact.id}
          >
            <div className="flex ">
              <div className="grow line-clamp-1">{`${contact.firstName} ${contact.lastName}`}</div>
              <img
                src="../../../public/icons8-trash.svg"
                className="w-5 text-white fill-slate-50"
                alt=""
                onClick={() => {
                  setModalStatus({ status: true, id: contact.id });
                }}
              />
            </div>
            <div className="text-[#9BA4B5]">{contact.phoneNumber}</div>
            <div className="text-[#9BA4B5]">{contact.relation}</div>
            <div className="text-[#9BA4B5]">{contact.email}</div>
          </div>
        ))}
      </div>
      <div
        onClick={closeModal}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center h-screen w-screen bg-black bg-opacity-40 ${
          modalStatus.status ? "" : "hidden"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white relative z-50 px-5 py-6 rounded"
        >
          <h2>آیا از حذف مخاطب اطمینان دارید؟</h2>
          <div className="flex justify-center items-center gap-5 mt-10 [&_>_*]:w-1/4">
            {" "}
            <button
              className="bg-red-600 px-3 rounded text-center py-1"
              onClick={closeModal}
            >
              خیر
            </button>
            <button
              className="bg-green-600 px-3 rounded text-center py-1"
              onClick={() => {
                handleDelete(modalStatus.id);
                closeModal();
              }}
            >
              بله
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
