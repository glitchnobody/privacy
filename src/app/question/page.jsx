"use client";
import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className=" w-full p-5">
      {open && (
        <div className=" w-full h-full flex items-center justify-center fixed top-0 z-[20]  left-0 ">
          <div
            onClick={() => {
              setOpen(false);
              document.body.style.overflow = "auto";
            }}
            className=" p-3 flex  items-start justify-end cursor-pointer absolute top-0 w-full h-full left-0 -z-10 bg-black/30 backdrop-blur-sm"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#fff"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white w-full md:h-[70vh] h-[calc(100dvh-60px)] mt-[40px]   max-w-md rounded-lg overflow-hidden">
            <iframe
              src="https://lu.ma/embed-checkout/evt-ltqCQTvySfYQFGn"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      )}

      <div className=" flex mx-auto w-full max-w-5xl flex-col ">
        <h1 className=" text-3xl font-bold mt-20">Solve this question</h1>
        <h2 className=" text-lg font-medium mt-7 mb-8">
          Find the bug in the circa code below to find the sum of elements of an
          array and how you will fix it.
        </h2>
        <div className="w-full text-sm bg-[#282a36]   overflow-x-auto">
          <CopyBlock
            className=" text-sm   "
            language="GraphQL"
            text={`pragma circom 2.1.6;

template SumArray () {
    signal input a[5];
    signal output c;

    c <== 0;
    for(var i=0; i<5; i++){
        c <== c+ a[i];
    }
    assert(c == 15);

}

component main { public [ a ] } = SumArray();

/* INPUT = {
    "a": ["5" ,"4", "1", "2", "3"],
} */ `}
            showLineNumbers="true"
            theme={dracula}
          />
        </div>

        <button
          onClick={() => {
            setOpen(true);

            document.body.style.overflow = "hidden";
          }}
          className=" md:w-fit md:self-end mt-7 bg-cyan-950 flex items-end justify-center text-white px-12 h-fit py-2 rounded-full"
        >
          Submit Solution
        </button>
      </div>
    </main>
  );
}
