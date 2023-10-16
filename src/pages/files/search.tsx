import type { NextPage } from "next";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import { BOOKS } from "@/_features/files/data/data";

interface IPageProps {}

const Page: NextPage<IPageProps> = (_props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filteredBooks = searchParams.has("initialized")
    ? BOOKS.filter((book) => {
        if (searchParams.get("onlyTech") === "on") {
          return (
            book.name.toLowerCase().includes(searchParams.get("name") || "") && book.onlyTech
          );
        } else {
          return book.name.toLowerCase().includes(searchParams.get("name") || "");
        }
      })
    : [];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const initialParams = new URLSearchParams(searchParams.toString());
    // router.replace({ search: searchParams.toString() });

    // const params = Object.fromEntries(searchParams);
    // const values = Object.fromEntries(new FormData(e.currentTarget));

    const params = Object.fromEntries(new FormData(e.currentTarget));
    const newParams = new URLSearchParams(params as any);
    newParams.set("initialized", "true");

    router.replace({ search: newParams.toString() });

    //router.replace(pathname + "?" + newParams.toString());
  }

  return (
    <div className="my-10 flex flex-col gap-4 p-5">
      <div className="mb-5 border-b-2">
        <div className="text-xl font-semibold">Search books...</div>
      </div>

      <div className="">
        <form onSubmit={onSubmit}>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <label htmlFor="name">name:</label>
              <input
                className="py-1"
                type="text"
                name="name"
                id="name"
                defaultValue={searchParams.get("name") || ""}
              />
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="onlyTech">only technical</label>
              <input
                type="checkbox"
                name="onlyTech"
                id="onlyTech"
                defaultChecked={searchParams.get("onlyTech") === "on"}
              />
            </div>

            <button className="rounded-lg bg-purple-300 px-5 py-2" type="submit">
              search
            </button>
          </div>
        </form>
      </div>

      <div className="py-5">
        <ul className="flex flex-col gap-6">
          {filteredBooks.map((book, key) => (
            <li className="border py-2" key={key}>
              {book.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
