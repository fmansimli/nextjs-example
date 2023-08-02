import type { NextPage } from "next";
import Link from "next/link";

interface IProps {}

const Page: NextPage<IProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-3">
        <Link href="/dynamic/test-comp-one">Link 1</Link>
        <Link href="/dynamic/test-comp-two">Link 2</Link>
        <Link href="/dynamic/test-comp-three">Link 3</Link>
        <Link href="/dynamic/non-existing">non existing</Link>
      </div>
    </div>
  );
};

export default Page;
