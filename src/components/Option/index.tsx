type OptiosType = {
  props: {
    name: string;
    id: string;
  };
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
};

export const Options = function ({
  props,
  inputValue,
  setInputValue,
}: OptiosType) {
  const options = [];
  for (const key in props) {
    const option = (
      <option
        className="text-black"
        key={props[key].id}
        id={props[key].id}
        value={props[key].value}
      >
        {props[key].name}
      </option>
    );
    options.push(option);
  }
  const handleChange = (e) => {
    if (e.target.value !== "نسبت") {
      setInputValue({ ...inputValue, relation: e.target.value });
    }
  };
  return (
    <select
      name=""
      id=""
      className="md:grow rounded py-1 px-3 border border-slate-400"
      onChange={handleChange}
    >
      <option id="firstChild" className="text-slate-500">
        نسبت
      </option>
      {options}
    </select>
  );
};
