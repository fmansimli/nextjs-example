import { FC, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface IProps {
  children: React.ReactNode;
  count: number;
  auto?: boolean;
  interval?: number;
  controls?: boolean;
  className: string;
}

const Carousel: FC<IProps> = ({ className, count, ...props }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!props.auto) return;
    const id = setInterval(next, props.interval);

    return () => clearInterval(id);
  }, []);

  const prev = () => {
    setCurrent((curr) => (curr === 0 ? count - 1 : curr - 1));
  };

  const next = () => {
    setCurrent((curr) => (curr === count - 1 ? 0 : curr + 1));
  };

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div
        className="whitespace-nowrap transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {props.children}
      </div>
      {props.controls && (
        <div className="absolute inset-0 z-10 flex items-center justify-between px-2">
          <ChevronLeftIcon className="w-10" onClick={prev} />
          <ChevronRightIcon className="w-10" onClick={next} />
        </div>
      )}
      <div className="absolute bottom-2 z-30 flex w-full items-center justify-center gap-2">
        {new Array(count).fill(0).map((dot, index) => (
          <button
            onClick={() => setCurrent(index)}
            key={index}
            className={`inline-block h-3 w-3 rounded-full bg-green-300 ${
              current === index ? "p-2" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  interval: 4000,
  auto: false,
  controls: false
};

export default Carousel;
