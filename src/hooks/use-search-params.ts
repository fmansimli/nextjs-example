import { useState } from "react";

export const useSearchParams = (initial: any) => {
  const [searchParams, setSearchParams] = useState(initial || {});

  function setFunc(args: any | Function) {
    if (typeof args === "function") {
      return;
    } else {
      setSearchParams(args);
    }
  }

  return [searchParams, setFunc];
};
