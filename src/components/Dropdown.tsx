import { ChangeEvent, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, } from "@heroicons/react/20/solid";


function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomCombobox(props:any) {
  const [selected, setSelected] = useState({name: 'Branche auswählen'});
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = searchTerm
    ? props.sectors.filter((item:any) => item.name.toLowerCase().includes(searchTerm))
    : props.sectors;

  return (
    <div className="w-64 mb-5">
      <Listbox value={selected} onChange={(e:any) => {
        setSelected(e)
        props.handleSelectSector(e.name)
      }}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-md font-bold text-gray-700">
              Branche
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative p-2 w-full border border-gray-300 rounded-md shadow-sm  pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  {/* <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  <div className="relative">
                    <div className="sticky top-0 z-20 px-1">
                      <div className="mt-1 block items-center">
                        <input
                          type="text"
                          name="search"
                          id="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="shadow-sm border px-2 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 pr-12 font-bold sm:text-sm border-gray-300 rounded-md"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 ">
                          {searchTerm && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-blue-500 font-bold mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              onClick={() => {
                                setSearchTerm("");
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {filteredOptions.map((option:any) => (
                      <Listbox.Option
                        key={option.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </div>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
