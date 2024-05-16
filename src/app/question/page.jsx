"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export default function page() {
  return (
    <main className=" w-full p-5">
      <div className=" flex mx-auto w-full max-w-5xl flex-col ">
        <h1 className=" text-3xl font-bold mt-10">Solve this question</h1>
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

        <a
          href="https://lu.ma/event/evt-ltqCQTvySfYQFGn"
          data-luma-action="checkout"
          className="luma-checkout--button md:w-fit md:self-end mt-7 "
          data-luma-event-id="evt-ltqCQTvySfYQFGn"
        >
          <button> Submit Solution</button>
        </a>
      </div>
    </main>
  );
}
