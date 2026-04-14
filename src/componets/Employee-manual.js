import React from "react";

function Employee(props) {
  return (
    <>
      <div className="h-full w-full space-y-2 rounded-xl bg-white p-6 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:p-4">
        <img
          className="object-cover mx-auto block h-[100px] w-[100] rounded-full sm:mx-0 sm:shrink-0"
          src={props.img}
          alt={props.name}
        />
        <div className="space-y-2 text-center sm:text-left flex-1">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{props.name}</p>
            <p className="font-medium text-gray-500">{props.role}</p>
          </div>
          <button className="rounded-full border border-purple-200 px-4 py-1.5 text-sm font-medium text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Employee;
