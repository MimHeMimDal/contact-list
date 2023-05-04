import { useState } from "react";

type InputContainer = {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      phoneNumber: string;
      relation: string;
      email: string;
      id: string;
    }>
  >;
  inputValue: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    relation: string;
    email: string;
    id: string;
  };
  pattern?: RegExp;
  message: string;
};

export function InputContainer({
  placeholder,
  name,
  id,
  type,
  inputValue,
  setInputValue,
  pattern,
  message,
}: InputContainer) {
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = pattern;
    switch (name) {
      case "firstName":
        if (e.target.value.match(reg)) {
        // if (e.target.value.length > 2 && e.target.value.length < 16) {
        setInputValue({ ...inputValue, firstName: e.target.value });
          setErrorMsg("");
        } else {
          setInputValue({ ...inputValue, firstName: "" });
          setErrorMsg(message);
        }
        break;
      case "lastName":
        if (e.target.value.length > 1 && e.target.value.length < 21) {
          setInputValue({ ...inputValue, lastName: e.target.value });
          setErrorMsg("");
        } else {
          setInputValue({ ...inputValue, lastName: "" });
          setErrorMsg(message);
        }
        break;
      case "email":
        if (reg?.test(e.target.value)) {
          setInputValue({ ...inputValue, email: e.target.value });
          setErrorMsg("");
        } else {
          setInputValue({ ...inputValue, email: "" });
          setErrorMsg(message);
        }
        break;
      case "phoneNumber":
        if (
          e.target.value.length === 11 &&
          e.target.value.slice(0, 2) === "09"
        ) {
          setInputValue({ ...inputValue, phoneNumber: e.target.value });
          setErrorMsg("");
        } else {
          setInputValue({ ...inputValue, phoneNumber: "" });
          setErrorMsg(message);
        }
        break;
    }
  };

  return (
    <div>
      <div
        data-focus="false"
        // onClick={(e) => {
        //   if (e.currentTarget.dataset.focus === "false") {
        //     e.currentTarget.classList.remove("border-slate-400");
        //     e.currentTarget.classList.add("border-black");
        //     e.currentTarget.dataset.focus = "true";
        //   }
        //   // if (e.currentTarget.dataset.focus === "true") {
        //   //   e.currentTarget.classList.add("border-slate-400");
        //   //   e.currentTarget.classList.remove("border-black");
        //   //   e.currentTarget.dataset.focus = "false";
        //   // }
        // }}
        className={`bg-white flex items-center gap-2 rounded`}
      >
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          className={`bg-transparent ${
            errorMsg === ""
              ? "border border-slate-400 focus:border focus:border-black"
              : "border border-red-500 focus:border focus:border-red-500"
          } rounded px-2 py-1 focus:outline-none  w-full h-full`}
          onChange={handleInputChange}
        />
      </div>
      <p
        className={`h-5 text-xs ml-2 ${
          errorMsg === "" ? "text-green-700" : "text-red-600"
        }`}
      >
        {errorMsg}
      </p>
    </div>
  );
}
