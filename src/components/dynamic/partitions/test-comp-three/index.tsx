import { type FC } from "react";

interface IProps {
  data: any;
}

const ComponentThree: FC<IProps> = (props) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-md p-5 shadow-md">
      <div className="text-lg text-blue-600">ComponentThree</div>
      <hr />
      <div>{JSON.stringify(props.data)}</div>
    </div>
  );
};

export default ComponentThree;
