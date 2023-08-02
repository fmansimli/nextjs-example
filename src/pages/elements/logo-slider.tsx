const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="group flex gap-10 overflow-hidden">
        <div className="group-hover:animation-pause animate-logo-slider">
          <div className="group-hover:pause flex items-center gap-10">
            {new Array(15).fill(0).map((zero, index) => (
              <div
                key={index}
                className="flex h-52 w-96 items-center justify-center border border-red-400">
                <span className="text-2xl">{index}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="group-hover:animation-pause animate-logo-slider">
          <div className="group-hover:pause flex items-center gap-10">
            {new Array(15).fill(0).map((zero, index) => (
              <div
                key={index}
                className="flex h-52 w-96 items-center justify-center border border-red-400">
                <span className="text-2xl">{index}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
