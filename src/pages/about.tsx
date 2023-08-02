import type { NextPage } from "next";

interface IProps {}

const Page: NextPage<IProps> = (props) => {
  const data: any = {};

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div>about</div>
    </div>
  );
};

export default Page;
