import { NextPage } from "next";

import useSWR from "swr";
import { useLocale } from "@/hooks";

interface IProps {}

const Page: NextPage<IProps> = () => {
  const { data, isLoading, mutate, isValidating } = useSWR("/todos", {
    revalidateOnMount: false
  });

  const { t } = useLocale();

  function downloadHandler() {
    const base64File = "SGVsbG8gV29ybGQh";

    try {
      const blob = new Blob([atob(base64File)], { type: "application/octet-stream" });

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = "downloaded-file.txt";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      alert("something went wrong while downloading the file.");
    }
  }

  if (isLoading || isValidating) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5 px-10 py-10">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl">{t("title")}</h1>
        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-slate-300 px-4 py-3" onClick={() => mutate()}>
            get todos
          </button>
          <button className="rounded-xl bg-slate-300 px-4 py-3" onClick={() => mutate([])}>
            clear
          </button>

          <button className="rounded-xl bg-slate-300 px-4 py-3" onClick={downloadHandler}>
            download
          </button>
        </div>
      </div>
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
