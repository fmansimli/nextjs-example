import Carousel from "@/components/Carousel";

const PAGES = [
  {
    title: "Page 1",
    desc: "page Description 1"
  },
  {
    title: "Page 2",
    desc: "page Description 2"
  },
  {
    title: "Page 3",
    desc: "page Description 3"
  },
  {
    title: "Page 4",
    desc: "page Description 4"
  }
];

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="container flex items-center justify-center">
        <Carousel
          count={PAGES.length}
          className="w-[500px] rounded-lg bg-indigo-400 shadow-lg md:w-[1000px]"
          controls
          auto>
          {PAGES.map((page, index) => (
            <div key={index} className="inline-block w-full">
              <div className="flex h-[600px] w-full flex-col items-center justify-center gap-5">
                <h3 className="text-xl">{page.title}</h3>
                <div className="text-lg">{page.desc}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
