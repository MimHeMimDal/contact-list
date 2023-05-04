import { useState } from "react";
import { InputContainer } from "../InputContainer";
import { Options } from "../Option";
type AddContactsForm = {
  onSubmit: React.Dispatch<React.SetStateAction<any[]>>;
  contacts: any[];
};

export function AddContactsForm({ onSubmit, contacts }: AddContactsForm) {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    relation: "",
    email: "",
    id: "",
  });
  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    let counter = 0;
    for (const key in inputValue) {
      if (inputValue[key] !== "") counter++;
    }
    if (counter === 5) {
      console.log(inputValue, "sign up was successfull");
      onSubmit([...contacts, { ...inputValue, id: crypto.randomUUID() }]);
      setInputValue({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        relation: "",
        email: "",
        id: "",
      });
      e.target.reset();
    } else {
      console.log("not valid");
    }
  };
  return (
    <form
      className="flex flex-col py-3 px-5 max-w-[1200px] mx-auto"
      onSubmit={handleSubmit}
    >
      <header className="text-center mb-5 font-bold text-lg">
        وب اپلیکیشن مدیریت مخاطب
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
        <div className="flex flex-col sm:gap-5 md:flex-row">
          <InputContainer
            id="firstName"
            placeholder="نام..."
            type="text"
            name="firstName"
            inputValue={inputValue}
            setInputValue={setInputValue}
            pattern={/^[\u0600-\u06FF]{3,15}$/}
            message="نام باید بین 3 تا 15 حرف باشد"
          />
          <InputContainer
            id="lastName"
            placeholder="نام خانوادگی..."
            type="text"
            name="lastName"
            inputValue={inputValue}
            setInputValue={setInputValue}
            pattern={/^[u0600-u06FF]{2,20}$/}
            message="نام خانوادگی باید بین 2 تا 20 حرف باشد"
          />
        </div>
        <div className="flex flex-col sm:gap-5 md:flex-row">
          <InputContainer
            id="phoneNumber"
            placeholder="شماره تماس..."
            type="text"
            name="phoneNumber"
            inputValue={inputValue}
            setInputValue={setInputValue}
            pattern={/^09\d{9}$/}
            message="09111111111"
          />
          <InputContainer
            id="email"
            placeholder="ایمیل"
            type="text"
            name="email"
            inputValue={inputValue}
            setInputValue={setInputValue}
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            message="لطفاٌ یک ایمیل معتبر وارد کنید"
          />
        </div>
        <div className="flex flex-col gap-5 sm:gap-5 md:flex-row sm:col-span-2 sm:justify-around md:col-span-1 md:h-2/3">
          <Options
            props={{
              family: { name: "اعضای خانواده", id: "family" },
              friend: { name: "دوست", id: "friend" },
              coWorker: { name: "همکار", id: "coWorker" },
              relative: { name: "فامیل", id: "relative" },
            }}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <button
            className="bg-[#212A3E] text-[#F1F6F9] rounded-md px-4 py-1 whitespace-nowrap w-full"
            type="submit"
          >
            اضافه کردن
          </button>
        </div>
      </div>
    </form>
  );
}
