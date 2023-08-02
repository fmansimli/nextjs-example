import type { NextPage } from "next";
import Link from "next/link";

interface IProps {}

const ELEMENTS = [
  { title: "carousel", href: "/elements/carousel" },
  { title: "logo slider", href: "/elements/logo-slider" },
  { title: "drag-drop", href: "/elements/drag-drop" },
  { title: "dynamic componenets", href: "/dynamic" },
  { title: "stepper", href: "/elements/stepper-page" }
];

const Page: NextPage<IProps> = (props) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-5">
        {ELEMENTS.map((element, key) => (
          <Link key={key} href={element.href} className="text-lg font-medium">
            {element.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
