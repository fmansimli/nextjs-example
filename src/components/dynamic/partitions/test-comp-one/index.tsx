import { type FC } from "react";

interface IProps {
  data: any;
}

const ComponentOne: FC<IProps> = (props) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md p-5 shadow-md">
      <div className="text-lg text-red-600">ComponentOne</div>
      <hr />
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
};

export default ComponentOne;
