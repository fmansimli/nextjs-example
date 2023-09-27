import { useState, useMemo, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { BOOKS } from "@/_features/files/data/data";

interface IPageProps {}

const Page: NextPage<IPageProps> = (_props) => {
  const { replace, query, pathname } = useRouter();
  const [searchParams, setSearchParams] = useState({ name: "", onlyTech: false });

  useEffect(() => {
    if (query?.name) {
      setSearchParams({
        name: query.name.toString(),
        onlyTech: query.onlyTech === "true"
      });
    }
  }, [query]);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      if (query.onlyTech === "true") {
        return (
          book.name.toLowerCase().includes(query.name as string) && book.onlyTech === true
        );
      } else {
        return book.name.toLowerCase().includes(searchParams.name.toLowerCase());
      }
    });
  }, [query]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    replace({ pathname, query: { ...searchParams } });
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
                value={searchParams.name}
                onChange={(e) => setSearchParams((old) => ({ ...old, name: e.target.value }))}
              />
            </div>

            <div className="flex items-center gap-4">
              <label htmlFor="onlyTechnical">only technical</label>
              <input
                type="checkbox"
                name="onlyTechnical"
                id="onlyTechnical"
                checked={searchParams.onlyTech}
                onChange={(e) =>
                  setSearchParams((old) => ({ ...old, onlyTech: e.target.checked }))
                }
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
