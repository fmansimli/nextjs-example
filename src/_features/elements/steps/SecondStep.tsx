import { useState } from "react";

interface IState {
  email: string;
  password: string;
  question: string;
}

const SecondStep = ({ next, step, actions, allData }: any) => {
  const [data, setData] = useState<Partial<IState>>(allData[step]);
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((old) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    next(data);
  };

  return (
    <div className="w-full">
      <h3 className="mb-3 text-lg font-semibold">SecondStep ({step})</h3>
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label>Email:</label>
          <input
            name="email"
            type="text"
            className="text-red-500"
            value={data?.["email"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Password:</label>
          <input
            name="password"
            type="text"
            className="text-red-500"
            value={data?.["password"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Question:</label>
          <input
            name="question"
            type="text"
            className="text-red-500"
            value={data?.["question"] || ""}
            onChange={changeHandler}
          />
        </div>
        <div>{actions}</div>
      </form>
    </div>
  );
};

export default SecondStep;
