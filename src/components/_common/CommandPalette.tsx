import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { OPTIONS } from "@/data/palette-data";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    const handler = (e: any) => {
      if (e.key === "m" && (e.metaKey || e.ctrlKey)) {
        setIsOpen((old) => !old);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [isOpen]);

  const FILTERED = query ? OPTIONS.filter((o) => o.title.includes(query)) : [];

  const changeHandler = (value: any) => {
    setIsOpen(false);
    router.push("/elements");
  };

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog onClose={setIsOpen} className="fixed inset-0 overflow-y-auto pt-[20vh]">
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>

        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Combobox
            as="div"
            className="relative mx-auto max-w-3xl divide-y divide-gray-200 overflow-hidden rounded-xl bg-white
                   text-black shadow-2xl ring-1 ring-black/20"
            onChange={changeHandler}>
            <div className="flex items-center gap-2 px-5 py-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-black" />
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                value={query}
                placeholder="Search..."
                className="h-12 border-0 text-indigo-600 outline-none ring-0 focus:ring-0"
              />
            </div>
            {FILTERED.length ? (
              <Combobox.Options static={true} className="space-y-1 overflow-y-auto text-sm">
                {FILTERED.map((option) => (
                  <Combobox.Option key={option.id} value={option.id}>
                    {({ active }) => (
                      <div className={`space-x-1 px-5 py-2 ${active ? "bg-indigo-400" : ""}`}>
                        <span
                          className={`text-base font-medium ${
                            active ? "text-white" : "text-gray-900"
                          }`}>
                          {option.title}
                        </span>
                        <span className="text-red-800">in</span>
                        <span
                          className={`${active ? "text-white" : "text-gray-400"} text-base`}>
                          Team
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            ) : (
              query && <div className="px-4 py-5 text-black">no element found</div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default CommandPalette;
