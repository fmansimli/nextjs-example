import { useState } from "react";

interface IState {
  test1: string;
  test2: string;
  test3: string;
}

const ThirdStep = ({ next, step, actions, allData }: any) => {
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
      <h3 className="my-3 text-lg font-semibold">ThirdStep ({step})</h3>
      <form className="flex flex-col gap-5" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label>Test 1:</label>
          <input
            name="test1"
            type="text"
            className="text-red-500"
            value={data?.["test1"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Test 2:</label>
          <input
            name="test2"
            type="text"
            className="text-red-500"
            value={data?.["test2"] || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Test 3:</label>
          <input
            name="test3"
            type="text"
            className="text-red-500"
            value={data?.["test3"] || ""}
            onChange={changeHandler}
          />
        </div>
        <div>{actions}</div>
      </form>
    </div>
  );
};

export default ThirdStep;
