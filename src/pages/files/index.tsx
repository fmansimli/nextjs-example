import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { PDFDownloadLink } from "@react-pdf/renderer";
import IdentityCard from "@/_features/files/pdf-templates/IdentityCard";

const data = {
  sectionOne: {
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet lore"
  },
  sectionTwo: {
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor "
  }
};

interface IPageProps {}

const FilePage: NextPage<IPageProps> = (_props) => {
  const [pageRendered, setPageRendered] = useState(false);

  useEffect(() => {
    setPageRendered(true);
  }, []);

  return (
    <div className="w-full p-2 py-10">
      <div className="flex w-full flex-col gap-10 p-5">
        <div className="flex items-center gap-10">
          <div>
            {pageRendered && (
              <PDFDownloadLink
                document={<IdentityCard data={data} author="Farid Mansimli" show />}
                fileName="example-pdf"
                className="rounded-lg bg-indigo-300 p-3">
                Download this PDF
              </PDFDownloadLink>
            )}
          </div>
          <Link className="text-lg underline" href="/files/search">
            Search
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span>HTML version of PDF:</span>
          <div className="w-full border p-3">
            <div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-red-600">{data.sectionOne.title}</div>
                  <div className="font-light text-green-500">
                    {data.sectionOne.description}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="font-bold text-red-600">{data.sectionTwo.title}</div>
                  <div className="font-light text-green-500">
                    {data.sectionTwo.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span>Real PDF:</span>
          <div className="border">
            <IdentityCard data={data} author="Farid Mansimli" show />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePage;
