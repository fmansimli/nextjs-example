import { NextPage } from "next";

import useSWR from "swr";
import { useLocale } from "@/hooks";

interface IProps {}

const Page: NextPage<IProps> = (props) => {
  const { data, isLoading } = useSWR("/todos");

  const { t } = useLocale();

  if (isLoading) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 px-10 py-10">
      <h1 className="text-3xl">{t("title")}</h1>
      <div className="flex flex-col gap-3">
        {data?.map((todo: any, index: number) => (
          <div key={index} className="flex items-center justify-between border px-5 py-3">
            <span>{todo.title}</span>
            <input type="checkbox" checked={todo.completed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
