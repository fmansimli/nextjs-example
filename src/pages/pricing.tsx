import type { NextPage } from "next";

interface IProps {}

const Page: NextPage<IProps> = (props) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div>Pricing</div>
    </div>
  );
};

export default Page;
