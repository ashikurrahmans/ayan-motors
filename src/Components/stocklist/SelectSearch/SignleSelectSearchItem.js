import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const people = [
  {
    id: 1,
    name: "Make",
  },
  {
    id: 2,
    name: "Audi",
  },
  {
    id: 3,
    name: "BMW",
  },
  {
    id: 4,
    name: "FORD",
  },
  {
    id: 5,
    name: "MERCEDES-BENZ",
  },
  {
    id: 6,
    name: "PORSHE",
  },
  {
    id: 7,
    name: "TOYOTA",
  },
  {
    id: 8,
    name: "VOLKSWAGEN",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SignleSelectSearchItem = () => {
  const [selected, setSelected] = useState(people[3]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative mt-1 w-64">
              <Listbox.Button className="relative w-full cursor-default border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
                <h2 className="ml-3 block truncate">{selected.name}</h2>

                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <FiChevronDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 max-h-56 w-full overflow-auto  bg-white py-1 text-base shadow-lg  focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-gray-500" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              <span className="font-bold"> {person.name}</span>
                              <span className="ml-2 text-sm font-semibold">
                                ({person.id})
                              </span>
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <AiOutlineCheck
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default SignleSelectSearchItem;
