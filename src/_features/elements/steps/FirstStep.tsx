import { useState } from "react";

interface IState {
  name: string;
  surname: string;
  username: string;
}

const FirstStep = ({ next, step, actions, allData }: any) => {
  const [data, setData] = useState<Partial<IState>>(allData[step]);
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    next(data);
  };

  return (
    <div className="w-full">
      <h3 className="mb-3 text-lg font-semibold">FirstStep ({step})</h3>
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            className="text-red-500"
            value={data?.["name"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Surname:</label>
          <input
            name="surname"
            type="text"
            className="text-red-500"
            value={data?.["surname"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            className="text-red-500"
            value={data?.["username"] || ""}
            onChange={changeHandler}
          />
        </div>
        <div>{actions}</div>
      </form>
    </div>
  );
};

export default FirstStep;
