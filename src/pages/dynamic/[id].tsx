import type { NextPage } from "next";
import { useRouter } from "next/router";

import Dynamic from "../../components/loader/Dynamic";

interface IProps {}

const app = {
  name: "sdssd",
  dsds: "dsdsd"
};

const Page: NextPage<IProps> = (props) => {
  const router = useRouter();

  return (
    <div className="min-h-screen p-10">
      <div className="m-0 border border-black bg-transparent p-3 tracking-tighter hover:hidden">
        <Dynamic
          path={router.query.id as string}
          data={{
            query: router.query,
            asPath: router.asPath,
            pathname: router.pathname
          }}
        />
      </div>
    </div>
  );
};

export default Page;
